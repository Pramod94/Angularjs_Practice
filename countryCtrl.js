
var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.
    when('/',{
        templateUrl : 'zcountryList.html',
        controller : 'zcountryListCtrl'
    })
});


app.factory('countries',function($http){

    function getData(callback){
        $http({
            method : 'GET',
            url : 'countries.json',
            cache : true
        }).success(callback)
    }

    return{
        list : getData
    }

});

app.controller('zcountryListCtrl',function($scope, countries){

    countries.list(function(countries){
        $scope.countries = countries;
    })
});