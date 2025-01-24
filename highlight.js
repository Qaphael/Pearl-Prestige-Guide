document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const highlightId = urlParams.get('id');
    const highlightsListContainer = document.querySelector('[data-highlights-list]');

    if (highlightsListContainer) {
        // We are on the highlights list page
        fetch('highlights.json')
            .then(response => response.json())
            .then(data => {
                const highlightsHTML = data.highlights.map(highlight => `
                    <div class="highlight-card">
                        <div class="highlight-details">
                            <div class="profile-card">
                                <img src="${highlight.profile.image}" alt="${highlight.profile.name}">
                                <div class="info">
                                    <h3>${highlight.profile.name}</h3>
                                    <p>${highlight.profile.location}</p>
                                    <div class="stars">
                                        ${Array(highlight.profile.stars).fill('<i class="fa fa-star" aria-hidden="true"></i>').join('')}
                                    </div>
                                </div>
                            </div>
                            <h3 class="card-title">${highlight.title}</h3>
                            <p class="card-description">${highlight.description}</p>
                            <a href="highlight-template.html?id=${highlight.id}" class="read-more-link">
                                Read More
                            </a>
                        </div>
                    </div>

                    <div class="story-card">
                      <div class="story-image-container">
                          <img src="images/hero/Bwindi.jpg" alt="Bali Beach" class="story-image">
                      </div>
                      <div class="story-details">
                          <h2 class="story-title">Bali Paradise</h2>
                          <p class="story-description">Experience the serene beaches and vibrant culture of Bali</p>
                          <div class="story-tags">
                              <span class="tag beach">Beach</span>
                              <span class="tag culture">Culture</span>
                          </div>
                          <div class="story-info">
                              <span>Duration: 7 days</span>
                              <span>Difficulty: Easy</span>
                          </div>
                      </div>
                  </div>
                `).join('');
                highlightsListContainer.innerHTML = highlightsHTML;
            })
            .catch(error => console.error("Error fetching highlights:", error));
    } else if (highlightId) {
        // We are on an individual highlight page
        fetch('highlights.json')
            .then(response => response.json())
            .then(data => {
                const highlight = data.highlights.find(highlight => highlight.id === highlightId);

                if (!highlight) {
                    console.error(`Highlight with ID '${highlightId}' not found.`);
                    return;
                }

                document.querySelector('title[data-highlight-title]').textContent = highlight.title + " - Global Trekker";
                document.querySelector('[data-highlight-title]').textContent = highlight.title;
                document.querySelector('[data-highlight-description]').textContent = highlight.description;

                const profileImage = document.querySelector('[data-highlight-profile-image]');
                profileImage.src = highlight.profile.image;
                profileImage.alt = highlight.profile.name;

                document.querySelector('[data-highlight-profile-name]').textContent = highlight.profile.name;
                document.querySelector('[data-highlight-profile-location]').textContent = highlight.profile.location;

                const starsContainer = document.querySelector('[data-highlight-profile-stars]');
                starsContainer.innerHTML = Array(highlight.profile.stars).fill('<i class="fa fa-star" aria-hidden="true"></i>').join('');

                const mainImage = document.querySelector('[data-highlight-main-image]');
                mainImage.src = highlight.mainImage;
                mainImage.alt = highlight.title;

                const contentContainer = document.querySelector('[data-highlight-content]');
                contentContainer.innerHTML = highlight.content.join('');
            })
            .catch(error => console.error("Error fetching highlights:", error));
    }
});
