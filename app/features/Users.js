angular.module('sabzPrototypeApp')
  .factory('Users',
    function ($http, $q, $log,
              Validations, Firebases) {
      var Users = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;

      Users.register = function (user) {
        return Firebases.childRef('users').then(function (entities) {
          var newRef = entities.push(user,function(error) {
            if (error) {
              $log.info("could not be saved.", error);
            } else {
              $log.info("saved successfully.");
            }
          })
          return newRef.key();
        })
      }

      return Users;


    })
