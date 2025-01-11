// Top Destination Code (Unchanged)
// Step 1: Get DOM elements
let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");

let carouselDom = document.querySelector(".top-destination-carousel");
let SliderDom = carouselDom.querySelector(".top-destination-carousel .list");
let thumbnailBorderDom = document.querySelector(
  ".top-destination-carousel .thumbnail-slider"
);
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");

let timeRunning = 500; // Animation duration
let timeAutoNext = 15000; // Auto-next duration

// Initialize the carousel
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

// Auto-next timer
let runNextAuto = setTimeout(() => {
  showSlider("next");
}, timeAutoNext);

// Event listeners for next and previous buttons
nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};

// Function to handle showing the next or previous slider item
function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll(
    ".top-destination-carousel .list .item"
  );
  let thumbnailItemsDom = document.querySelectorAll(
    ".top-destination-carousel .thumbnail-slider .item"
  );

  // Apply the animation class
  if (type === "next") {
    carouselDom.classList.add("next");
    setTimeout(() => {
      SliderDom.appendChild(SliderItemsDom[0]);
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    }, 0); // Non-blocking
  } else {
    carouselDom.classList.add("prev");
    setTimeout(() => {
      SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
      thumbnailBorderDom.prepend(
        thumbnailItemsDom[thumbnailItemsDom.length - 1]
      );
    }, 0); // Non-blocking
  }

  // Remove the animation class after the animation duration
  setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  // Reset the auto-next timer
  resetAutoNext();
}

// Function to reset the auto-next timer
function resetAutoNext() {
  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    showSlider("next");
  }, timeAutoNext);
}

// Hero Section Carousel Code
function showHeroSlider(type) {
  const heroCarousel = document.querySelector(".hero-carousel");
  const heroSlider = heroCarousel.querySelector(".hero-carousel .list");
  const heroThumbnailBorder = heroCarousel.querySelector(
    ".hero-carousel .thumbnail-slider"
  );
  const heroSliderItems = heroSlider.querySelectorAll(
    ".hero-carousel .list .item"
  );
  const heroThumbnailItems = heroThumbnailBorder.querySelectorAll(".item");

  if (type === "next") {
    heroCarousel.classList.add("next");
    setTimeout(() => {
      heroSlider.appendChild(heroSliderItems[0]);
      heroThumbnailBorder.appendChild(heroThumbnailItems[0]);
    }, 0);
  } else {
    heroCarousel.classList.add("prev");
    setTimeout(() => {
      heroSlider.prepend(heroSliderItems[heroSliderItems.length - 1]);
      heroThumbnailBorder.prepend(
        heroThumbnailItems[heroThumbnailItems.length - 1]
      );
    }, 0);
  }

  setTimeout(() => {
    heroCarousel.classList.remove("next");
    heroCarousel.classList.remove("prev");
  }, timeRunning);

  resetHeroAutoNext();
}

function resetHeroAutoNext() {
  clearTimeout(heroRunNextAuto);
  heroRunNextAuto = setTimeout(() => {
    showHeroSlider("next");
  }, timeAutoNext);
}

// Initialize Hero Carousel (Get hero elements)
const heroNextDom = document.getElementById("hero-next"); // Replace "hero-next" with actual ID
const heroPrevDom = document.getElementById("hero-prev"); // Replace "hero-prev" with actual ID
const heroThumbnailBorderDom = document.querySelector(
  ".hero-carousel .thumbnail-slider"
);
const heroThumbnailItemsDom = heroThumbnailBorderDom.querySelectorAll(".item");

// Initialize the hero carousel
heroThumbnailBorderDom.appendChild(heroThumbnailItemsDom[0]);
let heroRunNextAuto = setTimeout(() => {
  showHeroSlider("next");
}, timeAutoNext);

// Event Listeners for Hero Carousel
heroNextDom.addEventListener("click", () => showHeroSlider("next"));
heroPrevDom.addEventListener("click", () => showHeroSlider("prev"));

// Highlight carousel code
// Select the carousel track element
const track = document.querySelector(".highlight-carousel-track");

// Get all the slides within the track as an array
const slides = Array.from(track.children);

// Select the next and previous buttons
const nextButton = document.querySelector(".carousel-button.next");
const prevButton = document.querySelector(".carousel-button.prev");

// Select the dots navigation container
const dotsNav = document.querySelector(".highlight-carousel-pagination");

// Get all the dots as an array
const dots = Array.from(dotsNav.children);

// Initialize the index of the current slide
let currentIndex = 0;

/**
 * Function to update the carousel
 * Moves the carousel to the specified index and updates the active dot
 * @param {number} index - The index of the slide to display
 */

function updateCarousel(index) {
  // Move the track to display the slide at the specified index
  track.style.transform = `translateX(-${index * 100}%)`;

  // Update the active state of the dots
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// Event listener for the "Next" button
nextButton.addEventListener("click", () => {
  // Move to the next slide, wrapping back to the first slide if at the end
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel(currentIndex);
});

// Event listener for the "Previous" button
prevButton.addEventListener("click", () => {
  // Move to the previous slide, wrapping to the last slide if at the beginning
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel(currentIndex);
});

// Add event listeners to each dot for navigation
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    // Update the current index to the dot's index and update the carousel
    currentIndex = index;
    updateCarousel(index);
  });
});

// Automatically slide to the next slide every 5 seconds
setInterval(() => {
  // Increment the current index, wrapping back to the first slide if at the end
  currentIndex = (currentIndex + 1) % slides.length;

  // Update the carousel to show the new slide
  updateCarousel(currentIndex);
}, 15000); // 5000ms = 5 seconds


// Swiper JS Code
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 2,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
    480: {
      slidesPerView: 3,
    },
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true, // Loop is enabled, so Swiper reuses slides
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 1,
    },
  },
  on: {
    slideChange: function () {
      const swiperContainer = document.querySelector(".mySwiper2");
      const isFirstSlide = this.isBeginning;
      const isLastSlide = this.isEnd;

      // Add or remove classes for edge states
      swiperContainer.classList.toggle("is-first-slide", isFirstSlide);
      swiperContainer.classList.toggle("is-last-slide", isLastSlide);
    },
  },
});

// Hover logic for revealing buttons
const swiperContainer = document.querySelector(".mySwiper2");

// Reveal buttons on hover when on edge
swiperContainer.addEventListener("mouseover", (e) => {
  const isFirstSlide = swiperContainer.classList.contains("is-first-slide");
  const isLastSlide = swiperContainer.classList.contains("is-last-slide");

  if (isFirstSlide || isLastSlide) {
    document.querySelector(".swiper-button-prev").style.opacity = "1";
    document.querySelector(".swiper-button-next").style.opacity = "1";
    document.querySelector(".swiper-button-prev").style.pointerEvents = "all";
    document.querySelector(".swiper-button-next").style.pointerEvents = "all";
  }
});

// Hide buttons when mouse leaves the container
swiperContainer.addEventListener("mouseleave", () => {
  document.querySelector(".swiper-button-prev").style.opacity = "0";
  document.querySelector(".swiper-button-next").style.opacity = "0";
  document.querySelector(".swiper-button-prev").style.pointerEvents = "none";
  document.querySelector(".swiper-button-next").style.pointerEvents = "none";
});


var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  breakpoints: {
    1024: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    },
  },
});

  document.addEventListener('DOMContentLoaded', function () {
    const readMoreLink = document.querySelector('.read-more-link');
    const description = document.querySelector('.tour-description');

    readMoreLink.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent page scroll/jump
      const isExpanded = description.classList.toggle('expanded');
      
      if (isExpanded) {
        description.style.maxHeight = 'none'; // Expand the full text
        readMoreLink.textContent = 'Read Less';
      } else {
        description.style.maxHeight = '3em'; // Collapse back to 2 lines
        readMoreLink.textContent = 'Read More';
      }
    });
  });