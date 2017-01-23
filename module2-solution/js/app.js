(function ()
{
'use strict;'
 angular.module('ShoppingCart',[])
  .controller('ToBuyController',ToBuyController)
  .service('ShoppingCartService',ShoppingCartService);
  ToBuyController.$inject = ['$scope','ShoppingCartService'];
  function ToBuyController($scope, ShoppingCartService)
  {
    $scope.catlog = ShoppingCartService.catlog;
  }
  function ShoppingCartService()
  {
    this.catlog = "I am testing";
  }
}
)();
