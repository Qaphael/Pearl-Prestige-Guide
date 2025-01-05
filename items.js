// Sample dataset
const items = [
  {
    title: "Mahayoga Ubud",
    location: "Ubud, Bali",
    guests: 8,
    bathrooms: 2,
    bedrooms: 3,
    price: "$427.30",
    image: "images/items/villa/villa1.jpg",
    category: "villa",
  },
  {
    title: "Roshan Ubud Villa",
    location: "Ubud, Bali",
    guests: 6,
    bathrooms: 2,
    bedrooms: 2,
    price: "$369.22",
    image: "images/items/villa/villa2.jpg",
    category: "villa",
  },
  {
    title: "El Barrio Boutique",
    location: "Canggu, Bali",
    guests: 8,
    bathrooms: 3,
    bedrooms: 4,
    price: "$420.93",
    image: "images/items/villa/villa3.jpg",
    category: "villa",
  },
  {
    title: "The Clifton Canggu",
    location: "Batu Bolong, Canggu, Bali",
    guests: 8,
    bathrooms: 2,
    bedrooms: 3,
    price: "$429.03",
    image: "images/items/villa/villa4.jpg",
    category: "villa",
  },
  {
    title: "Alam Jepun Villa",
    location: "Padma, Legian, Bali",
    guests: 6,
    bathrooms: 2,
    bedrooms: 3,
    price: "$230.49",
    image: "images/items/villa/villa5.jpg",
    category: "villa",
  },
  {
    title: "Sunny Village Batu",
    location: "Batu Bolong, Canggu, Bali",
    guests: 6,
    bathrooms: 2,
    bedrooms: 3,
    price: "$309.40",
    image: "images/items/villa/villa1.jpg",
    category: "villa",
  },
  {
    title: "Villa Mia Seminyak",
    location: "Seminyak, Bali",
    guests: 8,
    bathrooms: 3,
    bedrooms: 3,
    price: "$349.25",
    image: "images/items/villa/villa2.jpg",
    category: "villa",
  },
  {
    title: "Legian Beachfront Villa",
    location: "Legian, Bali",
    guests: 4,
    bathrooms: 1,
    bedrooms: 2,
    price: "$250.00",
    image: "images/items/villa/villa3.jpg",
    category: "villa",
  },
  {
    title: "Royal Bali Villa",
    location: "Seminyak, Bali",
    guests: 10,
    bathrooms: 5,
    bedrooms: 5,
    price: "$800.00",
    image: "images/items/villa/villa4.jpg",
    category: "villa",
  },
  {
    title: "Apartments at Banyan Tree",
    location: "Nusa Dua, Bali",
    guests: 4,
    bathrooms: 1,
    bedrooms: 2,
    price: "$220.50",
    image: "images/items/apartment/apartment1.jpg",
    category: "apartment",
  },
  {
    title: "Deluxe Penthouse in Jakarta",
    location: "Jakarta, Indonesia",
    guests: 6,
    bathrooms: 3,
    bedrooms: 3,
    price: "$350.00",
    image: "images/items/apartment/apartment2.jpg",
    category: "apartment",
  },
  {
    title: "City Lights View Apartment",
    location: "Kuala Lumpur, Malaysia",
    guests: 4,
    bathrooms: 2,
    bedrooms: 2,
    price: "$180.00",
    image: "images/items/apartment/apartment3.jpg",
    category: "apartment",
  },
  {
    title: "Beachfront View Apartment",
    location: "Phuket, Thailand",
    guests: 5,
    bathrooms: 2,
    bedrooms: 3,
    price: "$275.50",
    image: "images/items/apartment/apartment4.jpg",
    category: "apartment",
  },
  {
    title: "Luxury Penthouse in the City",
    location: "Singapore",
    guests: 8,
    bathrooms: 3,
    bedrooms: 4,
    price: "$550.00",
    image: "images/items/apartment/apartment1.jpg",
    category: "apartment",
  },
  {
    title: "Sunset View Hotel",
    location: "Ubud, Bali",
    guests: 10,
    bathrooms: 5,
    bedrooms: 5,
    price: "$470.00",
    image: "images/items/hotel/hotel1.jpg",
    category: "hotel",
  },
  {
    title: "The Ritz-Carlton",
    location: "Kuala Lumpur, Malaysia",
    guests: 2,
    bathrooms: 1,
    bedrooms: 1,
    price: "$350.00",
    image: "images/items/hotel/hotel2.jpg",
    category: "hotel",
  },
  {
    title: "Hotel Grand Pacific",
    location: "Singapore",
    guests: 6,
    bathrooms: 3,
    bedrooms: 2,
    price: "$320.00",
    image: "images/items/hotel/hotel3.jpg",
    category: "hotel",
  },
  {
    title: "Ocean View Resort",
    location: "Maldives",
    guests: 8,
    bathrooms: 4,
    bedrooms: 4,
    price: "$1,000.00",
    image: "images/items/hotel/hotel4.jpg",
    category: "hotel",
  },
  {
    title: "Ramada Inn",
    location: "Ubud, Bali",
    guests: 5,
    bathrooms: 2,
    bedrooms: 3,
    price: "$200.00",
    image: "images/items/hotel/hotel5.jpg",
    category: "hotel",
  },
  {
    title: "Small Home in Bali",
    location: "Canggu, Bali",
    guests: 4,
    bathrooms: 1,
    bedrooms: 2,
    price: "$160.00",
    image: "images/items/small-home/small-home1.jpg",
    category: "small-home",
  },
  {
    title: "Green Villa Cottage",
    location: "Ubud, Bali",
    guests: 3,
    bathrooms: 1,
    bedrooms: 2,
    price: "$120.00",
    image: "images/items/small-home/small-home2.jpg",
    category: "small-home",
  },
  {
    title: "Tiny Home Beach Retreat",
    location: "Sanur, Bali",
    guests: 2,
    bathrooms: 1,
    bedrooms: 1,
    price: "$80.00",
    image: "images/items/small-home/small-home3.jpg",
    category: "small-home",
  },
  {
    title: "Modern Minimalist Home",
    location: "Canggu, Bali",
    guests: 4,
    bathrooms: 2,
    bedrooms: 2,
    price: "$250.00",
    image: "images/items/small-home/small-home4.jpg",
    category: "small-home",
  },
  {
    title: "Beach House Retreat",
    location: "Seminyak, Bali",
    guests: 6,
    bathrooms: 2,
    bedrooms: 3,
    price: "$330.00",
    image: "images/items/small-home/small-home5.jpg",
    category: "small-home",
  },
  {
    title: "Sunset Beach Villa",
    location: "Uluwatu, Bali",
    guests: 10,
    bathrooms: 4,
    bedrooms: 5,
    price: "$450.00",
    image: "images/items/beach/beach1.jpg",
    category: "beach",
  },
  {
    title: "Kuta Beach Resort",
    location: "Kuta, Bali",
    guests: 8,
    bathrooms: 3,
    bedrooms: 4,
    price: "$420.00",
    image: "images/items/beach/beach2.jpg",
    category: "beach",
  },
  {
    title: "Nusa Dua Beachfront",
    location: "Nusa Dua, Bali",
    guests: 12,
    bathrooms: 5,
    bedrooms: 6,
    price: "$750.00",
    image: "images/items/beach/beach3.jpg",
    category: "beach",
  },
  {
    title: "Margarita Beach Resort",
    location: "Bali, Indonesia",
    guests: 6,
    bathrooms: 2,
    bedrooms: 3,
    price: "$200.00",
    image: "images/items/beach/beach4.jpg",
    category: "beach",
  },
  {
    title: "Luxury Beachfront Villa",
    location: "Bali, Indonesia",
    guests: 10,
    bathrooms: 5,
    bedrooms: 5,
    price: "$950.00",
    image: "images/items/beach/beach5.jpg",
    category: "beach",
  },
  {
    title: "Mount Rinjani Trekking",
    location: "Lombok, Indonesia",
    guests: 4,
    bathrooms: 1,
    bedrooms: 2,
    price: "$150.00",
    image: "images/items/hiking/hiking1.jpg",
    category: "hiking",
  },
  {
    title: "Mount Bromo Sunrise Trek",
    location: "East Java, Indonesia",
    guests: 2,
    bathrooms: 1,
    bedrooms: 1,
    price: "$180.00",
    image: "images/items/hiking/hiking2.jpg",
    category: "hiking",
  },
  {
    title: "Culmination Point Trek",
    location: "Bali, Indonesia",
    guests: 5,
    bathrooms: 2,
    bedrooms: 2,
    price: "$210.00",
    image: "images/items/hiking/hiking3.jpg",
    category: "hiking",
  },
  {
    title: "Mount Agung Trekking",
    location: "Bali, Indonesia",
    guests: 6,
    bathrooms: 3,
    bedrooms: 3,
    price: "$250.00",
    image: "images/items/hiking/hiking4.jpg",
    category: "hiking",
  },
  {
    title: "Mountain Retreat Villa",
    location: "Ubud, Bali",
    guests: 6,
    bathrooms: 2,
    bedrooms: 3,
    price: "$400.00",
    image: "images/items/mountain/mountain1.jpg",
    category: "mountain",
  },
  {
    title: "Alpine View Lodge",
    location: "Swiss Alps, Switzerland",
    guests: 10,
    bathrooms: 5,
    bedrooms: 6,
    price: "$800.00",
    image: "images/items/mountain/mountain2.jpg",
    category: "mountain",
  },
  {
    title: "Himalayan Base Camp",
    location: "Nepal",
    guests: 12,
    bathrooms: 6,
    bedrooms: 6,
    price: "$1,200.00",
    image: "images/items/mountain/mountain3.jpg",
    category: "mountain",
  },
  {
    title: "Mountain Paradise Inn",
    location: "Canada",
    guests: 8,
    bathrooms: 3,
    bedrooms: 4,
    price: "$500.00",
    image: "images/items/mountain/mountain4.jpg",
    category: "mountain",
  },
];

// Function to render items with animations
const renderItems = (category = "villa") => {
  const findGrid = document.getElementById("findGrid");

  // Add fade-out effect before clearing items
  findGrid.classList.add("fade-out");
  setTimeout(() => {
    findGrid.innerHTML = ""; // Clear previous items after fade-out

    // Filter items based on category
    const filteredItems =
      category === "all"
        ? items
        : items.filter((item) => item.category === category);

    // Add new items to the grid
    filteredItems.forEach((item) => {
      const itemHTML = `
          <div class="find-item" data-category="${item.category}">
            <img src="${item.image}" alt="${item.title}">
            <div class="find-info">
              <h3>${item.title}</h3>
              <p>${item.location}</p>
              <div class="find-meta">
                <span><i class="fa-solid fa-user-group"></i> ${item.guests} Guests</span>
                <span><i class="fa-solid fa-shower"></i> ${item.bathrooms} Bathrooms</span>
                <span><i class="fa-solid fa-bed"></i> ${item.bedrooms} Bedrooms</span>
              </div>
              <div class="price">${item.price}</div>
            </div>
          </div>
        `;
      findGrid.innerHTML += itemHTML;
    });

    // Update pagination for the filtered items
    updatePagination(filteredItems);

    // Add fade-in effect after adding new items
    findGrid.classList.remove("fade-out");
    findGrid.classList.add("fade-in");

    setTimeout(() => {
      findGrid.classList.remove("fade-in"); // Clean up classes after animation
    }, 300); // Match the CSS animation duration
  }, 300); // Match the CSS fade-out duration
};

// Function to update pagination
const updatePagination = (filteredItems) => {
  const itemsPerPage = 9; // Limit items per page
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginationContainer = document.querySelector(".pagination");

  // Clear existing pagination
  paginationContainer.innerHTML = "";

  // Create pagination links
  for (let i = 1; i <= totalPages; i++) {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = i;
    link.addEventListener("click", (e) => {
      e.preventDefault();
      currentPage = i;
      showPage(i, filteredItems, itemsPerPage);
    });
    paginationContainer.appendChild(link);
  }

  // Show the first page by default
  showPage(1, filteredItems, itemsPerPage);
};

// Function to show the items for the selected page
const showPage = (page, filteredItems, itemsPerPage) => {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  // Select the items from the filtered list
  const findGridItems = document.querySelectorAll(".find-item");

  // Hide all items first
  findGridItems.forEach((item) => {
    item.classList.remove("visible");
  });

  // Show the items for the current page
  filteredItems.slice(start, end).forEach((item, index) => {
    findGridItems[start + index].classList.add("visible");
  });

  // Update active class on pagination links
  const paginationLinks = document.querySelectorAll(".pagination a");
  paginationLinks.forEach((link) => link.classList.remove("active"));
  paginationLinks[page - 1].classList.add("active");
};

// Event listener for category filtering
const categoryButtons = document.querySelectorAll(".categories li");
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove 'active' class from all buttons
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    // Add 'active' class to clicked button
    button.classList.add("active");

    // Get the category of the clicked button
    const category = button.getAttribute("data-category");
    renderItems(category);
  });
});

// Function to initialize pagination and category filter
document.addEventListener("DOMContentLoaded", () => {
  // Initialize the first category (for example, 'villa') on page load
  renderItems("villa");

  // Pagination logic (pagination is updated after rendering items)
});
