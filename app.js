(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var listToBuy = this;

  listToBuy.items = ShoppingListCheckOffService.getItemsToBuy();

  listToBuy.buyItem = function (itemIndex) {
    var item = listToBuy.items[itemIndex];
    ShoppingListCheckOffService.addBoughtItem(item.name, item.quantity);
    ShoppingListCheckOffService.removeBoughtItem(itemIndex);
  }
}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var listBought = this;

  listBought.items = ShoppingListCheckOffService.getItemsBought();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items_to_buy = [
    {
      name: 'Apples',
      quantity: 5
    },
    {
      name: 'Bananas',
      quantity: 3
    },
    {
      name: 'Oranges',
      quantity: 5
    },
    {
      name: 'Pineapple',
      quantity: 1
    },
    {
      name: 'Mango',
      quantity: 2
    }
  ];
  // List of bought items
  var items_bought = [];

  service.addBoughtItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items_bought.push(item);
  };

  service.removeBoughtItem = function (itemIdex) {
    items_to_buy.splice(itemIdex, 1);
  };

  service.getItemsToBuy = function () {
    return items_to_buy;
  };

  service.getItemsBought = function () {
    return items_bought;
  };
}

})();
