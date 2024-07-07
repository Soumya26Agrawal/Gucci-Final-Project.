
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
 })
 var fixed = document.querySelector("#fixed-image")
 var elem = document.querySelector("#elem-container")
 function fixedAnimation(){

     elem.addEventListener("mouseenter",function(){
        fixed.style.display = "block" 
     })
     elem.addEventListener("mouseleave",function(){
        fixed.style.display = "none"
     })
 }
 fixedAnimation()
 function imageAnimation(){

     var elems = document.querySelectorAll(".elem")
     elems.forEach(function(e){
      e.addEventListener("mouseenter",function(){
       var image = e.getAttribute("data-image")
       fixed.style.backgroundImage = `url(${image})`
       
        })
     })
 }
 imageAnimation()