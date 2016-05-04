angular.module('sabzPrototypeApp')
  .factory('Palettes',
    function ($http, $q, $log,
              Validations, Firebases,
              PalleteData, LoadPalette, PalettePaths) {
      var Palettes = {data:PalleteData}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;
      //https://plantplanner.azurewebsites.net/apiv1/palettes

      Palettes.toPath = function (palette) {
        return '/palettes/' + createPalettePath(palette);
      }

      var saveKey = function (pallete, key, deferred) {
        var path = PalettePaths.createPalettePath(pallete);
        $log.info('Palettes.saveKey pallete ', path, key);
        Firebases.paletteKeyRef(path).then(function (entities) {
          entities.set(key,function(err) {
            if (err) {
              $log.error('saveKey error: ', err);
              deferred.reject(err);
              return;
            }
            $log.info("key saved successfully.");
            deferred.resolve(pallete);
          })

        })
        return deferred.promise;

      }

      Palettes.create = function (pallete) {
        $log.info('Palettes.create pallete ', pallete);

        var deferred = $q.defer();
        Firebases.paletteRef().then(function (entities) {
          var newRef = entities.push(pallete,function(err) {
            if (err) {
              $log.error('AuthWithPassword.auth failed ', err);
              deferred.reject(err);
              return;
            }
            $log.info("saved successfully.", newRef);
            return saveKey(pallete, key, deferred);
          })
          var key = newRef.key();
          $log.info("newRef ", newRef);
        })
        return deferred.promise;

      }

      Palettes.loadAll = function () {
        //var deferred = $q.defer();
        return $http.get('https://plantplanner.azurewebsites.net/apiv1/palettes').then(function(res) {
          return res.data;
        })
        //return deferred.promise;
      }

      Palettes.load = LoadPalette.load;

      return Palettes;


    })
