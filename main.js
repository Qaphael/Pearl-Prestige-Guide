// Handle scroll effect
window.onscroll = function () {
  const header = document.querySelector("header");
  const navLinks = document.querySelectorAll("header nav a");
  const otherLinks = document.querySelectorAll("header .login-options a");
  const isMobile = window.innerWidth <= 768;
  const menuIcon = document.querySelector(".menu-toggle");

  if (window.scrollY > 50) {
    header.classList.add("white-bg"); // Add scrolled class

    // Change links outside nav menu to black
    otherLinks.forEach((link) => (link.style.color = "black"));

    // In mobile, nav menu links stay black; in desktop, they also turn black
    navLinks.forEach((link) => (link.style.color = "black"));
    menuIcon.style.color = "black";
  } else {
    header.classList.remove("white-bg"); // Remove scrolled class

    // Links outside nav menu
    otherLinks.forEach((link) => (link.style.color = "#4fb28f"));

    // Nav menu links
    navLinks.forEach((link) => {
      link.style.color = isMobile ? "black" : "#4fb28f"; // Black in mobile, white in desktop
    });
    menuIcon.style.color = "#4fb28f";
  }
};

// Get the hamburger menu and the navigation
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("header nav ul");
const menuIcon = menuToggle.querySelector("i");

// Add event listener to the hamburger icon
menuToggle.addEventListener("click", () => {
  // Toggle the 'active' class to show/hide the menu
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");

  // Change the icon based on the active state
  if (menuToggle.classList.contains("active")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
});

// Filter Code
// Select elements
const filterToggleBtn = document.getElementById("filterToggleBtn");
const closeSidebarBtn = document.getElementById("closeSidebarBtn");
const filtersSidebar = document.getElementById("filtersSidebar");
const backdrop = document.getElementById("filtersBackdrop");

// Toggle the sidebar visibility
filterToggleBtn.addEventListener("click", () => {
  filtersSidebar.classList.add("active"); // Show the sidebar
  backdrop.classList.add("active"); // Show the backdrop
});

// Close the sidebar when the close button or backdrop is clicked
closeSidebarBtn.addEventListener("click", () => {
  filtersSidebar.classList.remove("active"); // Hide the sidebar
  backdrop.classList.remove("active"); // Hide the backdrop
});

// Close the sidebar when the close button or backdrop is clicked
backdrop.addEventListener("click", () => {
  filtersSidebar.classList.remove("active"); // Hide the sidebar
  backdrop.classList.remove("active"); // Hide the backdrop
});

// Prevent scrolling effect of links
document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default behavior (scrolling to the top)
  });
});

// Code to toggle button visibility
const backToTopButton = document.getElementById('backToTop');

// Function to toggle button visibility
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Show button after scrolling 100px
  if (scrollPosition > 600) {
    backToTopButton.style.display = 'flex';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Smooth scroll to top
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
