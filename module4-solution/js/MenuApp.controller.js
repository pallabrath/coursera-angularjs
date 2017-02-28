(function () {
'use strict';
angular.module('MenuApp')
.controller('MenuAppController', MenuAppController);
MenuAppController.$inject = ['allCategories'];
function MenuAppController(allCategories) {
  var menuApp = this;
  //console.log(allCategories);
  menuApp.allCategories = allCategories.data;
}

})();
