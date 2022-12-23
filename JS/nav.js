$(function () {
    $(".navbar-toggler").click(function () {
        showNavDrawer();
        $(this).toggleClass('change')
    });
    $(window).width(function () {
        sideNav();
    });
    $(window).resize(function () {
        sideNav();
    });
    //close nav and remove overlay when user click on overlay
    $("nav .overlay").click(function () {
        $("nav .navbar-nav").toggleClass("nav-collsaped");
        $("nav .overlay").toggleClass("body-overlay");
        $(".navbar-toggler").removeClass("change")
        $("body").css("overflow","visible");


    });
    function sideNav(){
        if($(window).width()<=767){
        }
        else {
            $("nav .navbar-nav").removeClass("nav-collsaped");
            $("nav .overlay").removeClass("body-overlay");
            $(".navbar-toggler").removeClass("change");
        }
    }
    function showNavDrawer(){
        $("nav .navbar-nav").toggleClass("nav-collsaped");
        $("nav .overlay").toggleClass("body-overlay");
        $("body").css("overflow","hidden");
    }
});