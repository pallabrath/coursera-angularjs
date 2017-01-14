(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope)
{
  $scope.message = "";
  $scope.processLunchInput = function(){
    $scope.message = processLunch($scope.lunchInput);
  };

}
function processLunch(lunchInput)
{
  console.log("Inside processLunch !!!");
  var msg = "";
  if (lunchInput == "" || lunchInput === undefined || lunchInput == null )
  {
    msg =  'Please enter data first';
  }
  else {
    var lunchArr = lunchInput.split(','); 
    if (lunchArr.length < 4)
    {
      msg = 'Enjoy!';
    }
    else {
      msg = 'Too much!';
    }
  }
  return msg;
}
})();
