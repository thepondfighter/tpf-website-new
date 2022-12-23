//mobile viewport height minus navbar top and bottom
// var x = window.innerHeight;

// document.addEventListener("DOMContentLoaded", function(event) { 
//     var slider_mobile_images = document.getElementsByClassName("w-100 akak");

//     for (var i = 0; i < slider_mobile_images.length; i++) {
    
//         slider_mobile_images[i].style.height = x + "px";
    
//     }  });



//xxx-xxx-xxxx hint for phone input
function show_hint(x) {

    document.getElementById("hint").style.display = "block";

}

function hide_hint(x) {

    document.getElementById("hint").style.display = "none";

}
//no spam hint for email input

function show_hint_email(x) {

    document.getElementById("hint_email").style.display = "block";

}

function hide_hint_email(x) {

    document.getElementById("hint_email").style.display = "none";

}



//S M L CUSTOM BUTTON



function small_price(button) {
    $(".highlighted").removeClass("highlighted");
    $(button).addClass("highlighted");



    document.getElementById("gallon").innerHTML = "Max Gallon: 500";
    document.getElementById("time").innerHTML = "Time: 1 - 3 hours";
    document.getElementById("price").innerHTML = "$550 - $750";
    document.getElementById("pricing-image").src = "pond-cleaning-images-sizes/small-pond-vertical.jpg";
}

function medium_price(button) {
    $(".highlighted").removeClass("highlighted");
    $(button).addClass("highlighted");

    document.getElementById("gallon").innerHTML = "Max Gallon: 1000";
    document.getElementById("time").innerHTML = "Time: 3 - 5 hours";
    document.getElementById("price").innerHTML = "$815 - $1080";
    document.getElementById("pricing-image").src = "pond-cleaning-images-sizes/medium-pond-sample.png";

    

}

function large_price(button) {
    $(".highlighted").removeClass("highlighted");
    $(button).addClass("highlighted");
    document.getElementById("gallon").innerHTML = "Max Gallon: 2000";
    document.getElementById("time").innerHTML = "Time: 5 - 9 hours";
    document.getElementById("price").innerHTML = "$1210 - $1800";
    document.getElementById("pricing-image").src = "pond-cleaning-images-sizes/large-pond-sample.png";
}

function custom_price(button) {
    $(".highlighted").removeClass("highlighted");
    $(button).addClass("highlighted");
    document.getElementById("gallon").innerHTML = "2000 gallons and above";
    document.getElementById("time").innerHTML = "Time: 9 hours and above";
    document.getElementById("price").innerHTML = "$2400+";
    document.getElementById("pricing-image").src = "pond-cleaning-images-sizes/custom-pond-sample.png";
}





function Highlight(button) {
    $(".highlighted").removeClass("highlighted");
    $(button).addClass("highlighted");
 }