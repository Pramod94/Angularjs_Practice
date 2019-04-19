var app = angular.module("myapp",[]);

        app.controller("mycontrol",function($scope,$http){

            $http.get("https://www.w3schools.com/angular/customers.php").then(function(response){
                $scope.res = response.data.records;
            });
        });
