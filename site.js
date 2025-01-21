document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const siteId = urlParams.get("id");

  if (!siteId) {
    console.error("No site ID provided in the URL.");
    return;
  }

  fetch("site-data.json")
    .then((response) => response.json())
    .then((data) => {
      const site = data.sites.find((site) => site.id === siteId);

      if (!site) {
        console.error(`Site with ID '${siteId}' not found.`);
        return;
      }

      // Update the content based on the selected site
      const pageHeadSection = document.querySelector(".page-head-section");
      if (pageHeadSection) {
        const imgElement = pageHeadSection.querySelector(".pageheadimg");
        if (imgElement) {
          imgElement.src = site.images[0];
          imgElement.alt = site.title;
        }
        const titleElement =
          pageHeadSection.querySelector(".imgpagehead-title");
        if (titleElement) {
          titleElement.textContent = site.title;
        }
        const subtitleElement = pageHeadSection.querySelector(
          ".imgpagehead-subtitle"
        );
        if (subtitleElement) {
          subtitleElement.textContent = site.description;
        }
      }

      // Populate Overview Tab
      const overview = site.overview;
      if (overview) {
        document.querySelector("[data-site-overview-text]").innerHTML =
          overview.text;
        document.querySelector("[data-site-overview-map]").src = overview.map;
        document.querySelector("[data-site-overview-bestTime]").textContent =
          overview.keyInfo.bestTime;
        document.querySelector("[data-site-overview-highSeason]").textContent =
          overview.keyInfo.highSeason;
        document.querySelector("[data-site-overview-size]").textContent =
          overview.keyInfo.size;

        const prosList = document.querySelector("[data-site-overview-pros]");
        if (prosList)
          prosList.innerHTML = overview.pros
            .map((pro) => `<li>${pro}</li>`)
            .join("");

        const consList = document.querySelector("[data-site-overview-cons]");
        if (consList)
          consList.innerHTML = overview.cons
            .map((con) => `<li>${con}</li>`)
            .join("");

        document.querySelector(
          "[data-site-overview-wildlife-text]"
        ).textContent = overview.wildlife.text;
        document.querySelector(
          "[data-site-overview-activities-text]"
        ).textContent = overview.wildlife.activities;
        document.querySelector(
          "[data-site-overview-weather-text]"
        ).textContent = overview.bestTime.weather;
        document.querySelector(
          "[data-site-overview-bestTime-text]"
        ).textContent = overview.bestTime.text;
      }

      // Populate Parks & Reserves Tab
      const parks = site.parks;
      const premierParksContainer = document.querySelector(
        "[data-site-parks-premier] .parks-grid"
      );
      if (premierParksContainer && parks && parks.premierParks) {
        premierParksContainer.innerHTML = parks.premierParks
          .map(
            (park) => `
                  <div class="park-card">
                      <img src="${park.image}" alt="${park.name}" class="park-image" />
                      <div class="park-info">
                          <h3 class="park-title">${park.name}</h3>
                          <div class="location-rating">
                              <p class="park-location">${park.location}</p>
                              <p class="park-rating">
                                  <span class="rating-score">${park.rating}</span> · Exceptional
                              </p>
                          </div>
                          <p class="park-description">${park.description}</p>
                          <div class="park-actions">
                              <p class="price">
                                  From <span class="price-value">${park.price}</span>
                              </p>
                              <a href="#" class="btn-view-more">View More</a>
                          </div>
                      </div>
                  </div>
              `
          )
          .join("");
      }

      const allParksContainer = document.querySelector(
        "[data-site-parks-all] .parks-grid"
      );
      if (allParksContainer && parks && parks.allParks) {
        allParksContainer.innerHTML = parks.allParks
          .map(
            (park) => `
                  <div class="park-card">
                      <img src="${park.image}" alt="${park.name}" class="park-image" />
                      <div class="park-info">
                          <h3 class="park-title">${park.name}</h3>
                          <div class="location-rating">
                              <p class="park-location">${park.location}</p>
                              <p class="park-rating">
                                  <span class="rating-score">${park.rating}</span> · Exceptional
                              </p>
                          </div>
                          <p class="park-description">${park.description}</p>
                          <div class="park-actions">
                              <p class="price">
                                  From <span class="price-value">${park.price}</span>
                              </p>
                              <a href="#" class="btn-view-more">View More</a>
                          </div>
                      </div>
                  </div>
              `
          )
          .join("");
      }

      // Populate Reviews Tab
      const reviews = site.overview.reviews;
      if (reviews) {
        document.querySelector("[data-site-reviews-score]").textContent =
          reviews.score;
        document.querySelector("[data-site-reviews-count]").textContent =
          reviews.count;
        document.querySelector("[data-site-reviews-quality]").textContent =
          reviews.quality;
        document.querySelector("[data-site-reviews-value]").textContent =
          reviews.value;
        document.querySelector("[data-site-reviews-usability]").textContent =
          reviews.usability;

        const reviewsListContainer = document.querySelector(
          "[data-site-reviews-list]"
        );
        if (reviewsListContainer && reviews.list) {
          reviewsListContainer.innerHTML = ""; // Clear existing content
          reviews.list.forEach((review, index) => {
            const reviewItem = document.createElement("div");
            reviewItem.classList.add("review-item");
            reviewItem.innerHTML = `
                      <div class="profile-review-title">
                          <div class="profile-card">
                              <img
                                  src="${review.image}"
                                  alt="${review.name}"
                                  class="profile-pic"
                              />
                              <div class="profile-info">
                                  <p class="reviewer-name">${review.name}</p>
                                  <div class="review-rating">
                                      <span class="rating-score">4.5</span>
                                  </div>
                              </div>
                          </div>
                          <h3 class="review-title">Poor quality spray nozzle</h3>
                      </div>
                      <p class="review-meta">
                          <span class="review-location"
                              >Reviewed in the United States</span
                          >
                          on <span class="review-date">August 23, 2019</span> |
                          <span class="review-style">Style: Cashmere Woods</span> |
                          <span class="verified">Verified Purchase</span>
                      </p>
                      <p class="review-content">
                          ${review.text}
                      </p>
                  `;
            reviewsListContainer.appendChild(reviewItem);
          });
        }
      }

      // Populate Wildlife Tab
      const wildlife = site.wildlife;
      if (wildlife) {
        document.querySelector("[data-site-wildlife-text]").textContent =
          wildlife.text;
        document.querySelector(
          "[data-site-wildlife-abundance-title]"
        ).textContent = "Wildlife Abundance";
        const wildlifeAbundanceContainer = document.querySelector(
          "[data-site-wildlife-abundance]"
        );
        if (wildlifeAbundanceContainer && wildlife.abundance) {
          wildlifeAbundanceContainer.innerHTML = wildlife.abundance
            .map(
              (animal) => `
                    <div class="wildlife-card">
                        <img src="${animal.image}" alt="${animal.name}" />
                        <div class="wildlife-info">
                            <h4>${animal.name}</h4>
                            <p>Abundance: ${animal.abundance}</p>
                        </div>
                    </div>
                `
            )
            .join("");
        }

        document.querySelector(
          "[data-site-wildlife-highlights-title]"
        ).textContent = "Wildlife Highlights";
        document.querySelector(
          "[data-site-wildlife-highlights-text]"
        ).textContent =
          "Damaraland and the neighboring Kunene region are home to a healthy population of desert-adapted elephants and lions, as well as a smaller population of black rhino (which can be tracked in the Palmwag region). The secretive brown hyena is sometimes seen lurking around seal colonies on the coast. Other marine wildlife includes the rare Heaviside’s dolphin and migrating southern right whale.";
        const photoHighlightsContainer = document.querySelector(
          "[data-site-wildlife-photo-highlights] .swiper-wrapper"
        );
        if (photoHighlightsContainer && wildlife.photoHighlights) {
          photoHighlightsContainer.innerHTML = wildlife.photoHighlights
            .map(
              (image) => `
                    <div class="swiper-slide wildlife-card wildlife-photo">
                        <img src="${image}" alt="Wildlife Photo" />
                    </div>
                `
            )
            .join("");
        }
      }
    })
    .catch((error) => console.error("Error fetching site data:", error));
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
