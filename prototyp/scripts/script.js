
document.getElementById("showmeid").addEventListener("click", function(){
document.getElementById("popup").classList.add("isvisible");
setTimeout(function(){
    document.getElementById("popup").classList.add("isopaque");

  }, 100);
});

document.getElementById("showmeid2").addEventListener("click", function(){
document.getElementById("popup").classList.add("isvisible");
setTimeout(function(){
document.getElementById("popup").classList.add("isopaque");

}, 100);
});


document.getElementById("showmeid3").addEventListener("click", function(){
document.getElementById("popup").classList.add("isvisible");
setTimeout(function(){
document.getElementById("popup").classList.add("isopaque");

}, 100);
});

document.getElementById("popup").addEventListener("click", function(){
document.getElementById("popup").classList.remove("isvisible");
 setTimeout(function(){
document.getElementById("popup").classList.remove("isopaque");

  }, 100);
});
