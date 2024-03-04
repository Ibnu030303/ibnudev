const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
