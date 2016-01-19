(function(){
var app = angular.module('hello-angularjs', [ ]);

  app.controller('StoreController', function(){
    this.product = gem;
  });

  var gem = {
    name: 'gem name',
    price: 2.95,
    description: '. . .',
    canPurchase: true,
    soldOut: false
  }
})();
