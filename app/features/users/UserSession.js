
angular.module('sabzPrototypeApp')
  .factory('UserSession',
    function ($http, $q, $log,
              Validations, $sessionStorage) {
      var UserSession = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;

      UserSession.user = function () {

        return ($sessionStorage.user?$q.when($sessionStorage.user):$q.reject());
      }

      UserSession.save = function (user) {
        $sessionStorage.user = user;
      }

      return UserSession;


    })
