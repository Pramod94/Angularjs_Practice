var app = angular.module("myapp",[]);

app.controller("mycontrol",function($scope,$http){
    $http.get("countries.json").then(function(response){
        $scope.res = response.data;
        console.log("testing the flow");
    });
});
