document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const tourId = urlParams.get('id');
    const toursListContainer = document.querySelector('[data-tours-list]');

    if (toursListContainer) {
        // We are on the tours list page
        fetch('tours.json')
            .then(response => response.json())
            .then(data => {
                const toursHTML = data.tours.map(tour => `
                    <div class="tour-card">
                        <img src="${tour.image}" alt="${tour.title}" class="tour-image">
                        <div class="tour-card-content">
                            <div class="price-div">
                                <p class="best-seller">${tour.bestSeller}</p>
                                <p class="card-price">${tour.price}</p>
                            </div>
                            <h3 class="card-title">${tour.title}</h3>
                            <div class="tour-details">
                                <p class="card-location">
                                    <i class="fas fa-map-marker-alt"></i>${tour.location}
                                </p>
                                <p class="tour-style">
                                    <i class="fas fa-suitcase-rolling"></i>${tour.style}
                                </p>
                                <p class="tour-accommodation">
                                    <i class="fas fa-hotel"></i>${tour.accommodation}
                                </p>
                            </div>
                            <div class="tour-description-wrapper">
                                <p class="tour-description">
                                    <i class="fas fa-info-circle"></i>
                                    ${tour.description.substring(0, 100)}...
                                </p>
                                <a href="tour.html?id=${tour.id}" class="read-more-link">
                                    Read More
                                    <svg class="circle-svg" viewBox="0 0 70 36">
                                        <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527"/>
                                    </svg>
                                </a>
                            </div>
                            <div class="tour-rating-div">
                                <div class="stars">
                                    ${Array(5).fill('<i class="fa fa-star"></i>').join('')}
                                </div>
                                <div class="tour-rating">
                                    <p class="rating-value">${tour.rating}</p>
                                    <p class="review-count">– ${tour.reviews} Reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('');
                toursListContainer.innerHTML = toursHTML;
            })
            .catch(error => console.error("Error fetching tours:", error));
    } else if (tourId) {
        // We are on an individual tour page
        fetch('tours.json')
            .then(response => response.json())
            .then(data => {
                const tour = data.tours.find(tour => tour.id === tourId);

                if (!tour) {
                    console.error(`Tour with ID '${tourId}' not found.`);
                    return;
                }

                document.querySelector('title[data-tour-title]').textContent = tour.title + " - Global Trekker";
                document.querySelector('[data-tour-title]').textContent = tour.title;
                document.querySelector('[data-tour-price]').textContent = tour.price;
                document.querySelector('[data-tour-best-seller]').textContent = tour.bestSeller || '';
                document.querySelector('[data-tour-location]').innerHTML = `<i class="fas fa-map-marker-alt"></i>${tour.location}`;
                document.querySelector('[data-tour-style]').innerHTML = `<i class="fas fa-suitcase-rolling"></i>${tour.style}`;
                document.querySelector('[data-tour-accommodation]').innerHTML = `<i class="fas fa-hotel"></i>${tour.accommodation}`;
                document.querySelector('[data-tour-description]').innerHTML = `<i class="fas fa-info-circle"></i>${tour.description}`;
                document.querySelector('[data-tour-image]').src = tour.image;
                document.querySelector('[data-tour-rating-value]').textContent = tour.rating;
                document.querySelector('[data-tour-review-count]').textContent = `– ${tour.reviews} Reviews`;

                const starsContainer = document.querySelector('[data-tour-stars]');
                starsContainer.innerHTML = Array(5).fill('<i class="fa fa-star"></i>').join('');
            })
            .catch(error => console.error("Error fetching tour:", error));
    }
});
