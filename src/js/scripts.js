
$( document ).ready(function() {

    $('.buttom-back-to-top').click( function(e) {
        //$('html, body').animate({scrollTop: 0}, 2000,"easeInQuad");
        $('html, body').animate({ scrollTop: 0 }, 1000);
        return false;
    });

});


$(window).scroll(function(){

    scroll_page = $(document).scrollTop();
    window_height = $(window).height();

    if (scroll_page >= 150){
        $('.menu-top').fadeOut();
    }else {
        $('.menu-top').fadeIn();
    }

    if(scroll_page > 450){
        $('.buttom-back-to-top').fadeIn();
    }else{
        $('.buttom-back-to-top').fadeOut();
    }

    if (scroll_page + window_height > $('.main-footer-container').offset().top) {
         $('.buttom-back-to-top').css('position','absolute').css('bottom','99%');
    } else {
         $('.buttom-back-to-top').css('position','fixed').css('bottom','5%');
    }
});
