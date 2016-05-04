angular.module('sabzPrototypeApp')
  .factory('Users',
    function ($http, $q, $log,
              Validations, CreateUser, 
              AuthWithPassword, UserSession, Login) {
      var Users = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;

      Users.login = Login.login;
      Users.register = CreateUser.create;
      Users.session =  UserSession;
      return Users;


    })
