(function(){
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var list1 = this;
  list1.items = [
    {name: "Milk",quantity: 1},{name: "Chocolate",quantity: 12},{name: "Chips",quantity: 20},
    {name: "Cookies",quantity: 10},{name: "Peanut butter",quantity: 4}
  ];
  list1.moveitem = function(itemIndex) {
  ShoppingListCheckOffService.moveitem(itemIndex, list1.items);
  }
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var list2 = this;
  list2.items = ShoppingListCheckOffService.items;
};

function ShoppingListCheckOffService(){
  var service = this;
  service.items = [];
  service.moveitem = function(itemIndex,arrayOfitems){
    var item = {
      name: "",
      quantity: ""
    }
    item.name = arrayOfitems[itemIndex].name;
    item.quantity = arrayOfitems[itemIndex].quantity;
    arrayOfitems.splice(itemIndex, 1);
    service.items.push(item);
  }
};

})();
