angular.module('sabzPrototypeApp')
  .factory('CreateUser',
    function ($http, $q, $log,
              Validations, Firebases, AuthWithPassword, SaveUserProfile) {
      var CreateUser = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;

      CreateUser.create = function (user) {
        var deferred = $q.defer();

        Firebases.authRef().then(function (authRef) {
          authRef.createUser(user, function (err) {
            if (err) {
              deferred.reject(err);
              return;
            }

            AuthWithPassword.auth(user).then(function(user) {
              return SaveUserProfile.save(user);
            }).then(function(user) {
              deferred.resolve(user);
            });
          });
        });

        return deferred.promise;
      }

      return CreateUser;


    })

