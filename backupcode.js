document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".carousel-item");
  const carouselInner = document.querySelector(".carousel-inner");
  let currentIndex = 0;
  let carouselInterval;

  // Function to show the next item
  function showNextItem() {
    // Remove 'active' class from the current item
    items[currentIndex].classList.remove("active");

    // Update the current index to the next item
    currentIndex = (currentIndex + 1) % items.length; // Keeps going to next item, but no loop back to first

    // Check if we are at the first item and disable animation if so
    if (currentIndex === 0) {
      carouselInner.style.transition = "none"; // Disable animation when going back to the first slide
    } else {
      carouselInner.style.transition = "transform 0.5s ease-in-out"; // Re-enable smooth transition for all other slides
    }

    // Add 'active' class to the new current item
    items[currentIndex].classList.add("active");

    // Move the carousel
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Restart the interval
    resetInterval();
  }

  // Function to show the previous item
  function showPrevItem() {
    // Remove 'active' class from the current item
    items[currentIndex].classList.remove("active");

    // Update the current index to the previous item
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Loops back to last item after first

    // Add 'active' class to the new current item
    items[currentIndex].classList.add("active");

    // Move the carousel
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Restart the interval
    resetInterval();
  }

  // Function to restart the auto slide interval
  function resetInterval() {
    clearInterval(carouselInterval);
    carouselInterval = setInterval(showNextItem, 5000); // 5 seconds
  }

  // Initial interval for auto sliding
  resetInterval();

  // Add event listeners for manual navigation
  const prevButton = document.querySelector(".carousel-control-prev");
  const nextButton = document.querySelector(".carousel-control-next");

  prevButton.addEventListener("click", showPrevItem);
  nextButton.addEventListener("click", showNextItem);
});

// Example list of image URLs and descriptions
const locations = [
  {
    location: "Bwindi",
    imageUrl: "images/Bwindi.jpg",
    description:
      "Experience the wonders of Uganda’s wildlife and the diversity of Bwindi’s ecosystem.",
  },
  {
    location: "Murchison",
    imageUrl: "images/Murchison.jpg",
    description:
      "Explore Uganda's powerful waterfalls and diverse wildlife in Murchison Falls National Park.",
  },
  {
    location: "Kidepo",
    imageUrl: "images/Kidepo.jpg",
    description:
      "Discover the remote beauty and wildlife of Kidepo Valley National Park.",
  },
  {
    location: "Mountain Elgon",
    imageUrl: "images/MountainElgon.jpg",
    description:
      "Enjoy the scenic beauty and hiking trails of Mount Elgon National Park.",
  },
  {
    location: "Gulu City",
    imageUrl: "images/Gulu.jpg",
    description:
      "Visit Gulu, an area rich in history and cultural significance in Northern Uganda.",
  },
];

// Find the carousel inner container
const carouselInner = document.getElementById("carouselItems");

// Loop through the locations array and create the carousel items dynamically
locations.forEach((location, index) => {
  const carouselItem = document.createElement("div");
  carouselItem.classList.add("carousel-item");

  // Set the first item as active
  if (index === 0) {
    carouselItem.classList.add("active");
  }

  // Set the background image for the carousel item
  carouselItem.style.backgroundImage = `url('${location.imageUrl}')`;

  // Create content for each carousel item (including description)
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("hero-content");
  contentDiv.innerHTML = `
      <div class="hero-title">
        <h2>${location.location}</h2>
        <p>${location.description}</p>
        <div class="buttons">
          <button class="save-btn">💖</button>
          <button class="travel-btn">Travel</button>
        </div>
      </div>
    `;

  carouselItem.appendChild(contentDiv);
  carouselInner.appendChild(carouselItem);
});
