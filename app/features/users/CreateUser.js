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
              authenticated.profile = toCreate.profile;
              $log.info('CreateUser.create saving profile ', toCreate.profile.username);
              return SaveUserProfile.save(authenticated);
            }).then(function(user) {
              UserSession.save(user.profile);
              deferred.resolve(user);
            });
          });
        });

        return deferred.promise;
      }

      return CreateUser;


    })

