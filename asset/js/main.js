// this for menu scroll down
$(document).ready(function() {
	$('a[role="Down"]').click(function(e) {
        if($(this).hash !== '') {
            e.preventDefault();
            var hash = this.hash;
            console.log(this.hash);
            $('html, body').animate({
                scrollTop : $(hash).offset().top
            }, 400, function(){
   
            // Add hash (#) to URL when done scrolling (default click behavior)
            // window.location.hash = hash;
          });
        }
    });
});

// this for add background and remove background in Navbar

$(window).on("scroll", function() {
    if($(window).scrollTop() > 70) {
        $(".navbar").addClass("navbar-scroll");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".navbar").removeClass("navbar-scroll");
    }
});


var geser = $(document),
          element = $(".left-bar");
  geser.scroll(function() {
      if(geser.scrollTop() >= 250) {
      element.addClass("fixed-nav");
      } else {
       element.removeClass("fixed-nav");
       }
  });

// for get started
  