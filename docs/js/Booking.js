// ==========================
// SELECTORS
// ==========================
const daysContainer = document.getElementById("daysContainer");
const timeSlots = document.getElementById("timeSlots");

const form = document.getElementById("appointmentForm");

let selectedDate = "";
let selectedTime = "";

// ==========================
// LOAD DOCTOR FROM LOCALSTORAGE
// ==========================
const doctor = JSON.parse(localStorage.getItem("selectedDoctor"));

if (doctor) {
  document.getElementById("docName").textContent = doctor.name;
  document.getElementById("docSpecialty").textContent = doctor.specialty;
  document.getElementById("docDays").textContent = doctor.availableDays.join(", ");
  document.getElementById("docFee").textContent = "$" + doctor.fee;
}

// ==========================
// GENERATE DAYS (WITH NAME)
// ==========================
const dayNames = ["S","M","T","W","T","F","S"];

for (let i = 0; i < 7; i++) {
  let d = new Date();
  d.setDate(d.getDate() + i);

  let dayIndex = d.getDay();

  let div = document.createElement("div");
  div.classList.add("day-box");

  div.innerHTML = `
    <span class="day-name">${dayNames[dayIndex]}</span>
    <span class="day-number">${d.getDate()}</span>
  `;

  div.onclick = () => {
    document.querySelectorAll(".day-box").forEach(el => el.classList.remove("active"));
    div.classList.add("active");

    selectedDate = d.toISOString().split("T")[0];
    generateTimes();
  };

  // أول يوم يكون محدد
  if (i === 0) {
    div.classList.add("active");
    selectedDate = d.toISOString().split("T")[0];
    generateTimes();
  }

  daysContainer.appendChild(div);
}

// ==========================
// GENERATE TIMES + EMOJI
// ==========================
function generateTimes() {
  timeSlots.innerHTML = "";

  const times = ["09:00","10:00","11:00","14:00","15:00","16:00"];

  times.forEach(t => {

    let hour = parseInt(t.split(":")[0]);
    let emoji = "";

    if (hour < 12) emoji = "🌤️";
    else if (hour < 16) emoji = "🌞";
    else emoji = "🌙";

    let btn = document.createElement("button");
    btn.innerHTML = `${emoji} ${t}`;

    btn.onclick = () => {
      document.querySelectorAll(".time-slots button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      selectedTime = t;
    };

    timeSlots.appendChild(btn);
  });
}

// ==========================
// VALIDATION + SUBMIT
// ==========================
form.addEventListener("submit", function(e){
  e.preventDefault();

  let valid = true;

  // inputs
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let age = document.getElementById("age").value;
  let gender = document.querySelector("input[name='gender']:checked");
  let concern = document.getElementById("concern").value;
  let insurance = document.getElementById("insurance").value;

  // reset errors
  document.querySelectorAll("small").forEach(el => el.textContent = "");

  // NAME
  if (!name) {
    nameError.textContent = "Name is required";
    valid = false;
  }

  // EMAIL
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Invalid email";
    valid = false;
  }

  // PHONE
  if (!phone) {
    phoneError.textContent = "Phone required";
    valid = false;
  }

  // AGE
  if (!age) {
    ageError.textContent = "Age required";
    valid = false;
  } else if (age < 1 || age > 120) {
    ageError.textContent = "Age must be between 1 and 120";
    valid = false;
  }

  // GENDER
  if (!gender) {
    genderError.textContent = "Select gender";
    valid = false;
  }

  // CONCERN
  if (!concern) {
    concernError.textContent = "Required";
    valid = false;
  }

  // DATE + TIME
  if (!selectedDate) {
    alert("Please select a date");
    valid = false;
  }

  if (!selectedTime) {
    alert("Please select a time");
    valid = false;
  }

  // INSURANCE
  if (!insurance) {
    insuranceError.textContent = "Select insurance";
    valid = false;
  }

  if (!valid) return;

  // ==========================
  // CREATE APPOINTMENT
  // ==========================
  let referenceNumber = Math.floor(10000000 + Math.random() * 90000000);

  let appointment = {
    name,
    email,
    phone,
    age,
    gender: gender.value,
    concern,
    insurance,
    doctor: doctor.name,
    specialty: doctor.specialty,
    date: selectedDate,
    time: selectedTime,
    ref: referenceNumber
  };

  // ==========================
  // SAVE TO LOCALSTORAGE
  // ==========================
  let list = JSON.parse(localStorage.getItem("appointments")) || [];
  list.push(appointment);
  localStorage.setItem("appointments", JSON.stringify(list));

  // ==========================
  // SHOW CONFIRMATION
  // ==========================
  document.getElementById("confirmationCard").classList.remove("d-none");

  document.getElementById("refNumber").textContent = referenceNumber;
  document.getElementById("confDoctor").textContent = appointment.doctor;
  document.getElementById("confDate").textContent = appointment.date;
  document.getElementById("confTime").textContent = appointment.time;
  document.getElementById("confPatient").textContent = appointment.name;
  document.getElementById("confEmail").textContent = appointment.email;
  document.getElementById("confAge").textContent = appointment.age;
  document.getElementById("confGender").textContent = appointment.gender;

  // hide form (UX 🔥)
  form.classList.add("d-none");
});

// ==========================
// NAVIGATION BUTTON
// ==========================
function goToAppointments() {
  window.location.href = "my-bookings.html";
}