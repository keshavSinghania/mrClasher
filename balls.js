function ballAnimation() {
  const container = document.getElementById('icon-container');

  // List of social media icons with their respective colors
  const icons = [
    { class: 'fab fa-snapchat', color: '#FFFC00' }, 
    { class: 'fab fa-instagram', color: '#C13584' },
    { class: 'fab fa-youtube', color: '#FF0000' },
    { class: 'fab fa-twitter', color: '#1DA1F2' },
    { class: 'fab fa-facebook', color: '#3b5998' },
    { class: 'fab fa-whatsapp', color: '#25D366' },
    { class: 'fab fa-linkedin', color: '#0077B5' },
    { class: 'fab fa-pinterest', color: '#E60023' },
    { class: 'fab fa-reddit', color: '#FF4500' },
    { class: 'fab fa-tiktok', color: '#69C9D0' },
    { class: 'fab fa-telegram', color: '#0088CC' },
    { class: 'fab fa-vk', color: '#4A76A8' }
  ];

  // Create 50 icons dynamically
  for (let i = 0; i < 50; i++) {
    const icon = document.createElement('div');
    icon.classList.add('icon');
    const iconInfo = icons[Math.floor(Math.random() * icons.length)];
    icon.innerHTML = `<i class="${iconInfo.class}"></i>`;
    icon.style.color = iconInfo.color;
    icon.style.left = `${Math.random() * 90}vw`; // Randomize position
    container.appendChild(icon);

    // Add hover effect
    icon.addEventListener('mouseover', () => moveIcon(icon));
  }

  // GSAP Timeline after icons are created
  setTimeout(() => {
    let tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 3,
    });

    tl.to(".icon", {
      y: -1000,                 // Move icons up
      duration: 1,              // Duration for the upward animation
      stagger: 0.1,             // Stagger the movement for a cascading effect
      ease: "power2.out",       // Smooth easing function
    });

    tl.to(".icon", {
      y: 0,                     // Return icons to original position
      duration: 1,              // Duration for the downward animation
      stagger: 0.1,             // Stagger the movement for a cascading effect
      ease: "power2.out",       // Smooth easing function
    });
  }, 100); // Delay to ensure icons are fully added before GSAP starts
}

// Move icon on hover
function moveIcon(icon) {
  const randomY = -Math.random() * 600 - 50; // Move up randomly
  const randomX = Math.random() * 90;        // Random new x position

  gsap.to(icon, {
    y: randomY,                              // Move up
    x: randomX + (Math.random() * 30 - 15),  // Slight random horizontal move
    duration: 1,
    onComplete: () => {
      gsap.to(icon, {
        y: 0,                                // Return to bottom
        duration: 2,
        x: `${Math.random() * 90}px`,        // New random position
        ease: "bounce.out"
      });
    }
  });
}

ballAnimation();
