
angular.module('sabzPrototypeApp')
  .factory('UserSession',
    function ($http, $q, $log,
              Validations, $sessionStorage) {
      var UserSession = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;



      UserSession.userProfile = function () {
        return ($sessionStorage.userProfile?$q.when($sessionStorage.userProfile):$q.reject());
      }

      UserSession.save = function (userProfile) {
        $sessionStorage.userProfile = userProfile;
        return UserSession.userProfile();
      }

      UserSession.logout = function () {
        $sessionStorage.userProfile = undefined;
        return $q.when(undefined);
      }

      return UserSession;


    })
