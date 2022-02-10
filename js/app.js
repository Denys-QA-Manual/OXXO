/* Slider */

$("[data-slider]").slick ( {
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1
});


/* Accordion */

$("[data-collapse]").on("click", function(event) {
    event.preventDefault();
    var $this = $(this);
    var blockId = $(this).data('collapse');
    
    $this.toggleClass("active");
       
})

/* Menu nav-toggle*/

$("#nav__toggle--1").on("click", function(event) {
    event.preventDefault;

    $(this).toggleClass("active");
    $("#nav--1").toggleClass("active");
    $("#nav--2").toggleClass("active");
});

$("#nav__toggle--2").on("click", function(event) {
    event.preventDefault;

    $(this).toggleClass("active");
    $("#nav--3").toggleClass("active");
    $("#nav--4").toggleClass("active");
});