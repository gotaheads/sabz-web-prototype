angular.module('sabzPrototypeApp')
  .factory('AuthWithPassword',
    function ($http, $q, $log,
              Validations, Firebases, UserSession, FindUserProfile) {
      var AuthWithPassword = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;
      AuthWithPassword.auth = function (user) {
        var deferred = $q.defer();
        $log.info('AuthWithPassword.auth authenticated ', user.email);
        Firebases.authRef().then(function (authRef) {
          authRef.authWithPassword(user, function onAuth(err, found) {
            if (err) {
              $log.error('AuthWithPassword.auth failed ', err);
              deferred.reject(err);
              return;
            }
            $log.info('AuthWithPassword.auth found ', found.uid);
            deferred.resolve(found);
          });

        });

        return deferred.promise;
      }

      return AuthWithPassword;


    })


