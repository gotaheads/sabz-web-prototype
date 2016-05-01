angular.module('sabzPrototypeApp')
  .factory('PalleteData',
    function ($http, $q, $log,
              Validations, Firebases) {
      var PalleteData = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;

      PalleteData.japaneseGarden = {name:'Japanese Garden', description:'Traditional Japanese Garden',
      plants:[340,440,181]}

      return PalleteData;


    })
