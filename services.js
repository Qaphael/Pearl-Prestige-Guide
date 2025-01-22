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

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]'); // Links pointing to sections

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior

      // Get the target ID from the href attribute
      const targetId = this.getAttribute("href").substring(1);

      // Activate the corresponding tab
      const tabLink = document.querySelector(`.tab-link[data-tab="${targetId}"]`);
      const tabPane = document.getElementById(targetId);

      if (tabLink && tabPane) {
        // Deactivate all tabs and panes
        const allTabLinks = document.querySelectorAll(".tab-link");
        const allTabPanes = document.querySelectorAll(".tab-pane");

        allTabLinks.forEach((tab) => tab.classList.remove("active"));
        allTabPanes.forEach((pane) => pane.classList.remove("active"));

        // Activate the clicked tab and its pane
        tabLink.classList.add("active");
        tabPane.classList.add("active");

        // Scroll after a small delay to ensure DOM updates
        setTimeout(() => {
          tabPane.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100); // 100ms delay to allow the tab to activate
      }
    });
  });
});
