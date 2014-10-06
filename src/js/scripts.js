$( document ).ready(function() {

    $('.button-back-to-top').click( function(e) {
        $('html, body').animate({scrollTop: 0}, 1000);
        return false;
    });

    $('.highlights-internal a').hover(function(){
        //alert('oi');
    });

});

$(window).scroll(function(){

    scroll_page = $(document).scrollTop();
    window_height = $(window).height();

    if (scroll_page >= 150){
        $('.menu-top').fadeOut();
        $('.menu-floating').fadeIn();
    }else {
        $('.menu-floating').fadeOut();
        $('.menu-top').fadeIn();
    }

    if(scroll_page > 450){
        $('.button-back-to-top').fadeIn();
    }else{
        $('.button-back-to-top').fadeOut();
    }

    if (scroll_page + window_height > $('.main-footer-container').offset().top) {
         $('.button-back-to-top').css('position','absolute').css('bottom','99%');
    } else {
         $('.button-back-to-top').css('position','fixed').css('bottom','5%');
    }
});
