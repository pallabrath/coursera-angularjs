(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'html/home.html'
  })

  // categories page

  .state('categories', {
    url: '/categories',
    templateUrl: 'html/categories.html',
    controller: 'MenuAppController as menuApp',
    resolve: {
    allCategories: ['MenuDataService', function (MenuDataService) {
       return MenuDataService.getAllCategories();
     }]
   }
  })

  // items page
  .state('items' , {
    url: '/items/{categoryShortName}',
    templateUrl:'html/items.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      item: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              //console.log("categoryShortName = "+$stateParams.categoryShortName);
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            }]
    }
  }
  )
}

})();
