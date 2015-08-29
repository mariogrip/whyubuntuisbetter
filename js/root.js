var app = angular.module("wuibApp", []);

app.controller("ctrl", ['$scope', '$http', function($scope, $http) {
  $http.get("/items.json").success(function(data){
    var output = [];
    var inside = [];
    var last = 0;
    data.items.forEach(function(out, num) {
      inside.push(out);
      last += 1;
      if (last >= 4){
        output.push(angular.copy(inside));
        inside = [];
        last = 0;
      }
    });
    if (inside.length !== 0){
      output.push(angular.copy(inside));
      last = 0;
    }
    $scope.itemList = output;
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
      $scope.itemList[num].push({name: $scope.new.name});
      $scope.new.name = "";
    }
    $scope.hadMoreAtEnd = function(){
      var num = angular.copy($scope.itemList.length)-1;
      return $scope.itemList[num].length <= 4;
    }
  });
}]);
