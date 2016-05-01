angular.module('sabzPrototypeApp')
  .factory('Users',
    function ($http, $q, $log,
              Validations, CreateUser, FindUserProfile,
              AuthWithPassword, UserSession) {
      var Users = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;
      //var rootRef = new Firebase('https://docs-sandbox.firebaseio.com/web/uauth');

      Users.user = FindUserProfile.find;
      Users.login = AuthWithPassword.auth;
      Users.register = CreateUser.create;
      Users.session =  UserSession;
      return Users;


    })
