$(document).ready(function(){
   $(document).ready(function(){
   
   $( ".finderWindow" ).addClass( ".none" );

    $('#openFinder').click(function(){
        $('.finderWindow').removeClass("none");
    });

    // $('#button').click(function(){
    //     $('nav').addClass("shadow");
    // });

    $('.openScreen').click(function(){
        $('.finderWindow').addClass("fullScreen");
    });

    // $('.fullScreen').click(function(){
    //     $(this).removeClass("fullScreen");
    // });

    $('.footer-siri').click(function(){
        $('.siriWindow').removeClass("none");
    });

    $('#siri-closing').click(function(){
        $('.siriWindow').addClass("none");
    });

    $('#siri-closing').click(function(){
        $('.siriWindow').removeClass("d-flex");
    });

    $('.footer-siri').click(function(){
        $('.siriWindow').addClass("d-flex");
    });

    $('.exitScreen').click(function(){
        $('.finderWindow').removeClass("fullScreen");
    });

    $('#closeApp').click(function(){
        $('.finderWindow').addClass("none");
    });

    $('#closeApp').click(function(){
        $('.finderWindow').removeClass("fullScreen");
    });

    $('#nav-siri').click(function(){
        $('.siriWindow').removeClass("none");
    });

    $('#nav-siri').click(function(){
        $('.siriWindow').addClass("d-flex");
    });



    // $('.footer-finder').click(function(){
    //     $('.finderWindow').addClass("block");
    // });

    // $( ".finderWindow" ).addClass( ".none" );
});
});