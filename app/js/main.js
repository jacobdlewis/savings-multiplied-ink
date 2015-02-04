/* jshint jquery: true */
/* global _: false */

;(function(){
  'use strict';
  var pricesUrl = 'https://savingsmultipliedssh.firebaseio.com/items.json';
  $.get(pricesUrl, function(data){
    _.forEach(data, function(item){
      var itemImg = item.image;
      if (!itemImg) {
        itemImg = 'http://i.imgur.com/fyLXpT9.jpg';
      }
      var $itemForSale = $('<div class="container"><img class="item_image" src="' +
                           itemImg +
                           '"><div>' +
                           item.title +
                           '</div><div>' +
                           item.price +
                           '</div><div>' +
                           item.seller +
                           '</div><div>' +
                           item.endDate +
                           '</div></div>');
      $('.itemGroup').append($itemForSale);
    });
  });
}());
