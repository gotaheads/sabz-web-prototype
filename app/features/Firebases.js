angular.module('sabzPrototypeApp')
  .factory('Firebases',
    function ($http, $q, $log,
              Validations) {
      var Firebases = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;
      var deferred;
      var Firebases = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;
      var rootRef = function() {
        return new Firebase('https://sabz.firebaseio.com/');
      }

      //sabz.firebaseio.com
      //incandescent-inferno-4348
      //userRef = rootRef.child('users').child(user.uid);
      var appendKey = function (key) {
        return (isEmpty(key)?'':'/' + key);
      }

      Firebases.paletteKeyRef = function (key) {
        return Firebases.childRef('palette-keys'+ appendKey(key));
      }

      Firebases.paletteRef = function (key) {
        return Firebases.childRef('palettes' + appendKey(key));
      }


      Firebases.userRef = function (uid) {
        return Firebases.authRef().then(function(authRef) {
          return authRef.child('users').child(uid);
        })
      }

      Firebases.authRef = function () {
        return Firebases.childRef('web/uauth');
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
