"use strict"

window.onload = function () {
    let preloader = $('#preloader');
    preloader.addClass("hide-preloader");
    setInterval(function () {
        preloader.addClass("preloader-hidden");
    }, 990);
    calc();

    setTimeout(function (){
        new bootstrap.Modal(document.getElementById('welcome')).show();
    }, 10000);

}

$(document).ready(function() {
$('a[href^="#"]').click(function(event) {
    event.preventDefault();
    var target = $(this.hash);
    if (target.length) {
        console.log(target.offset().top);
        $('html, body').animate({
            scrollTop: target.offset().top - $('.navs').outerHeight()
        }, 200);
    }
});
});


let id_selectors = ["#type__list__site", "#type__list__front", "#type__list__adaptive"];

let price_dev = {
    "#type__list__site": [
        {"id": 1, "price": 1000, "days": 1},
        {"id": 2, "price": 2000, "days": 2},
        {"id": 3, "price": 3000, "days": 3}
    ],
    "#type__list__front": [
        {"id": 1, "price": 1000, "days": 1},
        {"id": 2, "price": 2000, "days": 2},
        {"id": 3, "price": 3000, "days": 3}
    ],
    "#type__list__adaptive": [
        {"id": 1, "price": 2000, "days": 2},
        {"id": 2, "price": 1000, "days": 1}
    ],
}


function calc() {
    let summ = 0;
    let days = 0;
    id_selectors.forEach(function (selector_itr, index) {
        let id = $(selector_itr).val();
        days += price_dev[selector_itr][--id]['days'];
        summ += price_dev[selector_itr][id]['price'];
    });
    $('#ins_days').text(days);
    $('#ins_sum').text(summ);
}





$('.nav_dot').click(function (e) {
    e.preventDefault();
    let id = $('div.nav_dot.active').attr('data-id');
    let open_slide_id = $(this).attr('data-id');
    let query = " div.slide_rev[data-id=" + id + "]";
    $(query).addClass('hide-slide');
    $(".slide_rev[data-id=" + id + "]").removeClass('slide_active');
    $(" div.slide_rev[data-id=" + open_slide_id + "]").addClass('slide_active');
    $(query).removeClass('hide-slide');
    $(".nav_dot").removeClass('active');
    $(this).addClass('active');

})


$('img.popup-link').magnificPopup({
    type: 'image'
});






