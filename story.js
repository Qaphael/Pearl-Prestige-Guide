document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const storyId = urlParams.get("id");
  const storiesListContainer = document.querySelector("[data-stories-list]");

  if (storiesListContainer) {
    // We are on the stories list page
    fetch("stories.json")
      .then((response) => response.json())
      .then((data) => {
        const storiesHTML = data.stories
          .map((story) => {
            let truncatedContent = "";
            let hasMore = false;
            if (typeof story.content === "string") {
              const textContent = story.content.replace(/<[^>]*>/g, "");
              const words = textContent.split(/\s+/);
              const truncatedWords = words.slice(0, 15);
              truncatedContent = truncatedWords.join(" ");
              hasMore = words.length > 15;
            } else if (
              Array.isArray(story.content) &&
              story.content.length > 0
            ) {
              const textContent = story.content[0].replace(/<[^>]*>/g, "");
              const words = textContent.split(/\s+/);
              const truncatedWords = words.slice(0, 15);
              truncatedContent = truncatedWords.join(" ");
              hasMore = words.length > 15;
            }

            return `       
                <article class="story-card">
                <img
                  src="${story.image}"
                  alt="${story.title}"
                  class="news-image"
                />
                <div class="news-content">
                  <span class="card-category">${story.category}</span>
                  <p class="card-meta">${story.meta}</p>
                  <h2 class="card-title">${story.title}</h2>
                  <p class="card-excerpt">
                  ${truncatedContent}${hasMore ? "..." : ""}
                  </p>
                  <div class="news-actions">
                    <a href="news-detail.html?id=${
                      story.id
                    }" class="read-more">Read more</a>
                    <div class="action-buttons">
                      <button class="action-button">
                        <i class="fas fa-share-alt"></i>
                      </button>
                      <button class="action-button">
                        <i class="fas fa-heart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </article>`;
          })
          .join("");
        storiesListContainer.innerHTML = storiesHTML;
      })
      .catch((error) => console.error("Error fetching stories:", error));
  } else if (storyId) {
    // We are on an individual story page
    fetch("stories.json")
      .then((response) => response.json())
      .then((data) => {
        const story = data.stories.find((story) => story.id === storyId);

        if (!story) {
          console.error(`Story with ID '${storyId}' not found.`);
          return;
        }

        document.querySelector("[title-data-story-title]").textContent = story.title + " - Pearl Prestige Guide";
        document.querySelector("[data-story-title]").textContent = story.title;
        document.querySelector("[data-story-category]").textContent = story.category;
        document.querySelector("[data-story-meta]").textContent = story.meta;
        document.querySelector("[data-story-image]").src = story.image;
        document.querySelector("[data-story-blogtitle]").textContent = story.blogtitle;
        document.querySelector("[data-story-content]").innerHTML =
        typeof story.content === "string"
        ? story.content
        : story.content.join("");
        document.querySelector("[data-story-blogSubtitle]").textContent = story.blogSubtitle;
        document.querySelector("[data-story-content-two]").innerHTML =
        typeof story.contentTwo === "string"
          ? story.contentTwo
          : story.contentTwo.join("");
      })
      .catch((error) => console.error("Error fetching stories:", error));
  }
});
