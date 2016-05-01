angular.module('sabzPrototypeApp')
  .factory('FindUserProfile',
    function ($http, $q, $log,
              Validations, Firebases, GetAuth) {
      var FindUserProfile = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;

      FindUserProfile.find = function () {
        $log.info('FindUserProfile.find...');
        var deferred = $q.defer();
        GetAuth.get().then(function(user) {
          if(isEmpty(user)) {
            $log.info('Not authenticated...');
            return deferred.reject();
          }

          $log.info('FindUserProfile.find', user.uid);
          Firebases.userRef(user.uid).then(function (userRef) {
            userRef.once('value', function (snap) {
              var profile = snap.val();
              if (!profile) {
                $log.info('No profile found...');
                return;
              }
              user.profile = profile
              deferred.resolve(user);
            });
          });
        })

        return deferred.promise;
      }

      return FindUserProfile;


    })

