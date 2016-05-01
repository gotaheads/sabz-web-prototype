angular.module('sabzPrototypeApp')
  .factory('AuthWithPassword',
    function ($http, $q, $log,
              Validations, Firebases, UserSession) {
      var AuthWithPassword = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;
      AuthWithPassword.auth = function (user) {
        var deferred = $q.defer();

        Firebases.authRef().then(function (authRef) {
          authRef.authWithPassword(user, function onAuth(err, found) {
            if (err) {
              deferred.reject(err);
              return;
            }

            Users.session.save(found);
            deferred.resolve(found);

          });

        });

        return deferred.promise;
      }

      return AuthWithPassword;


    })


