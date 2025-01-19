// JavaScript for Tabs
document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove active class from all tabs and panes
      tabLinks.forEach((link) => link.classList.remove("active"));
      tabPanes.forEach((pane) => pane.classList.remove("active"));

      // Add active class to the clicked tab and corresponding pane
      this.classList.add("active");
      const tabId = this.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });
});

// Filter Code
// Select elements
const servicesToggleButton = document.getElementById("servicesToggleButton");
const closeServiceFilterButton = document.getElementById(
  "closeServiceFilterButton"
);
const serviceTab = document.getElementById("servicesTabLinks");
const serviceFiltersBackdrop = document.getElementById(
  "serviceFiltersBackdrop"
);

// Toggle the sidebar visibility
servicesToggleButton.addEventListener("click", () => {
  serviceTab.classList.add("active"); // Show the sidebar
  serviceFiltersBackdrop.classList.add("active"); // Show the backdrop
});

// Close the sidebar when the close button or backdrop is clicked
closeServiceFilterButton.addEventListener("click", () => {
  serviceTab.classList.remove("active"); // Hide the sidebar
  serviceFiltersBackdrop.classList.remove("active"); // Hide the backdrop
});

// Close the sidebar when the close button or backdrop is clicked
serviceFiltersBackdrop.addEventListener("click", () => {
  serviceTab.classList.remove("active"); // Hide the sidebar
  serviceFiltersBackdrop.classList.remove("active"); // Hide the backdrop
});
