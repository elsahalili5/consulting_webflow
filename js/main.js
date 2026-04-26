document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      toggle.classList.toggle('active');
    });
  }
});

// Dropdown për të gjitha pajisjet
document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(function(dropdown) {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    
    toggle.addEventListener('click', function(e) {
      // Për tablet dhe mobile (max 991px)
      if (window.innerWidth <= 991) {
        e.preventDefault();
        dropdown.classList.toggle('active');
      }
    });
  });
});
