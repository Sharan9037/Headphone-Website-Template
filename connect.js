


var bar = document.getElementById("bar");
var responsiveNavbar = document.getElementById("responsive-navbar");
var cross = document.getElementById("cross");

bar.addEventListener("click", function(){
    responsiveNavbar.style.display="block";
    bar.style.display="none";
})

cross.addEventListener("click", function(){
    bar.style.display="block";
    responsiveNavbar.style.display="none";
})