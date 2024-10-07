
// const swiper = new Swiper('.swiper-container', {
//     direction: 'horizontal', // Ensures horizontal sliding (default)
//     loop: true, // Enables looping
//     autoplay: {
//         delay: 3000,  // Slide every 3 seconds
//         reverseDirection: true,  // This makes the autoplay go towards the right
//     },
//     navigation: {
//         prevEl: '.swiper-button-prev',  // Left arrow
//     },
//     slidesPerView: 3,  // Show 3 slides at a time
//     spaceBetween: 30,  // Adds space between the slides
// });


const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',  // Ensures horizontal sliding
    loop: true,               // Enables looping
    autoplay: {
        delay: 3000,          // Slide every 3 seconds
        reverseDirection: true,  // Reverses autoplay direction to go towards the right
    },
    navigation: {
        prevEl: '.swiper-button-prev', // Left arrow
        nextEl: '.swiper-button-next', // Right arrow (if you have a next button)
    },
    slidesPerView: 3,         // Default: Show 3 slides at a time
    spaceBetween: 30,         // Default: Adds space between the slides

    // Responsive breakpoints
    breakpoints: {
        // when window width is <= 320px (extra small mobile)
        320: {
            slidesPerView: 1,  // Show 1 slide at a time for small mobile phones
            spaceBetween: 5    // Minimal space between slides for compact view
        },
        // when window width is <= 480px (small mobile)
        480: {
            slidesPerView: 1,  // Show 1 slide at a time
            spaceBetween: 10   // Reduce space between slides for small screens
        },
        // when window width is <= 640px (medium mobile)
        640: {
            slidesPerView: 2,  // Show 2 slides at a time on medium mobile screens
            spaceBetween: 15   // Moderate space between slides
        },
        // when window width is <= 768px (tablets or large mobile)
        768: {
            slidesPerView: 2,  // Show 2 slides at a time on tablets and larger phones
            spaceBetween: 20   // More space between slides
        },
        // when window width is <= 1024px (small laptops or tablets in landscape mode)
        1024: {
            slidesPerView: 3,  // Show 3 slides on larger tablets and smaller laptops
            spaceBetween: 25   // Standard space between slides
        },
        // when window width is <= 1440px (desktops)
        1440: {
            slidesPerView: 4,  // Show 4 slides on desktop-sized screens
            spaceBetween: 30   // Generous space between slides for larger displays
        },
        // when window width is > 1440px (large desktops and ultra-wide displays)
        1920: {
            slidesPerView: 5,  // Show 5 slides on extra-large screens
            spaceBetween: 40   // Even more space for large displays
        }
    }
});


window.addEventListener('load', function() {
    gsap.from(".loader ",{
        scale:10,
      })

    // Hide loading screen after animation
    setTimeout(() => {
        gsap.to(".loader", {
            duration: 1,
            opacity: 0,
            onComplete: () => {
                document.querySelector(".loader").style.display = "none";
                const tl = gsap.timeline(
                );
                
                tl.from(".navbar .left h2",{
                    y:-100,
                    duration:0.5,
                });
                tl.from(".navbar .right li",{
                    y:-100,
                    stagger:0.2,
                })
                gsap.from(".page1 .left",{
                    x:-1000
                })
                gsap.from(".page1 .right",{
                    x:1000
                })
            }
        });
    }, 2000); 
});
