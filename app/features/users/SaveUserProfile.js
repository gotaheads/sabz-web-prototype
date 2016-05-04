angular.module('sabzPrototypeApp')
  .factory('SaveUserProfile',
    function ($http, $q, $log,
              Validations, Firebases, AuthWithPassword) {
      var SaveUserProfile = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;

      SaveUserProfile.save = function (userProfile) {
        var deferred = $q.defer();
        $log.info('SaveUserProfile.save ', userProfile);
        Firebases.userRef(userProfile.uid).then(function (userRef) {
          userRef.set(userProfile, function onComplete() {
            deferred.resolve(userProfile);
          });
        });

        return deferred.promise;
      }

      return SaveUserProfile;


    })

