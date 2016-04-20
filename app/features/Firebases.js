angular.module('sabzPrototypeApp')
  .factory('Firebases',
    function ($http, $q, $log,
              Validations) {
      var Firebases = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;
      var deferred;
      var Firebases = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;
      var rootRef = function() {
        return new Firebase('https://incandescent-inferno-4348.firebaseio.com/');
      }

      Firebases.rootRef = function () {
        return $q.when(rootRef());
      }

      Firebases.childRef = function (path) {
        return Firebases.rootRef().then(function (rootRef) {
          return rootRef.child(path);
        });
      }

      return Firebases;


    })
