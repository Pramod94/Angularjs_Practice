
var app = angular.module('myapp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'routelanding.html',
            controller: 'RouteLandingCtrl'
        })
        .when('/:countryName', {
            templateUrl: 'routepage.html',
            controller: 'RoutePageCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
});

app.factory('countries',function($http){
    
    function getData(callback){
        $http({
          method: 'GET',
          url: 'countries.json',
          cache: true
        }).success(callback);
      }

    return{
        list : getData
    }

});

// app.directive('mydirective',function(){
// return{
//     scope : {
//         country : '='
//     },
//     restrict : 'AE',
//     templateUrl : 'countries.html'
// }
// });

app.controller('RouteLandingCtrl',function($scope,countries){
    $scope.countries = countries.list();
    console.log("got the JSON");
    });




// app.controller('RouteLandingCtrl',function($scope,$http){
// $http.get('countries.json').then(function(response){
//     $scope.countries = response.data;
//     console.log("got JSON");
// });
// });

app.controller('RoutePageCtrl', function ($scope, $routeParams, $http) {
    $scope.name = $routeParams.countryName;
    $http.get('countries.json').then(function (response) {
        $scope.country = response.data.filter(function (match) {
            return match.name === $scope.name;
            console.log("got the country details");
        })[0];
    });
});
