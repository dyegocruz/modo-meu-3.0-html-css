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
