"use strict"
$(function() {

});
// With JQuery
$(".rang-inp").slider({
    tooltip: 'always'
});
// Header add class
$(window).on('scroll', function (e) {
    parallaxScroll();
});
$(window).on('scroll load', function () {
    if ($(this).scrollTop() >= 100) {
        $('#upbutton').removeClass('hidden');
    } else {
        $('#upbutton').addClass('hidden');
    }
    if ($(this).scrollTop() >= 50) {
        $('header').addClass('back');
    } else {
        $('header').removeClass('back');
    }
});

// Button to top
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('.parallax').css('top',(0-(scrolled*1.3))+'px');
}

$('#upbutton').on('click', function () {
    $('body,html').animate({
        scrollTop : 0
    }, 500);
});

// Price modal
$('#myModal1').on('shown.bs.modal', function () {
    $('#myInput1').focus()
});
$('#myModal2').on('shown.bs.modal', function () {
    $('#myInput2').focus()
});
$('#myModal3').on('shown.bs.modal', function () {
    $('#myInput3').focus()
});
$('#myModal4').on('shown.bs.modal', function () {
    $('#myInput4').focus()
});
$('#myModal6').on('shown.bs.modal', function () {
    $('#myInput6').focus()
});
$(window).on('load', function () {
    setTimeout(function () {
        $('#myModal5').addClass('showad');
        $('body').addClass('modal-open');
        $('#closead').on('click', function () {
            $('#myModal5').removeClass('showad');
            $('body').removeClass('modal-open');
        });
    }, 1000);
});

// Responsive menu

$('.header-toggle').on('click', function () {
    $('header').toggleClass('toggled');
});

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
};
$('.scroll').on('click', function() {
    $('html, body').animate({
        scrollTop: $('section.calculator').offset().top
    }, 'slow');
});
$('.smscroll').on('click',function(e){ // bind лучше заменить on
    e.preventDefault(); // Отменяет стандартное действие ссылки
    var href = $(this).attr('href');
    console.log(href);
    $('html, body').animate({
        scrollTop: $(href).offset().top - 100
    }, 'slow');
});

// Accordion
$( function() {
    var icons = {
        header: "ui-icon-circle-arrow-e",
        activeHeader: "ui-icon-circle-arrow-s"
    };
    $( "#accordion" ).accordion({
        icons: icons,
        heightStyle: "content"
    });
    $( "#toggle" ).button().on( "click", function() {
        if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
            $( "#accordion" ).accordion( "option", "icons", null );
        } else {
            $( "#accordion" ).accordion( "option", "icons", icons );
        }
    });
} );
var active = $( ".selector" ).accordion( "option", "active" );

// Setter
$( ".selector" ).accordion( "option", "active", 2 );
$( ".selector" ).accordion({
    active: 2
});

// Timer
function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    };

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
};

$('.owl-1').owlCarousel({
    margin: 10,
    nav: true,
    loop:true,
    autoHeight:true,
    navText:["",""],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1199: {
            items: 4
        }
    }
});
var sliderTwo = $('.owl-2').owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    loop: true,
    autoHeight:true,
    // onSliderLoad: $(function() {
    //     // sliderTwo.trigger('refresh.owl.carousel');
    //     // $('.feedb-par').removeClass('open');
    // }),
    responsive: {
        0: {
            margin: 50,
            stagePadding: 15
        },
        991: {
            margin: 120,
            stagePadding: 105
        }
    }
});

$('.readmore').on('click', function() {
    $(this).parent().find('.feedb-par').toggleClass("open");
    // sliderTwo.trigger('refresh.owl.carousel');
    // console.log($(this).parent());
});
// $('.owl-nav button').on('click', function () {
//     $(window).reload();
// });

$(".tel-mask").mask("+38(999)999-99-99");
$('.service li:first-of-type').addClass('show');
$('.service .service1').addClass('show');
function res() {
    $(".service .service-punkts > li").on('click', function gc() {
        // `this` is the DOM element that was clicked
        $(this).addClass('show').siblings().removeClass('show');
        var index = $(".service .service-punkts > li").index( this )+ +'1';
        var result = index;
        $('.service' + result).addClass('show').siblings().removeClass('show');
    });
};
res();

$('.range-control input').each(function () {
    var countData = $(this).val();
    var countName = $(this).attr('data-id');
    $('[data-for="' + countName + '"]').text(countData);
    $(this).on('change', function () {
        var countData = $(this).val();
        var countName = $(this).attr('data-id');
        $('[data-for="' + countName + '"]').text(countData);
    });
});

$('.calc-cont1 .count-buttons .count-step-back').hide();
$('.count-step-forward').on('click', function() {
    var stepActive = $('.calc-cont.active');
    stepActive.next().addClass('active');
    stepActive.removeClass('active');
    var stepCount = $('.count-progress .active');
    stepCount.next().addClass('active');
    stepCount.addClass('done').removeClass('active');
});
$('.count-step-back').on('click', function() {
    var stepActive = $('.calc-cont.active');
    stepActive.prev().addClass('active');
    stepActive.removeClass('active');
    var stepCount = $('.count-progress .active');
    stepCount.prev().addClass('active').removeClass('done');
    stepCount.removeClass('active');
});

$('#step1, #step2').on('input', function () {
    if($('#stepbtn1-1').is(':checked') || $('#stepbtn1-2').is(':checked')){
        $('.count-step-first').addClass('active');
    }
    if($('#stepbtn2-1').is(':checked') || $('#stepbtn2-2').is(':checked') || $('#stepbtn2-3').is(':checked') || $('#stepbtn2-4').is(':checked')){
        $('.count-step-second').addClass('active');
    }
});
// $('.range-control input').each(function () {
//     var countData = $(this).val();
//     var countName = $(this).attr('data-id');
//     $('[data-for="' + countName + '"]').text(countData);
//     $(this).on('change', function () {
//         var countData = $(this).val();
//         var countName = $(this).attr('data-id');
//         $('[data-for="' + countName + '"]').text(countData);
//     });
// });


$('.count-list-first input').on('input', function () {
    var countData = $(this).closest('.count-check-item').find('label').text();
    $('.count-data-first').text(countData);
});

$('.count-list-second input').on('input', function () {
    var countData = $(this).closest('.count-check-item').find('label').text();
    $('.count-data-second').text(countData);
});

$('.tumbler-item input').on('input', function () {
    var countName = $(this).attr('id');
    if($(this).is(':checked')){
        $('[data-for="' + countName + '"]').removeClass('hidden');
    }else{
        $('[data-for="' + countName + '"]').addClass('hidden');
    }
});

var deadline="January 01 2018 00:00:00 GMT+0300"; //for Ukraine
var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('clockdiv', deadline);
initializeClock('clockdiv1', deadline);