myApp.controller("PriceController", function ($scope)
{
  $scope.telescops = AllList.telescop;
  for (var i = 0; i < $scope.telescops.length; i++) $scope.telescops[i].targetURL = "#!/article/" + $scope.telescops[i].index;

  $scope.maps = AllList.maps;
  for (var i = 0; i < $scope.maps.length; i++) $scope.maps[i].targetURL = "#!/article/" + $scope.maps[i].index;
});
