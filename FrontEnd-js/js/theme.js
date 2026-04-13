const toggle = document.getElementById("dark-mode-toggle");

//  تطبيق الثيم عند تحميل الصفحة
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    if (toggle) toggle.checked = true;
  }
});

//  تغيير الثيم
if (toggle) {
  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });
}