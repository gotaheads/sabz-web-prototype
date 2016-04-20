angular.module('sabzPrototypeApp')
  .factory('Users',
    function ($http, $q, $log,
              Validations, CreateUser, GetAuth,AuthWithPassword) {
      var Users = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;
      //var rootRef = new Firebase('https://docs-sandbox.firebaseio.com/web/uauth');

      Users.user = GetAuth.get;
      Users.login = AuthWithPassword.auth;

      Users.register = function (user) {
        return CreateUser.create(user);
        //return Firebases.childRef('web/uauth').then(function (entities) {
        //  //validate username
        //  //var username
        //
        //  var newRef = entities.push(user,function(error) {
        //    if (error) {
        //      $log.info("could not be saved.", error);
        //    } else {
        //      $log.info("saved successfully.");
        //    }
        //  })
        //  return newRef.key();
        //})
      }

      return Users;


    })
