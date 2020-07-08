
$("nav div").click(function() {
            $("ul").slideToggle();
            $("ul ul").css("display", "none");
      });

      $("ul li").click(function() {
            $("ul ul").slideUp();
            $(this).find('ul').slideToggle();
      });

      $(window).resize(function() {
            if($(window).width() > 768) {
                  $("ul").removeAttr('style');
            }
      });



var hotbod = document.querySelector("body");

function doStuff() {
    hotbod.className += " animate";
}

window.onload = function() {
    doStuff();
};



$(document).ready(function() {
  $('#map').dialog({
  	autoOpen: false,
  	width: 305
  });
  $('#mapLink').click(function(evt) {
  	evt.preventDefault(); // don't follow link
  	$('#map').dialog('open');
  }); // end click
}); // end ready




