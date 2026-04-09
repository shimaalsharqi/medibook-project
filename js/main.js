window.addEventListener("scroll", () => {
  document.querySelector("nav").classList.toggle("scrolled", window.scrollY > 50);
});



const words = ["Our Priority", "Our Mission", "Our Care"];
let i = 0; // الكلمة الحالية
let j = 0; // الحروف
let currentWord = "";
let isDeleting = false;

function typeEffect() {
  currentWord = words[i];
  
  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.getElementById("typing").textContent = currentWord.substring(0, j);

  // سرعة الكتابة
  let speed = isDeleting ? 50 : 100;

  // إذا خلص الكلمة
  if (!isDeleting && j === currentWord.length) {
    speed = 1500; // يوقف شوي
    isDeleting = true;
  }

  // إذا حذف الكلمة
  else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length; // ينتقل للكلمة اللي بعدها
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();


fetch('./data.json')
  .then(response => response.json())
  .then(data => {

    let services = data.services;
    let container = document.getElementById("servicesRow");

    container.innerHTML = ""; // تنظيف

    services.forEach(service => {

      let card = `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div class="card text-center p-4 shadow-sm h-100">

            <div style="font-size:40px;">
              ${service.icon}
            </div>

            <h5 class="mt-3 fw-bold">
              ${service.name}
            </h5>

            <p class="text-muted">
              ${service.description}
            </p>

          </div>
        </div>
      `;

      container.innerHTML += card;

    });

  })
  .catch(error => {
    console.log("Error:", error);
  });
  fetch('./data.json')
  .then(res => res.json())
  .then(data => {

    let doctors = data.doctors;
    let container = document.getElementById("doctorsRow");

    container.innerHTML = "";

    doctors.forEach(doc => {

      let stars = "";
      for (let i = 0; i < Math.floor(doc.rating); i++) {
        stars += "⭐";
      }

    let initials = doc.name.split(" ").map(n => n[0]).join("");

let card = `
  <div class="col-md-3 mb-4">
    <div class="doctor-card-custom text-center">

      <div class="doctor-image">
        <div class="doctor-avatar">
          ${initials}
        </div>
      </div>

      <div class="doctor-info">
        <p class="status">
          <span class="dot"></span> Available
        </p>

        <h5 class="fw-bold">${doc.name}</h5>

        <p class="text-muted mb-1">
          ${doc.specialty}
        </p>

        <div class="stars mb-1">
          ${stars}
        </div>

        <small class="text-muted">
          ${doc.experience} years experience
        </small>
      </div>

    </div>
  </div>
`;
      container.innerHTML += card;

    });

  });

const services = [
  { name: "General Medicine", icon: "fa-solid fa-stethoscope", description: "Comprehensive check-ups and treatment for common illnesses." },
  { name: "Cardiology", icon: "fa-solid fa-heart", description: "Expert heart care including ECG, stress tests, and consultations." },
  { name: "Dermatology", icon: "fa-solid fa-sun", description: "Skin, hair, and nail diagnosis and treatment." },
  { name: "Pediatrics", icon: "fa-solid fa-baby", description: "Specialized healthcare for infants, children, and teenagers." },
  { name: "Orthopedics", icon: "fa-solid fa-bone", description: "Bone, joint, and muscle disorders diagnosis and treatment." },
  { name: "Dentistry", icon: "fa-solid fa-tooth", description: "Full dental care including cleaning, fillings, and orthodontics." },
];

const container = document.getElementById("servicesTrack");

function renderServices() {
  container.innerHTML = "";
  services.forEach(s => {
    let card = document.createElement("div");
    card.className = "service-card";
    card.innerHTML = `
      <div class="icon-circle"><i class="${s.icon}"></i></div>
      <h5>${s.name}</h5>
      <p>${s.description}</p>
    `;
    container.appendChild(card);
  });

  // Duplicate for smooth infinite scroll
  services.forEach(s => {
    let card = document.createElement("div");
    card.className = "service-card";
    card.innerHTML = `
      <div class="icon-circle"><i class="${s.icon}"></i></div>
      <h5>${s.name}</h5>
      <p>${s.description}</p>
    `;
    container.appendChild(card);
  });
}

renderServices();
  const counters = document.querySelectorAll(".counter");
let started = false;

function startCounting() {
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const update = () => {
      let increment = target / 100;

      if (count < target) {
        count += increment;
        counter.textContent = Math.floor(count);
        setTimeout(update, 20);
      } else {
        counter.textContent = target + "+";
      }
    };

    update();
  });
}

window.addEventListener("scroll", () => {
  const section = document.querySelector(".bg-light");

  if (window.scrollY >= section.offsetTop - 300 && !started) {
    startCounting();
    started = true;
  }
});
let increment = target / 200;