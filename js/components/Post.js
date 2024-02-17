import { dummyProject } from "../../constants/dummyProject.js";

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("id");

  const post = dummyProject.find((post) => post.id === postId);
  if (post) {
    document.title = post.title; // Set the document title dynamically
    const blogPostContainer = document.getElementById("project");
    const postElement = createPostElement(post);
    blogPostContainer.appendChild(postElement);

    console.log(post, postId);
  } else {
    console.error("Error: Blog post not found");
  }
});

function createPostElement(post) {
  const postElement = document.createElement("div");
  postElement.classList.add("blog-post");

  postElement.innerHTML = `
  <div class="featured-image">
    <img src="../${post.featuredImage}"/>
  </div>
  <section>
    <h1>${post.title}</h1>
    <hr/>
  </section>
  `;

  const projectContent = document.createElement("div");
  projectContent.classList.add("content");

  // Loop through each content item
  post.content.forEach((contentItem) => {
    // Create an element based on the content type
    let contentElement;
    if (contentItem.type === "text") {
      contentElement = document.createElement("p");
      contentElement.textContent = contentItem.value;
    } else if (contentItem.type === "image") {
      contentElement = document.createElement("img");
      contentElement.src = contentItem.value;
    } else if (contentItem.type === "video") {
      contentElement = document.createElement("video");
      contentElement.src = "../" + contentItem.value;
      contentElement.muted = true;
      contentElement.loop = true;
      contentElement.autoplay = true;
      contentElement.playsInline = true;
    } else {
      // Handle unknown content type
      console.error("Unknown content type:", contentItem.type);
      return; // Skip this content item
    }

    // Append the content element to the post element
    projectContent.appendChild(contentElement);

    console.log(contentElement);
  });

  postElement.appendChild(projectContent);

  return postElement;
}
