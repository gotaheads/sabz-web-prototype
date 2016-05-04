
angular.module('sabzPrototypeApp')
  .factory('Login',
    function ($log,
              Validations, AuthWithPassword, FindUserProfile,
              UserSession) {
      var Login = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;

      Login.login = function (user) {
        $log.info('Login.login', user);
        return AuthWithPassword.auth(user).then(function(authenticated) {
          $log.info('Login.login authenticated', authenticated.uid);
          return FindUserProfile.find(authenticated.uid);
        }).then(function (profile) {
          $log.info('Login.login profile.username ', profile);
          var userProfile = profile;
          UserSession.start(userProfile);
          return userProfile;
        });
        
      }

      return Login;


    })
