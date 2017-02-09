(
  function () {
      'use strict;'
      angular.module('NarrowItDownApp',[])
      .controller('NarrowItDownController',NarrowItDownController )
      .service('MenuSearchService',MenuSearchService)
      .constant('ApiBasePath','https://davids-restaurant.herokuapp.com/')
      .directive('foundItems', FoundItemsDirective);
      NarrowItDownController.$inject = ['MenuSearchService'];
      function NarrowItDownController(MenuSearchService)
      {
        var nc = this;
        nc.searchPressed = false;
        nc.buttonAction = function (searchTerm)
        {
            var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
            promise.then(function(foundItems)
          {
            nc.foundItems = foundItems;
            nc.searchPressed = true;
            //console.log(foundItems);
          })
          .catch(function (error) {
            console.log(error);
           })
       };
       nc.removeItem = function (itemIndex) {
         nc.foundItems.splice(itemIndex, 1);
       };
      }

      MenuSearchService.$inject = ['$http', 'ApiBasePath'];
      function MenuSearchService($http, ApiBasePath)
      {
        var MenuSearchService = this;
        MenuSearchService.getMatchedMenuItems = function(searchTerm)
        {
          console.log(searchTerm);
          return $http({
              method: "GET",
              url: (ApiBasePath + "/menu_items.json"),
            }).then(function (result) {
              var lowerSearchTerm = searchTerm.toLowerCase();
              var foundItems = [];
              for (var i = 0; i < result.data.menu_items.length; i++) {
                  if(result.data.menu_items[i].description.toLowerCase().indexOf(lowerSearchTerm) != -1)
                   {
                     foundItems.push(result.data.menu_items[i]);
                   }
              }
              return foundItems;
             })
            .catch(function (error) {
              console.log(error);
             })
        };
      }

    function  FoundItemsDirective() {
        var ddo = {
          templateUrl: 'foundItems.html',
          scope: {
            items: '<',
            onRemove: '&'
          },
          controller: FoundItemsController,
          controllerAs: 'foundItems',
          bindToController: true
        };

    return ddo;
  }

  function FoundItemsController(){
    var foundItems = this;
  }

  }
)();
