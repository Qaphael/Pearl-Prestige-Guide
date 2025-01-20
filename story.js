document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const storyId = urlParams.get('id');
    const storiesListContainer = document.querySelector('[data-stories-list]');

    if (storiesListContainer) {
        // We are on the stories list page
        fetch('stories.json')
            .then(response => response.json())
            .then(data => {
                const storiesHTML = data.stories.map(story => {
                    let truncatedContent = '';
                    let hasMore = false;
                    if (typeof story.content === 'string') {
                        const textContent = story.content.replace(/<[^>]*>/g, '');
                        const words = textContent.split(/\s+/);
                        const truncatedWords = words.slice(0, 15);
                        truncatedContent = truncatedWords.join(' ');
                        hasMore = words.length > 15;
                    } else if (Array.isArray(story.content) && story.content.length > 0) {
                        const textContent = story.content[0].replace(/<[^>]*>/g, '');
                        const words = textContent.split(/\s+/);
                        const truncatedWords = words.slice(0, 15);
                        truncatedContent = truncatedWords.join(' ');
                        hasMore = words.length > 15;
                    }

                    return `
                        <div class="story-card">
                            <img src="${story.image}" alt="${story.title}" class="story-image">
                            <div class="story-content">
                                <h4 class="card-category">Travel</h4>
                                <h3 class="card-title">${story.title}</h3>
                                <p class="card-meta">${story.meta}</p>
                                <p class="card-excerpt">
                                    ${truncatedContent}${hasMore ? '...' : ''}
                                </p>
                                <a href="story.html?id=${story.id}" class="read-more-link">
                                    Read More
                                    <svg class="circle-svg" viewBox="0 0 70 36">
                                        <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    `;
                }).join('');
                storiesListContainer.innerHTML = storiesHTML;
            })
            .catch(error => console.error("Error fetching stories:", error));
    } else if (storyId) {
        // We are on an individual story page
        fetch('stories.json')
            .then(response => response.json())
            .then(data => {
                const story = data.stories.find(story => story.id === storyId);

                if (!story) {
                    console.error(`Story with ID '${storyId}' not found.`);
                    return;
                }

                document.querySelector('title[data-story-title]').textContent = story.title + " - Global Trekker";
                document.querySelector('[data-story-title]').textContent = story.title;
                document.querySelector('[data-story-meta]').textContent = story.meta;
                document.querySelector('[data-story-image]').src = story.image;
                document.querySelector('[data-story-content]').innerHTML = typeof story.content === 'string' ? story.content : story.content.join('');
            })
            .catch(error => console.error("Error fetching stories:", error));
    }
});
