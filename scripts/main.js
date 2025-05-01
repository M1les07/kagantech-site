document.addEventListener("DOMContentLoaded", function () {
  // Get the saved theme from localStorage
  const savedTheme = localStorage.getItem("theme");

  // Apply the saved theme if it exists
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    document.getElementById("theme-icon").textContent = "🌙";
  } else {
    document.body.classList.add("light");
    document.getElementById("theme-icon").textContent = "☀️";
  }

  // Toggle theme when clicked
  window.toggleTheme = function () {
    const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";

    if (currentTheme === "dark") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      document.getElementById("theme-icon").textContent = "☀️";
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      document.getElementById("theme-icon").textContent = "🌙";
      localStorage.setItem("theme", "dark");
    }
  };

  // Scroll to sections when clicking on buttons
  const sections = document.querySelectorAll(".about-section, .contact-section, .terms-section");

  function handleScroll() {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.75) {
        section.classList.add("in-view");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Run on page load to show elements already in view

  // Select buttons to scroll to corresponding sections
  const aboutButton = document.querySelector(".about-btn");
  const contactButton = document.querySelector(".contact-btn");
  const termsButton = document.querySelector(".terms-link");

  // Smooth scroll to About Section
  if (aboutButton) {
    aboutButton.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(".about-section").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }

  // Smooth scroll to Contact Section
  if (contactButton) {
    contactButton.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(".contact-section").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }

  // Smooth scroll to Terms and Conditions Section
  if (termsButton) {
    termsButton.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(".terms-section").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }
});
