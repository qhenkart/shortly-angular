angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $http, $location, Links) {
  $scope.link = {};

  $scope.addLink = function(){
    $http.post('/api/links', $scope.link)
      .success(function(data, status, headers, config){
        console.log(data, status)
      });
  }
});
