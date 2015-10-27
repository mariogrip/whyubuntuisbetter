var app = angular.module("wuibApp");

app.controller("moreCtrl", ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){

    $http.get("content/" + $routeParams.id + ".json").then(function(data){
        $scope.data = data.data.item;
    }); 

}]);