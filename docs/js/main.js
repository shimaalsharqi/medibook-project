// ==========================
// NAVBAR SCROLL EFFECT
// ==========================
window.addEventListener("scroll", () => {
  document.querySelector("nav")
    .classList.toggle("scrolled", window.scrollY > 50);
});


// ==========================
// TYPING EFFECT (HERO)
// ==========================
const words = ["Our Priority", "Our Mission", "Our Care"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
  currentWord = words[i];

  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.getElementById("typing").textContent =
    currentWord.substring(0, j);

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && j === currentWord.length) {
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();


// ==========================
// FETCH DATA (SERVICES + DOCTORS)
// ==========================
fetch('./data.json')
  .then(res => res.json())
  .then(data => {

    renderServices(data.services);
    renderDoctors(data.doctors);

  })
  .catch(err => console.log("Error:", err));


// ==========================
// SERVICES SECTION (FROM JSON)
// ==========================
function renderServices(services) {

  const rowTop = document.getElementById("rowTop");
  const rowBottom = document.getElementById("rowBottom");

  function createCard(service) {
    return `
      <div class="service-card">
        <div class="icon-circle">${service.icon}</div>
        <h5>${service.name}</h5>
        <p>${service.description}</p>
      </div>
    `;
  }

  function render(row, list) {
    row.innerHTML = "";

    list.forEach(s => row.innerHTML += createCard(s));
    list.forEach(s => row.innerHTML += createCard(s)); // للأنيميشن
  }

  const topServices = services.slice(0, 3);
  const bottomServices = services.slice(3, 6);

  render(rowTop, topServices);
  render(rowBottom, bottomServices);
}


// ==========================
// FEATURED DOCTORS (HOME)
// ==========================
function renderDoctors(doctors) {

  const container = document.getElementById("doctorsRow");
  container.innerHTML = "";

  doctors.forEach(doc => {

    //  stars
    let stars = "⭐".repeat(Math.round(doc.rating));

    // 👤 initials
    let initials = doc.name
      .split(" ")
      .map(n => n[0])
      .join("");

    let card = `
      <div class="col-md-3 mb-4">
        <div class="doctor-card-custom text-center p-3 shadow-sm">

          <div class="doctor-avatar mb-2">
            ${initials}
          </div>

          <h5 class="fw-bold">${doc.name}</h5>

          <p class="text-primary mb-1">
            ${doc.specialty}
          </p>

          <div class="stars mb-1">
            ${stars}
          </div>

          <small class="text-muted">
            ${doc.experience} Years Experience
          </small>

        </div>
      </div>
    `;

    container.innerHTML += card;

  });
}


// ==========================
// COUNTERS (STATS SECTION)
// ==========================
document.addEventListener("DOMContentLoaded", () => {

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

    const section = document.getElementById("statsSection");

    if (window.scrollY >= section.offsetTop - 300 && !started) {
      startCounting();
      started = true;
    }

  });

});