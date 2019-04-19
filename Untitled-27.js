
var app = angular.module("myapp",['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when("/",{
        template : "<h3>Main</h3>",
        controller : "routecontrol1"
    }).when("/:countryName",{
        template : "<h3>On basis of Country</h3>",
        controller : "routecontrol2"
    }).otherwise({
        redirectTo : "/"
    });
});

app.controller("routecontrol1",function($scope){
    console.log("passing through main");
});

app.controller("routecontrol2",function($scope,$routeParams){
    console.log($routeParams);
});