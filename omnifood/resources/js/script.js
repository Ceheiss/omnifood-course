$(document).ready(function () {
 
    /*For the STICKY NAVI*/
    $('.js--section-features').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
 
        /*SCROLL ON BUTTON*/
    $('.js--scroll-to-plans').click(function () { 
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

     $('.js--scroll-to-start').click(function () { 
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

  /* Navigation Scroll*/

     $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

     // Animations on scroll

     $('.js--wp-1').waypoint(function(direction){
     		$('.js--wp-1').addClass('animated fadeIn');
     }, {
     	offset: '50%' //para correr el efect 50% más arriba
     });

       $('.js--wp-2').waypoint(function(direction){
     		$('.js--wp-2').addClass('animated fadeInUp');
     }, {
     	offset: '50%' //para correr el efect 50% más arriba
     });

       $('.js--wp-3').waypoint(function(direction){
     		$('.js--wp-3').addClass('animated fadeIn');
     }, {
     	offset: '50%' //para correr el efect 50% más arriba
     });

        $('.js--wp-4').waypoint(function(direction){
     		$('.js--wp-4').addClass('animated fadeIn');
     }, {
     	offset: '50%' //para correr el efect 50% más arriba
     });

    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });

        new GMaps({
      div: '.map',
      lat: -12.043333,
      lng: -77.028333
    });
     
});

 // Mobile animation




/*
$(document).ready(function(){

$('.js--section-features').waypoints(function(direction) {
	if (direction == "down"){
		$('nav').addClass('sticky');
	} else {
		$('nav').removeClass('sticky');
	}
});



});








var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})

 




 Ejemplo de lo que se puede hacer:

 $('h1').click(function(){
 		$(this).css('background-color', '#f00')
 	})

*/
