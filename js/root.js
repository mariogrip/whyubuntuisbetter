var app = angular.module("wuibApp", ["ngRoute"]);

app.controller("ctrl", ['$scope', '$http', function($scope, $http) {
  $http.get("/items.json").success(function(data){

    $scope.itemList = data;
    $scope.new = {};
    $scope.removeItem = function(nums, num){
      $scope.itemList[nums].splice(num, 1);
    }
    $scope.newItem = function(){
      var num = angular.copy($scope.itemList.length)-1
      if ($scope.itemList[num].length >= 4){
        $scope.itemList.push([]);
        num += 1;
      }
      $scope.itemList[num].push({title: $scope.new.title});
      $scope.new.title = "";
    }
    $scope.hadMoreAtEnd = function(){
      var num = angular.copy($scope.itemList.length)-1;
      return $scope.itemList[num].length <= 4;
    }
  });
}]);

app.directive('u-repeat', function() {
  return function(scope, element, attrs) {
    var hei = document.getElementById(scope.num + "h").style.height
    document.getElementById(scope.num + "t").style.height = 440 - hei;
  };
})

app.filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
}]);

app.config(["$routeProvider",
           function($routeProvider) {
            $routeProvider.
                when("/more/:id", {
                    templateUrl: "views/more.html",
                    controller: "moreCtrl"
            }).
            otherwise({
                templateUrl: "views/root.html"
            })
           }]);