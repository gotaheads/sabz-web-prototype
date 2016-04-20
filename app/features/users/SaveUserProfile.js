angular.module('sabzPrototypeApp')
  .factory('SaveUserProfile',
    function ($http, $q, $log,
              Validations, Firebases, AuthWithPassword) {
      var SaveUserProfile = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;

      SaveUserProfile.save = function (user) {
        var deferred = $q.defer();

        Firebases.userRef(user.uid).then(function (userRef) {
          userRef.set(user.profile, function onComplete() {


          });

        });

        return deferred.promise;
      }

      return SaveUserProfile;


    })

