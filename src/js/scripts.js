$( document ).ready(function() {

    $('.button-back-to-top').click( function(e) {
        $('html, body').animate({scrollTop: 0}, 1000);
        return false;
    });
    
    $('.menu-category li').hover(function(){
        var pLeft = parseInt($(this).position().left);
        var p = pLeft-(pLeft*(10/100));
        $(this).find('ul').css({left: pLeft});        
    });

});

jQuery.fn.center = function (obj) {
  var loc = obj.offset();
  this.css("top",(obj.outerHeight() - this.outerHeight()) / 2 + loc.top + 'px');
  this.css("left",(obj.outerWidth() - this.outerWidth())  / 2 + loc.left+ 'px');
  return this;
}

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