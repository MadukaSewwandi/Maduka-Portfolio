/* === Interactive Particle Network (Dense Digital Grid Edition) === */
const canvas = document.getElementById("network-bg");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const numParticles = 160; // denser network
const maxDistance = 120;
let mouse = { x: null, y: null, radius: 180 };

window.addEventListener("mousemove", (e) => (mouse = { x: e.x, y: e.y, radius: 180 }));
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 2 + 1;
    this.dx = (Math.random() - 0.5) * 0.8;
    this.dy = (Math.random() - 0.5) * 0.8;
  }

  draw() {
    ctx.fillStyle = "rgba(0,255,240,0.8)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.dy *= -1;
  }
}

function initParticles() {
  particles = [];
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
  }
}

function connectParticles() {
  for (let a = 0; a < particles.length; a++) {
    for (let b = a + 1; b < particles.length; b++) {
      const dx = particles[a].x - particles[b].x;
      const dy = particles[a].y - particles[b].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDistance) {
        const opacity = 1 - dist / maxDistance;
        ctx.strokeStyle = `rgba(0,255,240,${opacity * 0.5})`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(particles[a].x, particles[a].y);
        ctx.lineTo(particles[b].x, particles[b].y);
        ctx.stroke();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  connectParticles();
  requestAnimationFrame(animate);
}
initParticles();
animate();


// === Header Scroll Animation ===
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// === Parallax Floating Effect for Hero Image ===
const heroImg = document.querySelector(".hero-img img");
if (heroImg) {
  document.addEventListener("mousemove", (e) => {
    const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 20;
    heroImg.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
  });

  document.addEventListener("mouseleave", () => {
    heroImg.style.transform = "translate(0, 0)";
  });
}


// === MULTI-COLOR GLITTER PARTICLES AROUND HERO IMAGE ===
document.addEventListener("DOMContentLoaded", () => {
  const heroImgContainer = document.querySelector(".hero-img");
  if (!heroImgContainer) return;

  const glitter = document.createElement("div");
  glitter.classList.add("hero-glitter");
  heroImgContainer.appendChild(glitter);

  // Define glitter colors
  const colors = ["#ff6b6b", "#f8e473", "#4df3ff", "#7eff8b", "#ff6bf3", "#f97316", "#00eaff"];
  
  // Create glitter sparks
  for (let i = 0; i < 40; i++) {
    const spark = document.createElement("div");
    spark.classList.add("glitter-spark");
    spark.style.top = Math.random() * 100 + "%";
    spark.style.left = Math.random() * 100 + "%";
    spark.style.background = colors[Math.floor(Math.random() * colors.length)];
    spark.style.animationDelay = `${Math.random() * 3}s`;
    glitter.appendChild(spark);
  }
});

// === DOM Content ===
document.addEventListener("DOMContentLoaded", () => {

// === PROJECTS DATA ===
  const PROJECTS = [
    {
      title: "React To-Do List App",
      short: "Responsive to-do list app built with React + Vite.",
      desc: "Add, edit, and delete tasks with a clean UI. Deployed on Netlify.",
      tech: "React.js · Vite · JavaScript · Netlify",
      img: "images/to do.png",
      github: "https://github.com/MadukaSewwandi/To-Do-App.git",
      live: "https://maduka-todo-app.netlify.app/",
    },
    {
      title: "Inventory Management System",
      short: "Full-stack app for managing faculty inventory and analytics.",
      desc: "Developed for the University of Colombo to digitize inventory processes. Features item tracking, repair notifications, and role-based access.",
      tech: "React.js · Node.js · MongoDB · JavaScript · Agile",
      img: "images/IMS.png",
      github: "https://github.com/MalithDN/Inventory-Management-System-For-University-Faculty.git",
    },
    {
      title: "Library Management System",
      short: "Web app to manage users, books, and categories securely.",
      desc: "Built using PHP and MySQL with secure login, CRUD, and responsive UI.",
      tech: "PHP · MySQL · HTML · CSS · GitHub",
      img: "images/Library ms.png",
      github: "https://github.com/ManugaK/Web-App-Project.git",
    },
    {
      title: "FOT CONNECT – Mobile News App",
      short: "Android app connecting students and staff via Firebase news feeds.",
      desc: "Built using Android Studio (Java) with Firebase Authentication and Realtime Database.",
      tech: "Android (Java) · Firebase · XML · Material Design",
      img: "images/fot connect.png",
      github: "https://github.com/MadukaSewwandi/FOT-Connect-News-app.git",
    },
    {
      title: "Bug Tracker App",
      short: "Web-based QA platform for reporting and managing software bugs.",
      desc: "Implements QA workflow with bug tracking and Postman API validation.",
      tech: "React.js · Node.js · Express · MongoDB · Postman",
      img: "images/bug tracker.png",
      github: "https://github.com/MadukaSewwandi/Bug-Tracker-App.git",
    },
    
    {
      title: "My Personal Portfolio Website",
      short: "A modern and interactive portfolio showcasing my projects and skills.",
      desc: "Designed and developed my personal portfolio using HTML, CSS, JavaScript. It features responsive design, smooth animations, gradient effects, and an interactive particle background for a professional appearance.",
      tech: "HTML · CSS · JavaScript",
      img: "images/portfolio.png",
      github: "https://github.com/MadukaSewwandi/Maduka-Portfolio.git",
      live: "https://madukasewwandi.github.io/Maduka-Portfolio/", 
    },
  ];

  // === Render Project Cards ===
  const track = document.getElementById("projectsTrack");
  PROJECTS.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "project-card fade-up";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <div class="project-content">
        <h3>${p.title}</h3>
        <p>${p.short}</p>
        <div class="tech">${p.tech}</div>
        <div class="project-buttons">
          <a href="${p.github}" target="_blank" class="btn">GitHub</a>
          <button class="btn btn-outline view-details" data-index="${i}">View Details</button>
        </div>
      </div>`;
    track.appendChild(card);
  });

  // === FIXED PROJECT CAROUSEL (Proper Direction + Smooth Move) ===
  const nextBtn = document.querySelector(".carousel-btn.next");
  const prevBtn = document.querySelector(".carousel-btn.prev");

  let index = 0;
  const visibleCards = 3;
  const total = PROJECTS.length;

  function updateCarousel() {
    const cardWidth = track.querySelector(".project-card").offsetWidth + 24;
    track.style.transition = "transform 0.6s ease-in-out";
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    if (index < total - visibleCards) {
      index++;
    } else {
      index = 0;
    }
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
    } else {
      index = total - visibleCards;
    }
    updateCarousel();
  });

  // === Touch Swipe Support for Mobile ===
  let startX = 0;
  track.addEventListener("touchstart", (e) => (startX = e.touches[0].clientX));
  track.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextBtn.click(); // swipe left → next
    if (endX - startX > 50) prevBtn.click(); // swipe right → prev
  });

  // === View Details Popup ===
  const popup = document.createElement("div");
  popup.className = "mini-popup hidden";
  popup.innerHTML = `
    <div class="popup-card">
      <span class="popup-close">&times;</span>
      <h3 id="popupTitle"></h3>
      <p id="popupDesc"></p>
      <p id="popupTech" class="tech"></p>
      <div class="popup-links">
        <a id="popupGit" href="#" target="_blank" class="btn">GitHub</a>
        <a id="popupLive" href="#" target="_blank" class="btn btn-outline">Live Demo</a>
      </div>
    </div>`;
  document.body.appendChild(popup);

  const popupTitle = popup.querySelector("#popupTitle");
  const popupDesc = popup.querySelector("#popupDesc");
  const popupTech = popup.querySelector("#popupTech");
  const popupGit = popup.querySelector("#popupGit");
  const popupLive = popup.querySelector("#popupLive");
  const closePopup = popup.querySelector(".popup-close");

  track.addEventListener("click", (e) => {
    const btn = e.target.closest(".view-details");
    if (!btn) return;
    const p = PROJECTS[btn.dataset.index];
    popupTitle.textContent = p.title;
    popupDesc.textContent = p.desc;
    popupTech.textContent = "Technologies: " + p.tech;
    popupGit.href = p.github;
    if (p.live) {
      popupLive.style.display = "inline-block";
      popupLive.href = p.live;
    } else {
      popupLive.style.display = "none";
    }
    popup.classList.remove("hidden");
    popup.classList.add("active");
  });

  closePopup.addEventListener("click", () => {
    popup.classList.remove("active");
    setTimeout(() => popup.classList.add("hidden"), 300);
  });
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("active");
      setTimeout(() => popup.classList.add("hidden"), 300);
    }
  });

  // === Skills Animation ===
  document.querySelectorAll(".bar span").forEach((span) => {
    const val = span.getAttribute("data-skill");
    setTimeout(() => (span.style.width = val + "%"), 400);
  });

  // === Scroll Reveal Animation for Tools Section ===
  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal("#tools .tool-card", {
      distance: "40px",
      duration: 900,
      origin: "bottom",
      interval: 120,
      easing: "ease-out",
    });
  }
});

// === Scroll to Top Button ===
const scrollBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 400 ? "block" : "none";
});
scrollBtn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

// === Education Scroll Animations ===
ScrollReveal().reveal(".timeline-item", {
  distance: "60px",
  duration: 1000,
  easing: "ease-in-out",
  interval: 150,
});

// Subtle hover effect for education cards
document.querySelectorAll(".timeline-content").forEach((card) => {
  card.addEventListener("mouseenter", () => card.classList.add("hovering"));
  card.addEventListener("mouseleave", () => card.classList.remove("hovering"));
});


// === CONTACT SECTION FUNCTIONALITY ===
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  // Simulate message sent effect (visual only)
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector("button");
  btn.textContent = "Message Sent ✅";
  btn.style.background = "var(--accent)";
  btn.style.color = "#fff";
  btn.style.cursor = "default";
  setTimeout(() => {
    btn.textContent = "Send Message";
    btn.style.background = "rgba(249, 115, 22, 0.2)";
    btn.style.color = "var(--text)";
    btn.style.cursor = "pointer";
  }, 2500);
});

  // Ensure CV download works
  const cvButton = document.querySelector('.contact-buttons a');
  if (cvButton) {
    cvButton.addEventListener("click", () => {
      console.log("CV Download triggered ✅");
    });
  }
});

// === Animate skill bars based on data-skill ===
document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".bar span");
  bars.forEach((bar) => {
    const skillValue = bar.getAttribute("data-skill");
    // Set width dynamically with a smooth animation
    setTimeout(() => {
      bar.style.width = skillValue + "%";
    }, 500);
  });
});

/*
// === FOOTER CODE RAIN EFFECT (Safe Version) ===
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("footerCanvas");
  if (!canvas) return; // exit if not found (safety check)

  const ctx = canvas.getContext("2d");

  // Resize the canvas dynamically
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = 200; // Footer animation height
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const chars = "01 QA TEST CODE BUG FIX ";
  const drops = Array(Math.floor(canvas.width / 10)).fill(1);

  function drawRain() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00fff0"; // neon cyan for your theme
    ctx.font = "14px monospace";

    drops.forEach((y, i) => {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * 10, y * 10);

      if (y * 10 > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    });
  }

  setInterval(drawRain, 50);
});
*/

// === HEADER CODE RAIN EFFECT ===
document.addEventListener("DOMContentLoaded", () => {
  const headerCanvas = document.getElementById("headerCanvas");
  if (!headerCanvas) return;

  const ctx = headerCanvas.getContext("2d");

  function resizeHeaderCanvas() {
    headerCanvas.width = window.innerWidth;
    headerCanvas.height = 120; // fits header height
  }
  resizeHeaderCanvas();
  window.addEventListener("resize", resizeHeaderCanvas);

  const chars = "01 QA CODE TEST • ";
  const drops = Array(Math.floor(headerCanvas.width / 10)).fill(1);

  function drawHeaderRain() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, headerCanvas.width, headerCanvas.height);

    ctx.fillStyle = "#00fff0"; // bright cyan to match theme
    ctx.font = "13px monospace";

    drops.forEach((y, i) => {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * 10, y * 10);

      if (y * 10 > headerCanvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    });
  }

  setInterval(drawHeaderRain, 50);
});
