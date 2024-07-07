// GSAP

  gsap.from("#Accordion-title", {
    duration: 4,
    opacity: 0,
    y: -80,
    x: -80,
    scrollTrigger: {
      trigger: "#Accordion-title",
      scroller: "body",
      start: "top 65%",
      end: "top -20%",
      scrub: true,
    },
  });
  
  



// Accordion
let accordionBtn= document.querySelectorAll(".accordion-button")
accordionBtn = Array.from(accordionBtn);

accordionBtn.forEach((btn)=>{
btn.addEventListener("mouseenter",function(){
    btn.style.backgroundColor= "rgb(33, 1, 33)"
    btn.style.color= "white"
    // btn.style.border= "1px solid rgb(33, 1, 33)"

})
btn.addEventListener("mouseleave",function(){
    btn.style.backgroundColor= "rgb(33, 1, 33)"
    btn.style.color= "white"
    // btn.style.border= "1px solid rgb(33, 1, 33)"


})
}

)
