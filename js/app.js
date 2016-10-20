  var App = angular.module('flickrSearcherApp', []);

App.controller('flickrSearcCtrl',['$scope', '$http', function($scope, $http) {
    //  alert("controller loaded");


$scope.search=function(){
      $http ({


        method:  'GET',
        url: 'https://api.flickr.com/services/rest',
        params: {
          method:  'flickr.photos.search',
          api_key: '1caca5c66db1f3ebbc985e5d8193cf66',
          tags: $scope.search_tag,
          text: $scope.searchTerm,
          format:  'json',
          nojsoncallback: 1
                }
            }) .success(function(response, data, id, farm, server, secret) {

                console.log(response);


           $scope.id=response.photos.photo[0].id;
           $scope.farm=response.photos.photo[0].farm;
           $scope.server=response.photos.photo[0].server;
           $scope.secret=response.photos.photo[0].secret;



            });
};

}]);
