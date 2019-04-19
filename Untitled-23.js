
var app = angular.module("myapp",[]);

app.controller("mycontrol",function($scope){

    $scope.items = ["Soap","Facewash","Toothbrush"];

    $scope.itemAdd = function(){
        $scope.items.push($scope.newItem);
        $scope.newItem="";
    }

    $scope.itemRemove = function(x){
        var rm = $scope.items.indexOf(x);
        $scope.items.splice(rm,1);
    }

});
