
angular.module('sabzPrototypeApp')
  .factory('UserSession',
    function ($http, $q, $log, $rootScope,
              Validations, $sessionStorage) {
      var UserSession = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;

      var EVENTS = {SESSION_START:'session-start',SESSION_END:'session-end'};
      UserSession.EVENTS = EVENTS;

      var userProfile = function () {
        return ($sessionStorage.userProfile?$q.when($sessionStorage.userProfile):$q.reject());
      }

      UserSession.userProfile = userProfile;

      UserSession.start = function (userProfile) {
        $log.info('UserSession.start ', userProfile.username);
        $sessionStorage.userProfile = userProfile;
        $rootScope.$broadcast(EVENTS.SESSION_START, {userProfile:userProfile});
        return UserSession.userProfile();
      }

      UserSession.logout = function () {
        $log.info('UserSession.logout ', userProfile());
        $sessionStorage.userProfile = undefined;
        $rootScope.$broadcast(EVENTS.SESSION_END);
        return $q.when(undefined);
      }

      return UserSession;


    })
