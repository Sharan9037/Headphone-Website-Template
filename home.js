var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");
var count =0;

icon.onclick = function(){
    if(count == 0){
        count = 1;
        mySong.play();
        icon.src = "songs&imgs/pause.png";
    }else{
        mySong.pause();
        icon.src = "songs&imgs/play.png";
        count = 0;
    }

}

console.log(mySong.pause)



// responsive Navbar

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