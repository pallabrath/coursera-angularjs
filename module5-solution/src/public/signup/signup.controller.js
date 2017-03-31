(function () {
  "use strict";
  angular.module('public')
  .controller('SignUpController', SignUpController);
  SignUpController.$inject = ['SignUpService','MenuService'];
  function SignUpController(SignUpService,MenuService) {
    var signUpCtrl = this;
    signUpCtrl.favDishObj = null;    
    signUpCtrl.signUpBtnClick = function()
    {
        console.log("inside signUpBtnClick.");
        signUpCtrl.showSavedMsg = false;
        SignUpService.registerDetails(signUpCtrl.firstName,signUpCtrl.lastName,
        signUpCtrl.email,signUpCtrl.phone,signUpCtrl.favDishObj);
        signUpCtrl.showSavedMsg = true;
    };
    signUpCtrl.verifyDish = function()
    {
      console.log("inside verifyDish");
      var promise = MenuService.getMenuItem(signUpCtrl.favDish);
      promise.then (function(menuData)
      {
        console.log(menuData);
        signUpCtrl.favDishObj = menuData;
        signUpCtrl.invalidDish = false;
      }, function(err) {
        console.log("Error : "+err);
        signUpCtrl.invalidDish = true;
      });

    }
  }
})();
