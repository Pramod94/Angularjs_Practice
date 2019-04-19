         
            
            var app = angular.module("myapp",[]);

            app.controller("mycontrol",function($scope){

                $scope.ureset = function(){
                    $scope.utext = "";
                    $scope.uradio = "";
                }
               
            });
           