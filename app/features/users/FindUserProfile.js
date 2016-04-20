angular.module('sabzPrototypeApp')
  .factory('FindUserProfile',
    function ($http, $q, $log,
              Validations, Firebases, AuthWithPassword) {
      var FindUserProfile = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;

      FindUserProfile.find = function (uid) {
        var deferred = $q.defer();

        Firebases.userRef(uid).then(function (userRef) {
          userRef.once('value', function (snap) {
            var user = snap.val();
            if (!user) {
              return;
            }
            deferred.resolve(user);
          });

        });

        return deferred.promise;
      }

      return FindUserProfile;


    })

