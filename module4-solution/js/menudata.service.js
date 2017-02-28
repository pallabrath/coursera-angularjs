(function () {
'use strict';
angular.module('data')
.service('MenuDataService',MenuDataService )
.constant('ApiBasePath','https://davids-restaurant.herokuapp.com/');

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath)
{
 var MenuDataService = this;
 MenuDataService.getAllCategories = function()
 {
   //console.log("inside MenuDataService.getAllCategories");
   return $http({
       method: "GET",
       url: (ApiBasePath + "/categories.json"),
     });
 };
 MenuDataService.getItemsForCategory = function(categoryShortName)
 {
   //console.log('categoryShortName = '+categoryShortName);
   return $http({
       method: "GET",
       url: (ApiBasePath + "/menu_items.json?category="+categoryShortName),
     });
 };

}

})();
