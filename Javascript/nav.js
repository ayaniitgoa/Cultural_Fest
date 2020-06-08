var x= window.matchMedia("(max-width:500px)")
function openNav(){
       openNav1(x)
}
function closeNav(){
       closeNav1(x)
}
function openNav1(x) {
       if(x.matches){
       document.getElementById("navicon").style.display= "none";
       document.getElementById("navicon2").style.display= "inline";
       document.getElementById("c1").style.top   = "-60vw";
       document.getElementById("c1").style.right = "-60vw";
       document.getElementById("c2").style.top   = "-70vw";
       document.getElementById("c2").style.right = "-70vw";
       document.getElementById("c3").style.top   = "-80vw";
       document.getElementById("c3").style.right = "-80vw";
       document.getElementById("c4").style.top   = "-90vw";
       document.getElementById("c4").style.right = "-90vw";
       document.getElementById("c5").style.top   = "-100vw";
       document.getElementById("c5").style.right = "-100vw";
       document.getElementById("cult-logo").style.width = "70vw";
       document.getElementById("cult-logo").style.marginLeft = "0vw";
       document.getElementById("Cultrang-logo").style.top = "10vh";
       document.getElementById("Cultrang-logo").style.width = "60vw";
       document.getElementById("Cultrang-logo").style.left = "5vw";
       document.getElementById("registerbutton").style.top = "88.5vh";
       document.getElementById("registerbutton").style.left = "75%";
       }
       else{
       x= window.matchMedia("(max-width:730px)")
       if(x.matches)
       {
       document.getElementById("navicon").style.display= "none";
       document.getElementById("navicon2").style.display= "inline";
       document.getElementById("c1").style.top   = "-40vw";
       document.getElementById("c1").style.right = "-40vw";
       document.getElementById("c2").style.top   = "-50vw";
       document.getElementById("c2").style.right = "-50vw";
       document.getElementById("c3").style.top   = "-60vw";
       document.getElementById("c3").style.right = "-60vw";
       document.getElementById("c4").style.top   = "-70vw";
       document.getElementById("c4").style.right = "-70vw";
       document.getElementById("c5").style.top   = "-80vw";
       document.getElementById("c5").style.right = "-80vw";
       document.getElementById("cult-logo").style.width = "70vw";
       document.getElementById("cult-logo").style.marginLeft = "0vw";
       document.getElementById("Cultrang-logo").style.top = "10vh";
       document.getElementById("Cultrang-logo").style.width = "60vw";
       document.getElementById("Cultrang-logo").style.left = "2vw";
       document.getElementById("registerbutton").style.top = "88.5vh";
       document.getElementById("registerbutton").style.left = "75%";
       }
       else{
       document.getElementById("navicon").style.display= "none";
       document.getElementById("navicon2").style.display= "inline";
       document.getElementById("c1").style.top   = "-40vh";
       document.getElementById("c1").style.right = "-40vh";
       document.getElementById("c2").style.top   = "-50vh";
       document.getElementById("c2").style.right = "-50vh";
       document.getElementById("c3").style.top   = "-60vh";
       document.getElementById("c3").style.right = "-60vh";
       document.getElementById("c4").style.top   = "-70vh";
       document.getElementById("c4").style.right = "-70vh";
       document.getElementById("c5").style.top   = "-80vh";
       document.getElementById("c5").style.right = "-80vh";
       document.getElementById("cult-logo").style.width = "50vw";
       document.getElementById("cult-logo").style.marginLeft = "2vw";
       document.getElementById("Cultrang-logo").style.width = "40vw";
       document.getElementById("Cultrang-logo").style.left = "5vw";
       }
       }

}

function closeNav1(x) {
       if(x.matches ){
       document.getElementById("navicon").style.display= "inline";
       document.getElementById("navicon2").style.display= "none";
       document.getElementById("c1").style.top = "-200vw";
       document.getElementById("c1").style.right = "-200vw";
       document.getElementById("c2").style.top = "-200vw";
       document.getElementById("c2").style.right = "-200vw";
       document.getElementById("c3").style.top = "-200vw";
       document.getElementById("c3").style.right = "-200vw";
       document.getElementById("c4").style.top = "-200vw";
       document.getElementById("c4").style.right = "-200vw";
       document.getElementById("c5").style.top = "-200vw";
       document.getElementById("c5").style.right = "-200vw";
       document.getElementById("cult-logo").style.width = "100vw";
       document.getElementById("cult-logo").style.margin = "0 auto";
       document.getElementById("Cultrang-logo").style.top = "0";
       document.getElementById("Cultrang-logo").style.width = "80vw";
       document.getElementById("Cultrang-logo").style.left = "10vw";
       document.getElementById("registerbutton").style.top = "65vh";
       document.getElementById("registerbutton").style.left = "50%";
       }
       else{
       x= window.matchMedia("(max-width:730px)")
       if(x.matches)
       {
       document.getElementById("navicon").style.display= "inline";
       document.getElementById("navicon2").style.display= "none";
       document.getElementById("c1").style.top = "-200vw";
       document.getElementById("c1").style.right = "-200vw";
       document.getElementById("c2").style.top = "-200vw";
       document.getElementById("c2").style.right = "-200vw";
       document.getElementById("c3").style.top = "-200vw";
       document.getElementById("c3").style.right = "-200vw";
       document.getElementById("c4").style.top = "-200vw";
       document.getElementById("c4").style.right = "-200vw";
       document.getElementById("c5").style.top = "-200vw";
       document.getElementById("c5").style.right = "-200vw";
       document.getElementById("cult-logo").style.width = "100vw";
       document.getElementById("cult-logo").style.margin = "0 auto";
       document.getElementById("Cultrang-logo").style.top = "0";
       document.getElementById("Cultrang-logo").style.width = "80vw";
       document.getElementById("Cultrang-logo").style.left = "10vw";
       document.getElementById("registerbutton").style.top = "65vh";
       document.getElementById("registerbutton").style.left = "50%";
       }
       else{
       document.getElementById("navicon").style.display= "inline";
       document.getElementById("navicon2").style.display= "none";
       document.getElementById("c1").style.top = "-80vh";
       document.getElementById("c1").style.right = "-80vh";
       document.getElementById("c2").style.top = "-100vh";
       document.getElementById("c2").style.right = "-100vh";
       document.getElementById("c3").style.top = "-120vh";
       document.getElementById("c3").style.right = "-120vh";
       document.getElementById("c4").style.top = "-140vh";
       document.getElementById("c4").style.right = "-140vh";
       document.getElementById("c5").style.top = "-160vh";
       document.getElementById("c5").style.right = "-160vh";
       document.getElementById("cult-logo").style.width = "100vw";
       document.getElementById("cult-logo").style.margin = "0 auto";
       document.getElementById("Cultrang-logo").style.width = "60vw";
       document.getElementById("Cultrang-logo").style.left = "20vw";
       }
       }
}
