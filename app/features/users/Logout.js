angular.module('sabzPrototypeApp')
  .factory('Logout',
    function ($http, $q, $log,
              Validations, Firebases, UserSession) {
      var Logout = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;

      Logout.logout = function () {
        return Firebases.authRef().then(function (authRef) {
          UserSession.logout();
          return authRef.unauth();
        });

      }

      return Logout;


    })


