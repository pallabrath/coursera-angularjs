(function () {
'use strict';
angular.module('MenuApp')
.component('categories',{
  templateUrl: 'html/categories.component.html',
  bindings: {
    items: '<'
  }
});

})();
