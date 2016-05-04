angular.module('sabzPrototypeApp')
  .factory('GetAuth',
    function ($http, $q, $log,
              Validations, Firebases) {
      var GetAuth = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;

      GetAuth.get = function () {
        return Firebases.authRef().then(function (authRef) {
          return authRef.getAuth();
        });
      }

      return GetAuth;


    })


