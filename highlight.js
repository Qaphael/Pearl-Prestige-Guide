// Function to fetch and render all highlights (for the list page)
function loadHighlights() {
    fetch("highlights.json")
        .then(response => response.json())  // Parse the JSON response
        .then(data => {
            const highlightsList = document.querySelector('[data-highlights-list]');

            // Loop through the highlights and create a list item for each
            data.highlights.forEach(highlight => {
                const highlightElement = document.createElement("div");
                highlightElement.classList.add("highlight-item");

                const link = document.createElement("a");
                link.href = `highlight.html?id=${highlight.id}`;
                link.classList.add("highlight-link");

                link.innerHTML = `
                    <div class="highlight-thumbnail">
                        <img src="${highlight.main_image}" alt="${highlight.title}" class="highlight-image" />
                    </div>
                    <div class="highlight-info">
                        <h3 class="highlight-title">${highlight.title}</h3>
                        <p class="highlight-category">${highlight.category}</p>
                        <p class="highlight-preview">${highlight.content.substring(0, 100)}...</p>  <!-- Preview content -->
                    </div>
                `;

                highlightElement.appendChild(link);
                highlightsList.appendChild(highlightElement);
            });
        })
        .catch(error => {
            console.error("Error loading highlights data:", error);
        });
}

let comments = []; // Define comments as a global variable

// Function to fetch and render an individual highlight (for the detail page)
function loadHighlight() {
  const urlParams = new URLSearchParams(window.location.search);
  const highlightId = urlParams.get('id'); // Get the highlight ID from URL parameters

  if (!highlightId) {
    console.error('No highlight ID found in the URL');
    return;
  }

  fetch("highlights.json")
    .then(response => response.json())
    .then(data => {
      const highlight = data.highlights.find(h => h.id === parseInt(highlightId));

      if (!highlight) {
        console.error(`Highlight with ID ${highlightId} not found`);
        return;
      }

      // Render the individual highlight's content
      document.querySelector('[data-highlight-BrowserTitle]').textContent = highlight.title;
      document.querySelector('[data-highlight-title]').textContent = highlight.title;
      document.querySelector('[data-highlight-category]').textContent = highlight.category;
      document.querySelector('[data-highlight-description]').textContent = highlight.content;

      const profileImage = document.querySelector('[data-highlight-profile-image]');
      if (profileImage) {
        profileImage.src = highlight.main_image;
        profileImage.alt = highlight.title;
      }

      document.querySelector('[data-highlight-profile-name]').textContent = highlight.author.name;
      document.querySelector('[data-highlight-profile-location]').textContent = highlight.author.location;
      document.querySelector('[data-highlight-publish]').textContent = highlight.publish_date;

      const mainImage = document.querySelector('[data-highlight-main-image]');
      if (mainImage) {
        mainImage.src = highlight.main_image;
        mainImage.alt = highlight.title;
      }

      const contentContainer = document.querySelector('[data-highlight-content]');
      if (contentContainer) {
        contentContainer.innerHTML = highlight.content;
      }

      document.querySelector('[data-highlight-quote]').textContent = highlight.quote;

      // Load the gallery
      loadGallery(highlight);

      // Initialize the comment section with the comments from the JSON data
      comments = highlight.comments || []; // Assign comments to the global variable
      initializeCommentSection(comments);

      // Add event listeners for the comment section
      setupCommentSection();
    })
    .catch(error => {
      console.error("Error loading highlight details:", error);
    });
}

// Function to load the gallery
function loadGallery(highlight) {
  const galleryContainer = document.querySelector('[data-highlight-gallery]');

  // Ensure the element exists before modifying it
  if (!galleryContainer) {
    console.error("Gallery container not found");
    return;
  }

  // Clear any previous content
  galleryContainer.innerHTML = "";

  // Loop through the gallery array and create image elements
  highlight.gallery.forEach(imageUrl => {
    const imgElement = document.createElement("img");
    imgElement.src = imageUrl;
    imgElement.alt = "Gallery Image";
    imgElement.classList.add("gallery-image"); // Add styling class

    galleryContainer.appendChild(imgElement);
  });
}

// Function to initialize the comment section
function initializeCommentSection(comments) {
  const commentsContainer = document.getElementById('commentsContainer');
  commentsContainer.innerHTML = ''; // Clear existing comments

  if (comments && comments.length > 0) {
    comments.forEach(comment => {
      const commentElement = createCommentElement(comment);
      commentsContainer.appendChild(commentElement);

      if (comment.replies && comment.replies.length > 0) {
        const repliesContainer = document.createElement('div');
        repliesContainer.className = 'replies';
        comment.replies.forEach(reply => {
          const replyElement = createReplyElement(reply);
          repliesContainer.appendChild(replyElement);
        });
        commentElement.appendChild(repliesContainer);
      }
    });
  }
}

// Function to handle liking a comment or reply
function handleLike(commentId) {
  const comment = findCommentById(comments, commentId);
  if (comment) {
    // Increment the like count
    comment.likes = (comment.likes || 0) + 1;
    // Re-render the comment or reply
    renderComments();
  }
}

// Function to find a comment or reply by ID
function findCommentById(comments, commentId) {
  for (const comment of comments) {
    if (comment.id === commentId) {
      return comment;
    }
    if (comment.replies && comment.replies.length > 0) {
      const reply = comment.replies.find(reply => reply.id === commentId);
      if (reply) {
        return reply;
      }
    }
  }
  return null;
}

// Function to render comments
function renderComments() {
  const commentsContainer = document.getElementById('commentsContainer');
  commentsContainer.innerHTML = ''; // Clear existing comments

  if (comments && comments.length > 0) {
    comments.forEach(comment => {
      const commentElement = createCommentElement(comment);
      commentsContainer.appendChild(commentElement);

      if (comment.replies && comment.replies.length > 0) {
        const repliesContainer = document.createElement('div');
        repliesContainer.className = 'replies';
        comment.replies.forEach(reply => {
          const replyElement = createReplyElement(reply);
          repliesContainer.appendChild(replyElement);
        });
        commentElement.appendChild(repliesContainer);
      }
    });
  }
}

// Function to create a comment element
function createCommentElement(comment) {
  const commentElement = document.createElement('div');
  commentElement.className = 'comment';

  const header = document.createElement('div');
  header.className = 'comment-header';

  const userAvatar = document.createElement('img');
  userAvatar.src = comment.profile_image;
  userAvatar.alt = `${comment.name}'s avatar`;
  userAvatar.className = 'user-avatar';

  const userName = document.createElement('h3');
  userName.textContent = comment.name;

  const timestamp = document.createElement('span');
  timestamp.className = 'comment-timestamp';
  timestamp.textContent = formatTimestamp(comment.timestamp || new Date().toISOString());

  header.appendChild(userAvatar);
  header.appendChild(userName);
  header.appendChild(timestamp);

  const content = document.createElement('div');
  content.className = 'comment-content';
  content.textContent = comment.text;

  const actions = document.createElement('div');
  actions.className = 'comment-actions';

  const likeButton = document.createElement('button');
  likeButton.innerHTML = `<i class="fas fa-heart"></i> ${comment.likes || 0}`;
  likeButton.addEventListener('click', () => handleLike(comment.id));

  const replyButton = document.createElement('button');
  replyButton.innerHTML = `<i class="fas fa-reply"></i> Reply`;
  replyButton.addEventListener('click', () => openReplyBox(comment.id));

  actions.appendChild(likeButton);
  actions.appendChild(replyButton);

  commentElement.appendChild(header);
  commentElement.appendChild(content);
  commentElement.appendChild(actions);

  return commentElement;
}

// Function to create a reply element
function createReplyElement(reply) {
  const replyElement = document.createElement('div');
  replyElement.className = 'reply';

  const header = document.createElement('div');
  header.className = 'comment-header';

  const userAvatar = document.createElement('img');
  userAvatar.src = reply.profile_image;
  userAvatar.alt = `${reply.name}'s avatar`;
  userAvatar.className = 'user-avatar';

  const userName = document.createElement('h4');
  userName.textContent = reply.name;

  const timestamp = document.createElement('span');
  timestamp.className = 'comment-timestamp';
  timestamp.textContent = formatTimestamp(reply.timestamp || new Date().toISOString());

  header.appendChild(userAvatar);
  header.appendChild(userName);
  header.appendChild(timestamp);

  const content = document.createElement('div');
  content.className = 'comment-content';
  content.textContent = reply.text;

  const actions = document.createElement('div');
  actions.className = 'comment-actions';

  const likeButton = document.createElement('button');
  likeButton.innerHTML = `<i class="fas fa-heart"></i> ${reply.likes || 0}`;
  likeButton.addEventListener('click', () => handleLike(reply.id));

  actions.appendChild(likeButton);

  replyElement.appendChild(header);
  replyElement.appendChild(content);
  replyElement.appendChild(actions);

  return replyElement;
}

// Function to open a reply box
function openReplyBox(commentId) {
  const comment = findCommentById(comments, commentId);
  if (!comment) return;

  // Check if a reply box already exists
  const existingReplyBox = document.getElementById(`replyBox-${commentId}`);
  if (existingReplyBox) {
    existingReplyBox.remove(); // Remove the existing reply box
    return;
  }

  // Create the reply box
  const replyBox = document.createElement('div');
  replyBox.id = `replyBox-${commentId}`;
  replyBox.className = 'reply-box';

  const textarea = document.createElement('textarea');
  textarea.placeholder = 'Write a reply...';
  textarea.rows = 1;

  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';
  submitButton.addEventListener('click', () => handleReplySubmit(commentId, textarea));

  replyBox.appendChild(textarea);
  replyBox.appendChild(submitButton);

  // Insert the reply box below the comment
  const commentElement = document.querySelector(`[data-comment-id="${commentId}"]`);
  if (commentElement) {
    commentElement.appendChild(replyBox);
  }
}

// Function to handle reply submission
function handleReplySubmit(commentId, textarea) {
  const content = textarea.value.trim();
  if (content.length === 0) {
    alert('Reply cannot be empty');
    return;
  }

  const comment = findCommentById(comments, commentId);
  if (!comment) return;

  const newReply = {
    id: Date.now(), // Use a unique ID (e.g., timestamp)
    name: "Current User", // Replace with actual user data
    profile_image: "https://via.placeholder.com/50", // Replace with actual user image
    text: content,
    timestamp: new Date().toISOString(),
    likes: 0,
  };

  // Add the reply to the comment's replies array
  if (!comment.replies) {
    comment.replies = [];
  }
  comment.replies.push(newReply);

  // Re-render the comments
  renderComments();
}

// Function to format the timestamp
function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleString(); // Format as "MM/DD/YYYY, HH:MM:SS AM/PM"
}

// Function to set up the comment section (event listeners, etc.)
function setupCommentSection() {
  const commentTextarea = document.getElementById('commentTextarea');
  const submitCommentButton = document.getElementById('submitComment');
  const charCount = document.getElementById('charCount');
  const errorElement = document.getElementById('error');

  commentTextarea.addEventListener('input', () => {
    adjustTextareaHeight();
    updateCharCount();
  });

  submitCommentButton.addEventListener('click', handleSubmitComment);

  function adjustTextareaHeight() {
    commentTextarea.style.height = 'auto';
    commentTextarea.style.height = `${commentTextarea.scrollHeight}px`;
  }

  function updateCharCount() {
    const remaining = 500 - commentTextarea.value.length;
    charCount.textContent = `${remaining} characters remaining`;
  }

  function handleSubmitComment() {
    const content = commentTextarea.value.trim();
    if (content.length === 0) {
      errorElement.textContent = "Comment cannot be empty";
      return;
    }
    if (content.length > 500) {
      errorElement.textContent = "Comment must be less than 500 characters";
      return;
    }

    const newComment = {
      id: Date.now(), // Use a unique ID (e.g., timestamp)
      name: "Current User", // Replace with actual user data
      profile_image: "images/hero/Bwindi.jpg", // Replace with actual user image
      text: content,
      timestamp: new Date().toISOString(),
      likes: 0,
      replies: [],
    };

    // Add the new comment to the comments array
    comments.unshift(newComment);

    // Re-render the comments
    renderComments();

    // Clear the input
    commentTextarea.value = '';
    errorElement.textContent = '';
    updateCharCount();
  }
}

// Call the appropriate function based on the page
window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('id')) {
    // If there's an 'id' in the URL, it's the individual highlight page
    loadHighlight();
  } else {
    // Otherwise, it's the highlights list page
    loadHighlights();
  }
};