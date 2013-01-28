/*!
 * DigiPIN Plugin for jQuery
 *
 * Version 0.1.0
 *
 * Copyright 2013, Jeremiah Johnson
 * Licensed under the MIT license.
 *
 * Date: Mon Jan 28 24:36:22 -0500 2013
*/
(function( $ ){
  $.fn.digipin = function() {
    var numberArray = [0,1,2,3,4,5,6,7,8,9];
    
    //setup the digipin area
    $("#digipin").html('<span id="digipin-digits"></span><div class="digipin-button" id="digipin-enter"><div class="digipin-text">Enter</div></div>');
		
    //do the initial randomizing of buttons
    //random sort our array a 100 times, multiple times to negate original position bias
    for(var i = 0; i < 100; i++) {
      numberArray.sort(function() {return 0.5 - Math.random()});
    }
    
    //build the new button order
    var html = "";
    for(var i = 0; i < 10; i++) {
      html += '<div class="digipin-button" id="digipin-' + numberArray[i] + '"><div class="digipin-text">' + numberArray[i] + '</div></div>';
    }
      
    $('#digipin-digits').html(html);
   
    //store this so it can be used later
    var selector = this;
    
    $(document).delegate(".digipin-button", "click", function() {
      var value = $(this).attr("id").split("-")[1];
      if(value != "enter") {
        //add it to the input element
        $(selector).val($(selector).val() + value);
            
        //random sort our array a 100 times, multiple times to negate original position bias
        for(var i = 0; i < 100; i++) {
          numberArray.sort(function() {return 0.5 - Math.random()});
        }
        //build the new button order
        var html = "";
        for(var i = 0; i < 10; i++) {
          html += '<div class="digipin-button" id="digipin-' + numberArray[i] + '"><div class="digipin-text">' + numberArray[i] + '</div></div>';
        }
        
        $('#digipin-digits').html(html);
      } else {
        //submit the closest form. Ideally the one it's in
        $(selector).closest("form").submit();
      }
    });
    
    //maintain chainability
    return this;
  };
})( jQuery );