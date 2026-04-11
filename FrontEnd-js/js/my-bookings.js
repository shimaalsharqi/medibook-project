const container = document.getElementById("bookingsContainer");

// 📦 جلب البيانات من localStorage
let bookings = JSON.parse(localStorage.getItem("appointments")) || [];

// ❌ إذا ما في حجوزات
if (bookings.length === 0) {
  container.innerHTML = `
    <p class="text-center text-muted">No bookings yet</p>
  `;
}

// ✅ عرض الحجوزات
bookings.forEach(app => {

  let card = `
    <div class="col-md-6 mb-4">
      <div class="card p-4 shadow-sm">

        <h5 class="text-primary mb-2">
          Dr. ${app.doctor}
        </h5>

        <p><strong>Patient:</strong> ${app.name}</p>
        <p><strong>Email:</strong> ${app.email}</p>

        <hr>

        <p><strong>Date:</strong> ${app.date}</p>
        <p><strong>Time:</strong> ${app.time}</p>

        <p><strong>Reference #:</strong> ${app.ref}</p>

      </div>
    </div>
  `;

  container.innerHTML += card;

});


// 🗑 حذف كل الحجوزات
function clearBookings() {
  localStorage.removeItem("appointments");
  location.reload();
}