
var app = angular.module("myapp", []);

app.controller("mycontrol", function ($scope, $http) {

    $http.get("https://www.w3schools.com/angular/customers.php")
        .then(function (response) {
            $scope.res = response.data.records;
        });
});

app.controller("mycontrol1", function ($scope, $http) {

    $http.get("countries.json")
        .then(function (response) {
            $scope.res1 = response.data;
           
        });
        
});
