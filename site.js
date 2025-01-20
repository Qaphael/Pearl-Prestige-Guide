document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const siteId = urlParams.get('id');

  if (!siteId) {
      console.error("No site ID provided in the URL.");
      return;
  }

  fetch('site-data.json')
      .then(response => response.json())
      .then(data => {
          const site = data.sites.find(site => site.id === siteId);

          if (!site) {
              console.error(`Site with ID '${siteId}' not found.`);
              return;
          }

          // Update the content based on the selected site
          const pageHeadSection = document.querySelector('.page-head-section');
          if (pageHeadSection) {
              const imgElement = pageHeadSection.querySelector('.pageheadimg');
              if (imgElement) {
                  imgElement.src = site.images[0];
                  imgElement.alt = site.title;
              }
              const titleElement = pageHeadSection.querySelector('.imgpagehead-title');
              if (titleElement) {
                  titleElement.textContent = site.title;
              }
              const subtitleElement = pageHeadSection.querySelector('.imgpagehead-subtitle');
              if (subtitleElement) {
                  subtitleElement.textContent = site.description;
              }
          }

          // Populate Overview Tab
          const overview = site.overview;
          console.log("Overview data:", overview);

          const overviewTextElement = document.querySelector('[data-site-overview-text]');
          console.log("Text element:", overviewTextElement);
          console.log("Text content:", overview.text);
          if (overviewTextElement) overviewTextElement.innerHTML = overview.text;

          document.querySelector('[data-site-overview-map]').src = overview.map;

          const bestTimeElement = document.querySelector('[data-site-overview-bestTime]');
          console.log("Best Time element:", bestTimeElement);
          console.log("Best Time content:", overview.keyInfo.bestTime);
          if (bestTimeElement) bestTimeElement.textContent = overview.keyInfo.bestTime;

          const highSeasonElement = document.querySelector('[data-site-overview-highSeason]');
          console.log("High Season element:", highSeasonElement);
          console.log("High Season content:", overview.keyInfo.highSeason);
          if (highSeasonElement) highSeasonElement.textContent = overview.keyInfo.highSeason;

          const sizeElement = document.querySelector('[data-site-overview-size]');
          console.log("Size element:", sizeElement);
          console.log("Size content:", overview.keyInfo.size);
          if (sizeElement) sizeElement.textContent = overview.keyInfo.size;

          const prosList = document.querySelector('[data-site-overview-pros]');
          console.log("Pros list element:", prosList);
          console.log("Pros content:", overview.pros);
          if (prosList) prosList.innerHTML = overview.pros.map(pro => `<li>${pro}</li>`).join('');

          const consList = document.querySelector('[data-site-overview-cons]');
          console.log("Cons list element:", consList);
          console.log("Cons content:", overview.cons);
          if (consList) consList.innerHTML = overview.cons.map(con => `<li>${con}</li>`).join('');

          document.querySelector('[data-site-overview-reviews-score]').textContent = overview.reviews.score;
          document.querySelector('[data-site-overview-reviews-count]').textContent = overview.reviews.count;
          document.querySelector('[data-site-overview-reviews-quality]').textContent = overview.reviews.quality;
          document.querySelector('[data-site-overview-reviews-value]').textContent = overview.reviews.value;
          document.querySelector('[data-site-overview-reviews-usability]').textContent = overview.reviews.usability;

          document.querySelector('[data-site-overview-reviews-review1-name]').textContent = overview.reviews.review1.name;
          document.querySelector('[data-site-overview-reviews-review1-text]').textContent = overview.reviews.review1.text;
          document.querySelector('[data-site-overview-reviews-review1-image]').src = overview.reviews.review1.image;

          document.querySelector('[data-site-overview-reviews-review2-name]').textContent = overview.reviews.review2.name;
          document.querySelector('[data-site-overview-reviews-review2-text]').textContent = overview.reviews.review2.text;
          document.querySelector('[data-site-overview-reviews-review2-image]').src = overview.reviews.review2.image;

          const wildlifeTextElement = document.querySelector('[data-site-overview-wildlife-text]');
          console.log("Wildlife text element:", wildlifeTextElement);
          console.log("Wildlife text content:", overview.wildlife.text);
          if (wildlifeTextElement) wildlifeTextElement.textContent = overview.wildlife.text;

          const activitiesTextElement = document.querySelector('[data-site-overview-activities-text]');
          console.log("Activities text element:", activitiesTextElement);
          console.log("Activities text content:", overview.wildlife.activities);
          if (activitiesTextElement) activitiesTextElement.textContent = overview.wildlife.activities;

          const weatherTextElement = document.querySelector('[data-site-overview-weather-text]');
          console.log("Weather text element:", weatherTextElement);
          console.log("Weather text content:", overview.bestTime.weather);
          if (weatherTextElement) weatherTextElement.textContent = overview.bestTime.weather;

          const bestTimeTextElement = document.querySelector('[data-site-overview-bestTime-text]');
          console.log("Best Time text element:", bestTimeTextElement);
          console.log("Best Time text content:", overview.bestTime.text);
          if (bestTimeTextElement) bestTimeTextElement.textContent = overview.bestTime.text;
      })
      .catch(error => console.error("Error fetching site data:", error));
});


// Function to open the selected tab
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  // Hide all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }

  // Remove active class from all tab links
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the current tab content and add an "active" class to the link
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");

  // Store the active tab in localStorage
  localStorage.setItem("activeTab", tabName);
}

// Function to set the active tab on page load
function setActiveTabOnLoad() {
  // Retrieve the active tab from localStorage
  const activeTab = localStorage.getItem("activeTab");

  // If an active tab is found, open it
  if (activeTab) {
    const tabToOpen = document.querySelector(
      `.tablinks[onclick*="${activeTab}"]`
    );
    if (tabToOpen) {
      tabToOpen.click(); // Simulate a click on the tab link
    }
  } else {
    // Default to the first tab if no active tab is stored
    const defaultTab = document.querySelector(".tablinks");
    if (defaultTab) {
      defaultTab.click();
    }
  }
}

// Set the active tab when the page loads
document.addEventListener("DOMContentLoaded", setActiveTabOnLoad);

// Function to open the carousel (unchanged)
function openCarousel(index) {
  const images = ["map1.png", "map2.png", "map3.png"];
  const carouselView = document.getElementById("carousel-view");
  const carouselImage = document.getElementById("carousel-image");

  carouselImage.src = images[index - 1];
  carouselView.style.display = "block";
}

var swiper = new Swiper(".mySwiper4", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// JavaScript for Filter System
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const parks = document.querySelectorAll(".park");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to the clicked button
      button.classList.add("active");

      // Get the filter value
      const filter = button.getAttribute("data-filter");

      // Filter parks based on the selected filter
      parks.forEach((park) => {
        const season = park.getAttribute("data-season");
        const wildlife = park.getAttribute("data-wildlife");

        if (filter === "all" || filter === season || filter === wildlife) {
          park.style.display = "block";
        } else {
          park.style.display = "none";
        }
      });
    });
  });
});

// JavaScript for Booking Widget
document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.querySelector(".booking-form");

  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const destination = document.getElementById("destination").value;
    const checkIn = document.getElementById("check-in").value;
    const checkOut = document.getElementById("check-out").value;
    const guests = document.getElementById("guests").value;

    // Simulate search (replace with actual booking logic)
    alert(
      `Searching for safaris in ${destination} from ${checkIn} to ${checkOut} for ${guests} guests.`
    );
  });
});

// JavaScript for Newsletter Signup
document.addEventListener("DOMContentLoaded", function () {
  const newsletterForm = document.querySelector(".newsletter-form");

  newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Simulate subscription (replace with actual subscription logic)
    alert(`Thank you, ${name}! You have subscribed with ${email}.`);
  });
});

// JavaScript for Timeline View
document.addEventListener("DOMContentLoaded", function () {
  const months = document.querySelectorAll(".month");

  months.forEach((month) => {
    month.addEventListener("click", () => {
      const monthName = month.getAttribute("data-month");
      alert(`You clicked on ${monthName}. More details coming soon!`);
    });
  });
});

// JavaScript for Accordion
document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement;
      accordionItem.classList.toggle("active");

      // Close other accordion items
      accordionHeaders.forEach((otherHeader) => {
        if (otherHeader !== header) {
          otherHeader.parentElement.classList.remove("active");
        }
      });
    });
  });
});

// Initialize Swiper for Safari Tours
const safariToursSwiper = new Swiper(".safari-tours-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Initialize Swiper for Experts
const expertsSwiper = new Swiper(".experts-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Filter Code
// Select elements
const filterToggleButton = document.getElementById("filterToggleButton");
const closeSidebarButton = document.getElementById("closeSidebarButton");
const sideBarTab = document.getElementById("side-bar-tab");
const tabFiltersBackdrop = document.getElementById("tabFiltersBackdrop");

// Toggle the sidebar visibility
filterToggleButton.addEventListener("click", () => {
  sideBarTab.classList.add("active"); // Show the sidebar
  tabFiltersBackdrop.classList.add("active"); // Show the backdrop
});

// Close the sidebar when the close button or backdrop is clicked
closeSidebarButton.addEventListener("click", () => {
  sideBarTab.classList.remove("active"); // Hide the sidebar
  tabFiltersBackdrop.classList.remove("active"); // Hide the backdrop
});

// Close the sidebar when the close button or backdrop is clicked
tabFiltersBackdrop.addEventListener("click", () => {
  sideBarTab.classList.remove("active"); // Hide the sidebar
  tabFiltersBackdrop.classList.remove("active"); // Hide the backdrop
});


