$(function () {
    'use strict'
    // scroll 
    $(window).scroll(function () {
        var top = $(window).scrollTop();
        if (top >= 60) {
            $(".navbar").addClass('secondary');
        } else {
            if ($(".navbar").hasClass('secondary')) {
                $(".navbar").removeClass('secondary');
            }
        }
    });
    //owl carousel about section 
    $('#work').owlCarousel({
        items: 3,
        autoplay: true,
        smartspeed: 300,
        loop: true,
        autoplayHovorPause: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items:1
               
            },
            // breakpoint from 480 up
            480 : {
                items:2
               
            },
            // breakpoint from 768 up
            768 : {
                items:3
               
            }
        }
    
    });
    // isotope js
    $(window).on('load', function () {
        $('.filters_menu li').click(function () {
            $('.filters_menu li').removeClass('active');
            $(this).addClass('active');

            var data = $(this).attr('data-filter');
            $grid.isotope({
                filter: data
            })
        });

        var $grid = $(".grid").isotope({
            itemSelector: ".all",
            percentPosition: false,
            masonry: {
                columnWidth: ".all"
            }
        })
    });

    // nice select
    $(document).ready(function () {
        $('select').niceSelect();
    });
    // owl carousel testimonials section
    $('#test').owlCarousel({
        items: 3,
        autoplay: true,
        smartspeed: 300,
        loop: true,
        autoplayHovorPause: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items:1
               
            },
            // breakpoint from 480 up
            480 : {
                items:2
               
            },
            // breakpoint from 768 up
            768 : {
                items:3
               
            }
        }
    
    });

   

    
});