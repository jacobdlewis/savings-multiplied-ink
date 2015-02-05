/* jshint jquery: true */
/* global _: false */

;(function(){
  'use strict';
  var pricesUrl = 'https://savingsmultipliedssh.firebaseio.com/items.json';
  $.get(pricesUrl, function(data){
    _.forEach(data, function(item){
      //variables from returned data
      var image = item.image;
      var title = item.title;
      var price = item.price;
      var seller = item.seller;
      var endDate = item.endDate;

      //deal with date formatting
      var endDateFormat = moment().format(item.endDate);
      var timeUntilExp = moment(endDateFormat).fromNow();

      //jquery variables to append to page
      var $image = $('<img class="item_image" src='+ image +'>')
       .error(function(){
         $image.attr( 'src', 'img/deadlink.png');
       });
      var $title = $('<div>' + title + '</div>');
      var $price = $('<div>' + price + '</div>');
      var $seller = $('<div>' + seller + '</div>');
      var $endDate = $('<div>' + 'Item Expires: ' + timeUntilExp + '</div>');
      var $itemForSale = $('<div></div>')
        .attr('class', 'item_container');

        //put item on page
      $itemForSale.append($image)
        .append($title)
        .append($price)
        .append($seller)
        .append($endDate);
      $('.itemGroup').append($itemForSale);
    });
  });
}());
