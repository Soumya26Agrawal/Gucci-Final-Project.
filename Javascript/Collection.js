// // GSAP


  gsap.from("#Collection-title", {
    duration: 4,
    opacity: 0,
    y: -80,
    x: -80,
    scrollTrigger: {
      trigger: "#Collection-title",
      scroller: "body",
      start: "top 65%",
      end: "top -20%",
      scrub: true,
    },
  });
  
  gsap.from(".Collection-btn", {
    duration: 3,
    opacity: 0,
    stagger: 1,
  
    scrollTrigger: {
      trigger: "#Collection-title",
      scroller: "body",
      start: "top 65%", 
      end: "top -20%",
      scrub: 3,
    },
  });

  
  gsap.from(".Collection-col", {
    duration: 3,
    opacity: 0,
    x:100,
    stagger: 1,
  
    scrollTrigger: {
      trigger: "#Collection-title",
      scroller: "body",
      start: "top 65%", 
      scrub: 2,
    },
  });

  

// Collection
const collection=[
    "handbag",
    "watch",
    "clothing",
    "footwear"
]

let collectionBtn= document.querySelectorAll(".Collection-btn")
let img= document.querySelectorAll(".collection img")
console.log(img)

 collectionBtn= Array.from(collectionBtn);
 img= Array.from(img);

 collectionBtn.forEach((btn,idx)=>{
    btn.addEventListener("click",function(){
        let item=collection[idx];
        img.forEach((img,idx)=>{
            img.setAttribute("src",`images/${item}${idx+1}.jpeg`)
        })

    })
 })