angular.module('sabzPrototypeApp')
  .factory('Plants',
    function ($http, $q, $log,
              Validations, uuid4) {
      var Plants = {}, isDefined = Validations.isDefined, isEmpty = Validations.isEmpty;
      var deferred;

      /**
       Items: [,…]
         BotanicName: "Abies nordmanniana"
         Code: "AbNd"
         CommonName: "Caucasian Fir"
         Id: 5
         Photo: {Id: 1239, Url: "https://plantpics.blob.core.windows.net/photos/LitPics/1239.jpg", Credit: "",…}
         PlantType: "1"
       PageCount: 91
       PageNo: 1
       PageSize: 20
       TotalRecordCount: 1812       *
       * @returns {*}
       */
      Plants.loadAll = function () {
        deferred = isDefined(deferred)?deferred:$q.defer();
        return $http.get('http://plantplanner.azurewebsites.net/apiv1/plants?pageNo=1&pageSize=200').then(function(res) {
          return res.data;
        })
        //return deferred.promise;
      }

      Plants.load = function (id) {
        deferred = isDefined(deferred)?deferred:$q.defer();
        return $http.get('http://plantplanner.azurewebsites.net/apiv1/plants/' + id).then(function(res) {
          return res.data;
        })
        //return deferred.promise;
      }
      return Plants;


    })
