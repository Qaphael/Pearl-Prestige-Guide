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
  }
  
  // Set the default tab to open (optional)
  document.getElementsByClassName("tablinks")[0].click();

  function openCarousel(index) {
    const images = ["map1.png", "map2.png", "map3.png"];
    const carouselView = document.getElementById("carousel-view");
    const carouselImage = document.getElementById("carousel-image");

    carouselImage.src = images[index - 1];
    carouselView.style.display = "block";
}