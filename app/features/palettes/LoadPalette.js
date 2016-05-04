angular.module('sabzPrototypeApp')
  .factory('LoadPalette',
    function ($http, $q, $log,
              Validations, Firebases, PalettePaths) {
      var LoadPalette = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;

      var findId = function (owner, name) {
        var deferred = $q.defer();
        var path = PalettePaths.createPath(owner, name);
        $log.info('Palettes.findId ', path);
        Firebases.paletteKeyRef(path).then(function (entities) {
          entities.once("value", function(snapshot) {
            deferred.resolve(snapshot.val());
          }, function (errorObject) {
            deferred.reject(errorObject);
            console.log("The read failed: " + errorObject.code);
          });
        })
        return deferred.promise;
      }

      LoadPalette.load = function (owner, name) {
        var deferred = $q.defer();
        findId(owner, name).then(function (id) {
          Firebases.paletteRef(id).then(function (entities) {
            entities.on("value", function(snapshot) {
              deferred.resolve(snapshot.val());
            }, function (errorObject) {
              deferred.reject(errorObject);
              console.log("The read failed: " + errorObject.code);
            });

          });
        })

        return deferred.promise;
      }


      return LoadPalette;


    })

