$( document ).ready(function() {

    $('.button-back-to-top').click( function(e) {
        $('html, body').animate({scrollTop: 0}, 1000);
        return false;
    });
    
    $('.menu-categ-item a').hover(function(){        
        $(this).parent().toggleClass('arrow-menu');
        // $('.'+$(this).parent().attr('id')).fadeToggle();
        // console.log('oie');
        $('.'+$(this).attr('id')).fadeToggle();
    });

});

$(window).scroll(function(){

    scroll_page = $(document).scrollTop();
    window_height = $(window).height();

    if (scroll_page >= 150){
        $('.menu-floating').fadeIn();
    }else {
        $('.menu-floating').fadeOut();
    }

    if(scroll_page > $('.menu-category').offset().top){
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