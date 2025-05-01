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

  // Scroll to sections when clicking on buttons
  const sections = document.querySelectorAll(".about-section, .watch-section, .contact-section");
  
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
  const termsButton = document.querySelector(".terms-btn");

  // Smooth scroll to About Section
  aboutButton.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".about-section").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  // Smooth scroll to Contact Section
  contactButton.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".contact-section").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  // Smooth scroll to Terms and Conditions Section (adjust if necessary)
  termsButton.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".terms-section").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});
