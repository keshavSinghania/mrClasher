

// //second page animation

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2", 
    start: "25% center", 
    end: "bottom top",   
    toggleActions: "restart none none none", 
    markers: false
  }
});

tl2.from(".page2 .leftImg", {
  x: -1000, 
  duration: 0.3,
  ease: "power1.out" 
});

tl2.from(".page2 .right", {
  x: 1000,
  duration: 0.3,
  ease: "power1.out"
});


tl2.from(".page2 .liveSubs .ytSubs", {
  y: -1000, 
  duration: 0.5,
  ease: "power1.out"
});

//third page animation

const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page3", 
      start: "25% center", 
      end: "bottom top",   
      toggleActions: "restart none none none", 
      scrub: false, 
      markers: false
    }
  });
  tl3.from(".page3 .swiper-slide",{
    scale:1.3,
    opacity:0,
  });
  tl3.from(".page3 .text h3",{
    scale:1.5,
    y:-100
  });
  

  //fourth page animation

  const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page3", 
      start: "15% center", 
      end: "bottom top",   
      toggleActions: "restart none none none", 
      scrub: false, 
      markers: false
    }
  });
  tl4.from(".page4  .top .left",{
      x:-1000,
      delay:2,
      duration:0.3,
  })
  tl4.from(".page4  .top .right",{
      x:1000,
      duration:0.3,
  })
  tl4.from(".page4  .buttom .icons ul li",{
      y:-500,
      stagger:0.2
  })
