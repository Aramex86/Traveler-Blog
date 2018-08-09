
$(document).ready(function () {

    $('.bottomvideo1').mouseover(function () {
        $('.videocover1').show();

        $('.bottomvideo1').mouseout(function () {
            $('.videocover1').hide();
        });
    });
    $('.bottomvideo2').mouseover(function () {
        $('.videocover2').show();

        $('.bottomvideo2').mouseout(function () {
            $('.videocover2').hide();
        });
    });
    $('.bottomvideo3').mouseover(function () {
        $('.videocover3').show();

        $('.bottomvideo3').mouseout(function () {
            $('.videocover3').hide();
        });
    });

    $('.videocover1').click(function () {
        $('#video2, #video3').css("display","none");
        $('#video1').css("display","block");

    });
    $('.videocover2').click(function () {
        $('#video1, #video3').css("display","none");
        $('#video2').css("display","block");
    });
    $('.videocover3').click(function () {
        $('#video2, #video3').css("display","none");
        $('#video3').css("display","block");
    });








    $("#hide").click(function () {
        $(".slide").toggle(1000);
    });
    $(".footer-image ").hover(function () {
        $(this).toggleClass("hover");

        });
    $('.footer-image').click(function () {
       $('#galery').show();
    });
    $('#close').click(function () {
        $('#galery').hide();
    });



    $('.next').click(function () {
        $('.mainimg').addClass(function () {
            $("img:eq(4)").fadeOut(500);


        $('.next').click(function () {
            $('.mainimg').addClass(function () {
                $("img:eq(3)").fadeOut(500);
            });

            $('.next').click(function () {
                $('.mainimg ').addClass(function () {
                    $("img:eq(2)").fadeOut(500);
                });

                $('.next').click(function () {
                    $('.mainimg ').addClass(function () {
                        $("img:eq(1)").fadeOut(500);
                    });

                    $('.next').click(function () {
                        $('.mainimg ').addClass(function () {
                            $("img:eq(0)").fadeOut(500);
                            $('img:eq(0)').fadeIn(500);
                        });
    });
    });
    });
    });
    });
    });
        $('.prev').click(function () {
           $('.mainimg').removeClass(function () {
               $('img:eq(0)').fadeOut(500);
               $('img:eq(0)').fadeIn(500);
           }) ;
            $('.prev').click(function () {
                $('.mainimg').removeClass(function () {
                    $('img:eq(1)').fadeIn(500);
                }) ;
                $('.prev').click(function () {
                    $('.mainimg').removeClass(function () {
                        $('img:eq(2)').fadeIn(500);
                    }) ;
                    $('.prev').click(function () {
                        $('.mainimg').removeClass(function () {
                            $('img:eq(3)').fadeIn(500);
                        }) ;
                        $('.prev').click(function () {
                            $('.mainimg').removeClass(function () {
                                $('img:eq(4)').fadeIn(500);
                            }) ;
        });
        });
        });
        });
        });




});





