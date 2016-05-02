angular.module('sabzPrototypeApp')
  .factory('FindUser',
    function ($http, $q, $log,
              Validations, Firebases, GetAuth, FindUserProfile) {
      var FindUser = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;

      FindUser.find = function () {
        $log.info('FindUser.find...');
        var deferred = $q.defer();
        GetAuth.get().then(function(user) {
          if(isEmpty(user)) {
            $log.info('Not authenticated...');
            return deferred.reject();
          }

          $log.info('FindUser.find', user.uid);

          FindUserProfile.find(user.uid).then(function (profile) {
            user.profile = profile;
            deferred.resolve(user);
          });

        })

        return deferred.promise;
      }

      return FindUser;


    })

