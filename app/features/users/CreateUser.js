angular.module('sabzPrototypeApp')
  .factory('CreateUser',
    function ($http, $q, $log,
              Validations, Firebases, AuthWithPassword, 
              SaveUserProfile, UserSession) {
      var CreateUser = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;

      CreateUser.create = function (toCreate) {
        var deferred = $q.defer();

        Firebases.authRef().then(function (authRef) {
          authRef.createUser(toCreate, function (err) {
            if (err) {
              deferred.reject(err);
              return;
            }
            $log.info('CreateUser.create created ', toCreate.email);

            AuthWithPassword.auth(toCreate).then(function(authenticated) {
              var userProfile = toCreate.profile;
              userProfile.uid = authenticated.uid;
              
              $log.info('CreateUser.create saving profile ', userProfile);
              return SaveUserProfile.save(userProfile);
            }).then(function(userProfile) {
              UserSession.start(userProfile);
              deferred.resolve(userProfile);
            });
          });
        });

        return deferred.promise;
      }

      return CreateUser;


    })

