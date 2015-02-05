/* jshint jquery: true */
/* global _: false */

;(function(){
  'use strict';
  var pricesUrl = 'https://savingsmultipliedssh.firebaseio.com/items.json';
  $.get(pricesUrl, function(data){
    _.forEach(data, function(item){
      var endDateFormat = moment().format(item.endDate);
      var now = moment();
      var time = moment(endDateFormat).format(now);
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
                           time +
                           '</div></div>');
      $('.itemGroup').append($itemForSale);
    });
  });
}());
