(function ()
{
'use strict;'
 angular.module('ShoppingCart',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingCartService',ShoppingCartService);
  ToBuyController.$inject = ['$scope','ShoppingCartService'];
  AlreadyBoughtController.$inject = ['$scope','ShoppingCartService'];
  function ToBuyController($scope, ShoppingCartService)
  {
    $scope.catlog = ShoppingCartService.catlog;
    $scope.addToCart = function(index) {
      ShoppingCartService.addToCart(index);
    }
  }
  function AlreadyBoughtController($scope, ShoppingCartService)
  {
    $scope.alreadyBoughtItems = ShoppingCartService.alreadyBoughtItems;
  }
  function ShoppingCartService()
  {
    var ShoppingCartService = this;
    ShoppingCartService.catlog = [{name: 'chips', quantity : 2 },{name: 'candy', quantity : 3},
  {name: 'bread', quantity : 2 },{name: 'jam', quantity : 1 },
  {name: 'butter', quantity : 1 },{name: 'milk', quantity : 4 }];
    ShoppingCartService.alreadyBoughtItems = [];
    ShoppingCartService.addToCart = function(index)
    {
      //console.log("I am right here "+index);
      ShoppingCartService.alreadyBoughtItems.push(ShoppingCartService.catlog[index]);
      ShoppingCartService.catlog.splice(index, 1);
    }
  }
}
)();
