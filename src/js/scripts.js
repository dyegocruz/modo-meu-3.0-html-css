$( document ).ready(function() {

    $('.menu-category li').hover(
        function() {        
            
            var newOffSet = ($('.menu-category').offset().left - $(this).find('a').first().offset().left);            
            if (newOffSet < 0) {
                $(this).find('.submenu-container').css('left',newOffSet);
            }

            $(this).find('.submenu-container').css('width',$('.menu-category').width());
            $(this).find('.submenu-container').fadeIn();
    }, function() {
        // $(this).find('.submenu-container').fadeOut();
    });

    $('.submenu li').hover(function() {
        $(this).parent().find('li').removeClass('active');
        $(this).addClass('active');
    });

    $('.button-back-to-top').click( function(e) {
        $('html, body').animate({scrollTop: 0}, 1000);
        return false;
    });

    var token = '30666716.1b6f424.e88abbf4a7434ca0acd1f1b530a091e4', // learn how to obtain it below
        userid = '30666716', // User ID - Modo Meu - get it in source HTML of your Instagram profile or look at the next example :)
        num_photos = 7; // how much photos do you want to get*/
 
    // $.ajax({
    //     url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
    //     dataType: 'jsonp',
    //     type: 'GET',
    //     data: {access_token: token, count: num_photos},
    //     success: function(data){            
    //         for( x in data.data ){          
    //             $('.feed-instagram ul').append('<li><img class="photo-instagram" src="'+data.data[x].images.thumbnail.url+'"></li>');
    //             //$('ul').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>'); // data.data[x].images.low_resolution.url - URL of image, 306х306
    //             // data.data[x].images.thumbnail.url - URL of image 150х150
    //             // data.data[x].images.standard_resolution.url - URL of image 612х612
    //             // data.data[x].link - Instagram post URL 
    //         }
    //     },
    //     error: function(data){
    //         console.log(data); // send the error notifications to console
    //     }
    // });

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
