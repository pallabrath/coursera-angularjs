(function (){
  "use strict";
  angular.module('public')
  .service('SignUpService', SignUpService);
  function SignUpService()
  {
    var service = this;
    service.userDetails = null;
    service.registerDetails = function (fName, lName, email, phone,favDish)
    {
      service.userDetails = {
        firstName : fName,
        lastName : lName,
        email : email,
        phone : phone,
        favDish : favDish
      }
    };
  }
})();
