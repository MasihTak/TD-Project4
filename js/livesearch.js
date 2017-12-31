/*
 * Project: livesearch
 * Build Date: December 2017
 * Author: MasihTak
 * License: MIT
 * Copyright (C) 2017 MasihTak
*/

$(window).load(function() {

  // Get All alt attributes
  $('#gallery a').each(function(){
    var $imgCaption = $(this).attr('title').toLowerCase();
    $(this).attr('title', $imgCaption);
  });

  // INTERACTIVE SEARCH BOX
  $( ".search-box" ).keyup(function() {
    var userInput = $(this).val().toLowerCase();

    $('#gallery a').each(function(){

        if ($(this).filter('[title *= ' + userInput + ']').length > 0 || userInput.length < 1) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
  });

});
