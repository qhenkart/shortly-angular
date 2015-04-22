angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  $scope.data = {};
  $scope.getLinks = function(){
    $http.get("/api/links")
      .success(function(links){
        $scope.data.links = links
      });
  }
  $scope.getLinks();
});
