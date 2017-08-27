var wpApp = angular.module('wpApp');

wpApp.controller('photosCtrl', function($scope, $http){
    $http({
      method: 'GET',
      url: 'db.json'
    }).then(function (success){
        $scope.photos = success.data;
        console.log(success.data, 'res');
    },function (error){
      console.log(error, 'can not get data.');
   });
});