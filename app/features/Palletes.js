angular.module('sabzPrototypeApp')
  .factory('Palletes',
    function ($http, $q, $log,
              Validations, Firebases) {
      var Palletes = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;
//https://plantplanner.azurewebsites.net/apiv1/palettes
      Palletes.save = function (pallete) {
        Firebases.rootRef('palletes').then(function (entities) {
          var newRef = entities.push(pallete,function(error) {
            if (error) {
              $log.info("could not be saved.", error);
            } else {
              $log.info("saved successfully.");
            }
          })
          var key = newRef.key();
          $log.info("newRef ", newRef);
        })
      }
      Palletes.loadAll = function () {
        //var deferred = $q.defer();
        return $http.get('https://plantplanner.azurewebsites.net/apiv1/palettes').then(function(res) {
          return res.data;
        })
        //return deferred.promise;
      }

      return Palletes;


    })
