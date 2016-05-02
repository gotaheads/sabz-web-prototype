angular.module('sabzPrototypeApp')
  .factory('Users',
    function ($http, $q, $log,
              Validations, CreateUser, FindUser,
              AuthWithPassword, UserSession) {
      var Users = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;

      Users.user = FindUser.find;
      Users.login = AuthWithPassword.auth;
      Users.register = CreateUser.create;
      Users.session =  UserSession;
      return Users;


    })
