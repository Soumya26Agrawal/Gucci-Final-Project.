// GSAP
gsap.from("#bestSeller-title", {
  delay: 0.2,
  duration: 1,
  opacity: 0,
  y: -80,
  x: -80,
});

gsap.from(".bestSeller-box", {
  delay: 0.2,
  duration: 1,
  opacity: 0,
  scale: 0,
  stagger: 0.4,
});
gsap.from("#Seasonal-title", {
  duration: 2,
  opacity: 0,
  y: -80,
  x: -80,
  scrollTrigger: {
    trigger: "#Seasonal-title",
    scroller: "body",
    start: "top 65%",
    end: "top -20%",
    scrub: true,
  },
});

gsap.from(".Seasonal-box", {
  duration: 4,
  opacity: 0,
  scale: 0,
  stagger: 1,

  scrollTrigger: {
    trigger: "#Seasonal-title",
    scroller: "body",
    start: "top 65%", 
    end: "top -20%",
    scrub: 5,
  },
});
gsap.from("#Classic-title", {
  duration: 2,
  opacity: 0,
  y: -80,
  x: -80,
  scrollTrigger: {
    trigger: "#Classic-title",
    scroller: "body",
    start: "top 65%",
    end: "top -20%",
    scrub: true,
  },
});

gsap.from(".Classic-box", {
  duration: 4,
  opacity: 0,
  scale: 0,
  stagger: 1,

  scrollTrigger: {
    trigger: "#Classic-title",
    scroller: "body",
    start: "top 65%",
    end: "top -20%",
    scrub: 5,
  },
});

// Preloader handling
let loader = document.getElementById("preloader");
window.addEventListener("load", () => {
  loader.style.display = "none";
});


// Navbar

// 1. Search Box Dynamic text
const input = document.getElementById("animated-input");
const text = "Order and repeat";
let index = 0;
let direction = 1;
function animateText() {
  if (direction === 1 && index < text.length) {
    input.value += text[index];
    index++;
  } else if (direction === -1 && index > 0) {
    input.value = input.value.slice(0, -1);
    index--;
  }

  if (index === text.length) {
    direction = -1;
  } else if (index === 0) {
    direction = 1;
  }

  setTimeout(animateText, 200);
}

animateText();

// 2. Dropdown

let a = document.querySelectorAll(".dropdown-item");
a = Array.from(a);
a.forEach((a, idx) => {
  a.addEventListener("mouseenter", function () {
    a.style.backgroundColor = "black";
    a.style.color = "white";
  });
  a.addEventListener("mouseleave", function () {
    a.style.backgroundColor = "white";
    a.style.color = "black";
  });
});

// 3. Navbar Hover

const nav= document.querySelector(".navbar")
let navLink = document.querySelectorAll(".nav-link");
let navBrand = document.querySelector(".navbar-brand");
let navSearch = document.querySelector(".navbar .btn");

nav.addEventListener("mouseenter",function(){
  nav.style.backgroundColor="white"
  navLink=Array.from(navLink);
navLink.forEach((item)=>{
  item.style.color="rgb(33, 1, 33)"
  navBrand.style.color="rgb(33, 1, 33)"
  navSearch.classList.remove("btn-outline-light")
  navSearch.classList.add("btn-outline-dark")
})

})
nav.addEventListener("mouseleave",function(){
  nav.style.backgroundColor="rgb(33, 1, 33)"
  navLink=Array.from(navLink);
navLink.forEach((item)=>{
  item.style.color="white"
   navBrand.style.color="white"
   navSearch.classList.remove("btn-outline-dark")
  navSearch.classList.add("btn-outline-light")
})
})

// Navbar Ends

// Video-bg Starts
document.addEventListener("DOMContentLoaded", () => {
  const videos = [
      'videos/video-7.mp4',
      'videos/video-8.mp4'
  ];
  
  let currentVideoIndex = 0;
  const video1 = document.getElementById('video1');
  const video2 = document.getElementById('video2');

  video1.src = videos[currentVideoIndex];
  video1.play();
  video1.style.opacity = 1;

  setInterval(() => {
      currentVideoIndex = (currentVideoIndex + 1) % videos.length;

      const nextVideo = (video1.style.opacity == 1) ? video2 : video1;
      const currentVideo = (video1.style.opacity == 1) ? video1 : video2;

      nextVideo.src = videos[currentVideoIndex];
      nextVideo.play();
      nextVideo.style.opacity = 1;

      setTimeout(() => {
          currentVideo.style.opacity = 0;
      }, 1000);
  }, 10000);
});



// Video-bg Ends

// Image Hovering

let images = document.getElementsByClassName("perfume-img");
// console.log(images)
images = Array.from(images);
images.forEach((image, index) => {
  image.addEventListener("mouseenter", (event) => {
    image.setAttribute("src", `images/perfumeBox${index + 1}.jpeg`);
  });

  image.addEventListener("mouseleave", (event) => {
    image.setAttribute("src", `images/perfume${index + 1}.jpeg`);
  });
});

// Modal Dynamism

const names = [
  "Gucci The Alchemist's Garden A Gloaming Night Eau de Parfum",

  "Gucci Guilty Elixir de Parfum Pour Homme",
  "Gucci The Alchemist's Garden A Midnight Stroll Eau de Parfum",
  "Gucci Guilty Pour Homme Parfum",
  "The Alchemist's Garden, The Eyes Of The Tiger, Eau de Parfum",
  "The Alchemist's Garden, Moonlight Serenade, Acqua Profumata",
  "The Alchemist's Garden, A Chant For The Nymph, Eau de Parfum",
  "The Alchemist's Garden, A Forgotten Rose, Perfumed Oil",
  "Gucci Flora Gorgeous Gardenia Eau de Parfum",
  "Gucci Bloom Ambrosia di Fiori Eau de Parfum",
  "Gucci Guilty Pour Homme Eau de Toilette",
  "The Alchemist's Garden A Song for the Rose Eau de Parfum",
];

const description = [
  `This new version of Guilty is here to capture a moment:It’s a warm,
                slightly smoky, slightly clean vibe that definitely reads
                vanilla, but isn’t cloying or sweet thanks to the base note of
                patchouli, which aids the dry down by giving the vanilla-forward
                base note an earthiness. It’s new, it’s surprising, and it’s
                very Gucci.`,

  ` Speaking of bad-boy scents, It’s woody and smoky,
                like the pop and fizz of crackling logs on a bonfire. It’s
                absolutely a nighttime scent that pairs perfectly with a leather
                jacket and a crafty twinkle in your eye.`,

  ` This bolder, deeper version of Guilty is woody and musky in a
                bad-boy way, but it’s not so deep that you can’t wear it pretty
                much every day. In fact, it’s surprisingly versatile, mostly
                thanks to the opening notes of lavender and lemon, which bring a
                freshness that quickly disappears to reveal the musk and
                patchouli notes. `,

  ` This one, a hint of petrichor (the smell of earth right
                after it rains) but what you mostly get is smooth, deep woods
                with a crackling hit of cinnamon. It’s a unique take on a fall
                fragrance that pairs incredibly well with a cashmere sweater and
                a stone fireplace.`,
];

const price = [
  "$183",
  "$360",
  "$183",
  "$257",
  "$384",
  "$270",
  "$384",
  "$400",
  "$168",
  "$180",
  "$120",
  "$384",
];
const pColor = [
  "rgb(237, 206, 206)",
  "rgb(179, 211, 186)",
  "rgb(194, 188, 188)",
  "rgb(192, 185, 185)",
  "rgb(237, 220, 190)",
  "rgb(244, 205, 241)",
  "rgb(244, 204, 211)",
  "rgb(168, 202, 177",
  "rgb(255, 240, 245)",
  "rgb(255, 220, 220)",
  "rgb(245, 245, 245)",
  "rgb(235, 245, 255)",
];
const outline = [
  "danger",
  "success",
  "dark",
  "dark",
  "warning",
  "success",
  "danger",
  "success",
  "danger",
  "danger",
  "dark",
  "primary",
];

const modal = document.getElementById("staticBackdrop");

let button = document.getElementsByClassName("btn-details-modal");
button = Array.from(button);
button.forEach((button, idx) => {
  button.classList.add(`btn-outline-${outline[idx]}`);
});

button.forEach((button, idx) => {
  button.addEventListener("click", function () {
    modal.querySelector("h1").textContent = names[idx];
    modal
      .querySelector("img")
      .setAttribute("src", `images/perfumeBox${idx + 1}.jpeg`);
    modal.querySelector("#modalPara").textContent = description[idx % 4];
    modal.querySelector("#modalPara").style.backgroundColor = pColor[idx];
    modal.querySelector("#modalPrice span").textContent = price[idx];
  });
});

// Audio on shopping successfully

const audio = new Audio("../audio/buy.wav");
const btn = document.querySelector(".audio-btn");

btn.addEventListener("click", () => {
  audio.play();
});


// Testimonail Starts

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

const swiperEl = document.querySelector("swiper-container");
swiperEl.addEventListener("autoplaytimeleft", (e) => {
  const [swiper, time, progress] = e.detail;
  progressCircle.style.setProperty("--progress", 1 - progress);
  progressContent.textContent = `${Math.ceil(time / 1000)}s`;
});
// Testimonial Ends