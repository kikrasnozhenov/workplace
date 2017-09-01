var wpApp = angular.module('wpApp');

wpApp.controller('photosCtrl', function($http){
	var vm = this;
    $http({
      method: 'GET',
      url: 'db.json'
    }).then(function (response){
        vm.photos = response.data;
        console.log(response.data, 'res');
    },function (error){
      console.log(error, 'can not get data.');
   });
});