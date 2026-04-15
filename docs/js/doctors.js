let doctors = [];

// Fetch Data
fetch("data.json")
  .then(res => res.json())
  .then(data => {
    doctors = data.doctors;
    applyFilters();
  });

// Render Doctors
function renderDoctors(list) {
  const container = document.getElementById("doctorsContainer");
  container.innerHTML = "";

  document.getElementById("countText").innerText =
    `${list.length} doctors found`;

  list.forEach(doc => {

    //  Stars
    let stars = "";
    for (let i = 0; i < Math.round(doc.rating); i++) {
      stars += "⭐";
    }

    // 👤 Initials
    const initials = doc.name
      .split(" ")
      .map(n => n[0])
      .join("");

    const card = `
      <div class="col-md-6 mb-4">
        <div class="doctor-card p-4 text-center">

          <div class="doctor-avatar">${initials}</div>

          <h5 class="mt-3">${doc.name}</h5>
          <span class="badge bg-primary">${doc.specialty}</span>

          <p class="mt-2">${stars}</p>

          <p>${doc.experience} Years Experience</p>

          ${
            doc.available
              ? `<button class="btn btn-primary" onclick="bookDoctor(${doc.id})">
                  Book Appointment
                 </button>`
              : `<span class="text-danger">Fully Booked</span>`
          }

        </div>
      </div>
    `;

    container.innerHTML += card;
  });
}


// Events
document.getElementById("searchInput").addEventListener("keyup", applyFilters);
document.getElementById("specialtyFilter").addEventListener("change", applyFilters);
document.getElementById("sortFilter").addEventListener("change", applyFilters);

// Apply All Filters
function applyFilters() {
  let search = document.getElementById("searchInput").value.toLowerCase();
  let specialty = document.getElementById("specialtyFilter").value;
  let sort = document.getElementById("sortFilter").value;

  let result = doctors;

  //  Search
  if (search) {
    result = result.filter(d =>
      d.name.toLowerCase().includes(search) ||
      d.specialty.toLowerCase().includes(search)
    );
  }

  //  Filter
  if (specialty !== "All") {
    result = result.filter(d => d.specialty === specialty);
  }

  //  Sort
  if (sort === "rating") {
    result.sort((a, b) => b.rating - a.rating);
  }

  if (sort === "experience") {
    result.sort((a, b) => b.experience - a.experience);
  }

  renderDoctors(result);
}



function bookDoctor(id) {

  const selected = doctors.find(d => d.id === id);

  
  localStorage.setItem("selectedDoctor", JSON.stringify(selected));

  //  Toast
  const toastElement = document.getElementById("toastMsg");
  const toast = new bootstrap.Toast(toastElement);

  toast.show();

  
  setTimeout(() => {
    window.location.href = "Booking.html";
  }, 2000);

}
document.querySelector(".toast-body").textContent =
  `Dr. ${selected.name} selected successfully!`;