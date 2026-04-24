document.querySelectorAll(".navbar").forEach(function (navbar) {
  var toggle = navbar.querySelector(".nav-toggle");
  if (!toggle) return;
  toggle.addEventListener("click", function () {
    var isOpen = navbar.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
});
