const imageContainer = document.querySelector(".image-container");
const images = document.querySelectorAll(".image-container img");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;
let autoSlide;

// Update Slider
function updateSlider() {
  imageContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Update dots
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

// Next Slide
function nextSlide() {
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  updateSlider();
}

// Previous Slide
function previousSlide() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  updateSlider();
}

// Start Auto Slide
function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 3000);
}

// Stop Auto Slide
function stopAutoSlide() {
  clearInterval(autoSlide);
}

// Buttons
nextBtn.addEventListener("click", () => {
  stopAutoSlide();
  nextSlide();
  startAutoSlide();
});

prevBtn.addEventListener("click", () => {
  stopAutoSlide();
  previousSlide();
  startAutoSlide();
});

// Dot Navigation
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    stopAutoSlide();

    currentIndex = index;
    updateSlider();

    startAutoSlide();
  });
});

// Pause when mouse enters
imageContainer.addEventListener("mouseenter", stopAutoSlide);

// Resume when mouse leaves
imageContainer.addEventListener("mouseleave", startAutoSlide);

// Keyboard Navigation
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
  }

  if (event.key === "ArrowLeft") {
    stopAutoSlide();
    previousSlide();
    startAutoSlide();
  }
});

// Touch Swipe
let touchStartX = 0;
let touchEndX = 0;

imageContainer.addEventListener("touchstart", (event) => {
  touchStartX = event.touches[0].clientX;
});

imageContainer.addEventListener("touchend", (event) => {
  touchEndX = event.changedTouches[0].clientX;

  const swipeDistance = touchStartX - touchEndX;

  if (swipeDistance > 50) {
    nextSlide();
  } else if (swipeDistance < -50) {
    previousSlide();
  }
});

// Initial setup
updateSlider();
startAutoSlide();
