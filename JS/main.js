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

    // $('.fullScreen').click(function(){
    //     $(this).addClass("littleScreen");
    // });

    $('.exitScreen').click(function(){
        $('.finderWindow').removeClass("fullScreen");
    });

    $('#closeApp').click(function(){
        $('.finderWindow').addClass("none");
    });

    $('#closeApp').click(function(){
        $('.finderWindow').removeClass("fullScreen");
    });

    // $('#exitScreen').click(function(){
    //     $('.finderWindow').removeClass("fullScreen");
    // });

    // $('.footer-finder').click(function(){
    //     $('.finderWindow').addClass("block");
    // });

    // $( ".finderWindow" ).addClass( ".none" );
});