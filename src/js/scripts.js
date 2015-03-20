$( document ).ready(function() {

    $('.slide-menu-control a').click(function(){
        
    });

    $('.button-back-to-top').click( function(e) {
        $('html, body').animate({scrollTop: 0}, 1000);
        return false;
    });
    
    $('.menu-category li').hover(function(){
        var pLeft = parseInt($(this).position().left);
        var pRight = parseInt(($(window).width() - ($(this).offset().left + $(this).outerWidth())));        

        // if(pLeft > 484){
        //     $(this).find('ul').css({right: pRight/3, left:'none', position: 'absolute'});            
        // }else{         
            $(this).find('ul').css({left: pLeft});
        //}
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