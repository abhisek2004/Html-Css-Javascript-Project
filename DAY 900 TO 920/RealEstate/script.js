// Hide loader and show content after a delay when the page is fully loaded
window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".container").style.display = "block";
  }, 2500);
});

const menuLgBtn = document.getElementById("menu-lg-btn");
const menuLgContent = document.getElementById("menu-lg-content");

const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const menuContent = document.getElementById("menu-content");
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const heroSection = document.getElementById("hero-section");
const rootElement = document.documentElement;

// Toggle visibility of the menu
menuLgBtn.addEventListener("click", () => {
  if (menuLgContent.classList.contains("hidden")) {
    menuLgContent.classList.remove("hidden");
  } else {
    menuLgContent.classList.add("hidden");
  }
});

// Close the menu when clicking outside
document.addEventListener("click", (event) => {
  if (
    !menuLgContent.contains(event.target) &&
    !menuLgBtn.contains(event.target)
  ) {
    menuLgContent.classList.add("hidden");
  }
});

// Open menu
menuBtn.addEventListener("click", () => {
  menuContent.classList.remove("translate-x-full");
});

// Close menu
closeBtn.addEventListener("click", () => {
  menuContent.classList.add("translate-x-full");
});

// Toggle Theme
themeToggle.addEventListener("click", () => {
  if (rootElement.classList.contains("dark")) {
    rootElement.classList.remove("dark");
    themeIcon.classList.replace("fa-sun", "fa-moon");
    heroSection.classList.remove("bg-img-dark");
    heroSection.classList.add("bg-img-light");
  } else {
    rootElement.classList.add("dark");
    themeIcon.classList.replace("fa-moon", "fa-sun");
    heroSection.classList.remove("bg-img-light");
    heroSection.classList.add("bg-img-dark");
  }
});

//for scrollbar
document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const carousel = document.getElementById("carousel");
  const cardWidth = document.querySelector(".p-2").offsetWidth; // Get the width of one card
  const scrollAmount = cardWidth + 250; // Card width + margin (adjust if needed)

  // Function to move carousel to the left
  function scrollCarouselLeft() {
    carousel.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  }

  // Function to move carousel to the right
  function scrollCarouselRight() {
    carousel.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  }

  // Attach event listeners to buttons
  prevBtn.addEventListener("click", scrollCarouselLeft);
  nextBtn.addEventListener("click", scrollCarouselRight);
});
