/*
 * Project: Simple Lightbox
 * Build Date: December 2017
 * Author: MasihTak
 * License: MIT
 * Copyright (C) 2017 MasihTak
 */

$(window).load(function() {

  // jQuery representation variable for lightbox
  var $lightbox = $('<div id="lightbox"></div>');
  var $lightboxContainer = $('<div id="lightbox-container"></div>');
  var $img = $("<img>");
  var $caption = $("<p></p>");
  var $galleryLength = $("#gallery a").length - 1;
  var counter = 0;


  $lightbox.append($lightboxContainer);

  // add image to the lightbox
  $lightboxContainer.append($img);

  // lightbox buttons
  $lightboxContainer.append('<button id="prev">&LessLess;</button>'); // previous button
  $lightboxContainer.append('<button id="next">&GreaterGreater;</button>'); // next button
  $lightbox.append('<button id="close">&times;</button>'); // close button

  // add caption to the lightbox
  $lightboxContainer.append($caption);

  // Add Lightbox
  $("body").append($lightbox);


  // Update image location and its caption
  function updateImage(imageLocation, imageCaption) {
    //update image
    $img.attr("src", imageLocation);
    //update caption
    $caption.text(imageCaption);
  };

  // Capture the click event on a link to an image
  $('#gallery a').click(function(event) {
    // prevent defaul browser behavier corresponding the href element
    event.preventDefault();

    // get image link address
    var imageLocation = $(this).attr("href");
    // Get child's alt attribute and set caption
    var imageCaption = $(this).attr("title");

    // set counter to the current image's index value
    counter = $(this).index();

    // Update the lightbox with the image linked in the link
    updateImage(imageLocation, imageCaption);

    // set animation for lightbox img
    $img.hide().fadeIn(500);
    // Show the lightbox
    $lightbox.show();

  }); //gallery



  // update the lightbox when next and previous buttons clicked
  function updateLightBox() {
    var newImgSelected = $("#gallery a").get(counter);
    var imageLocation = $(newImgSelected).attr("href");
    var imageCaption = $(newImgSelected).attr("title");

    updateImage(imageLocation, imageCaption);
  }


  $("#next").on('click', function() {
    if (counter < $galleryLength) {
      counter++;
      updateLightBox();
    } else {
      counter = 0;
    }
  });

  $("#prev").click(function() {
    if (counter > 0) {
      counter--;
      updateLightBox();
    } else {
      counter = $galleryLength;
    }
  });

  // When close button clicked hide the lightbox
  $('#close').click(function() {
    $($lightbox).hide();
  })

});
