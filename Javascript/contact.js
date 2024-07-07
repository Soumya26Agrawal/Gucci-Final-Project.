// GSAP

gsap.from("#Contact-title",{
    delay:0.1,
    duration:4,
    opacity:0,
    y: -80,
    x: -80,
    scrollTrigger: {
        trigger: "#Contact-title",
        scroller: "body",
        start: "top 65%",
        end: "top -20%",
        scrub: true,
      },
    
})
gsap.from('.css',{
    duration:0.8,
    opacity:0,
    y:110,
    stagger:0.7,
    scrollTrigger: {
        trigger: "#Contact-title",
        scroller: "body",
        start: "top 65%",
        end: "top -20%",
        scrub: 3,
      },
    
})



//Contact Us
const contactSubmit= document.querySelector("button.css")
const contactPara= document.querySelector("#Contact-para")
const contactBtn= document.querySelector("#Contact-btn")
contactSubmit.addEventListener("click",()=>{
contactPara.textContent="Thanks for Reaching Out"
contactBtn.textContent="Connected"
})



