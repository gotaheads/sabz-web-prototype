angular.module('sabzPrototypeApp')
  .factory('CreateUser',
    function ($http, $q, $log,
              Validations, Firebases, AuthWithPassword, SaveUserProfile) {
      var CreateUser = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;

      CreateUser.create = function (toCreate) {
        var deferred = $q.defer();

        Firebases.authRef().then(function (authRef) {
          authRef.createUser(toCreate, function (err) {
            if (err) {
              deferred.reject(err);
              return;
            }

            AuthWithPassword.auth(toCreate).then(function(authenticated) {
              authenticated.profile = toCreate.profile;
              return SaveUserProfile.save(authenticated);
            }).then(function(user) {
              deferred.resolve(user);
            });
          });
        });

        return deferred.promise;
      }

      return CreateUser;


    })

