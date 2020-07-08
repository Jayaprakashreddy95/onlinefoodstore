

// Automatic Slideshow - change image every 2 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 2000);
}



<!---nav bar--->

$("nav div").click(function() {
            $("ul").slideToggle();
            $("ul ul").css("display", "none");
      });

      $("ul li").click(function() {
            $("ul ul").slideUp();
            $(this).find('ul').slideToggle();
      });
      
        //dialog
   $( function() {
    $( "#dialog" ).dialog();
  } );
  
      
       //cookie

  function closeCookiesFunction(){
    var elem = document.getElementById('cookieAlert');
    return elem.parentNode.removeChild(elem);
  }
 
  //slidedown
  $(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});

