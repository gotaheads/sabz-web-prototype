angular.module('sabzPrototypeApp')
  .factory('Sabz',
    function ($http, $q, $log,
              Validations, Firebases, PalleteData) {
      var Sabz = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;

      sabzAccount = {username:'sabz', email:'gotahiroki@gmail.com'}
      //12345

      Sabz.save = function (pallete) {
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

      return Sabz;


    })
