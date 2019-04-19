var app = angular.module("myapp",["ngRoute"]);

app.config(function($routeProvider){

    $routeProvider
    .when("/", {
        templateUrl : "Untitled-28-route1.html",
        controller : "maincontrol"
    })
    .when("/:countryName",{
        templateUrl : "Untitled-28-route2.html",
        controller : "routecontrol"
    })
    .otherwise({
        redirectTo : "/"
    });
    
});

app.controller("maincontrol",function($scope,$http){
$http.get("countries.json").then(function(response){
    $scope.res = response.data;
    console.log("got the JSON");
})
});

app.controller("routecontrol",function($scope,$routeParams,$http){
$scope.cname =  $routeParams.countryName;
console.log("Got the $routeParams");

$http.get("countries.json").then(function(response){
    $scope.res1 = response.data;
    var cdetails = res1.filter(function(entry){
       return entry.name === $scope.cname;
    })[0];
});


});



