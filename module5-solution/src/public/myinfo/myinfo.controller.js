(function(){
  angular.module('public')
  .controller('MyInfoController', MyInfoController);
  MyInfoController.$inject = ['SignUpService'];
  function MyInfoController(SignUpService)
  {
    var myInfoCtrl = this;
    myInfoCtrl.notSignedUp = SignUpService.userDetails == null;
    myInfoCtrl.userDetails = SignUpService.userDetails;
  }
})();
