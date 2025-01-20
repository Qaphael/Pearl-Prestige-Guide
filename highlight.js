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
                                <svg class="circle-svg" viewBox="0 0 70 36">
                                    <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527"/>
                                </svg>
                            </a>
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
