angular.module('sabzPrototypeApp')
  .factory('FindUserProfile',
    function ($http, $q, $log,
              Validations, Firebases, GetAuth) {
      var FindUserProfile = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;

      FindUserProfile.find = function (uid) {
        var deferred = $q.defer();
        Firebases.userRef(uid).then(function (userRef) {
          userRef.once('value', function (snap) {
            var profile = snap.val();
            if (!profile) {
              $log.info('No profile found...');
              return deferred.reject();
            }
            deferred.resolve(profile);
            
          });
        });

        return deferred.promise;

      }


      return FindUserProfile;


    })

