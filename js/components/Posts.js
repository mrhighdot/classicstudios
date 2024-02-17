import { dummyProject } from "../../constants/dummyProject.js";

document.addEventListener("DOMContentLoaded", function () {
  const blogPostsContainer = document.getElementById("project-list");
  dummyProject.forEach((post) => {
    const postElement = createPostElement(post);
    postElement.addEventListener("click", function () {
      redirectToProject(post.id);
    });
    blogPostsContainer.appendChild(postElement);
  });
});

function createPostElement(post) {
  const postElement = document.createElement("div");
  postElement.classList.add("service-list-item");
  postElement.dataset.postId = post.id; // Store post ID as a data attribute

  postElement.innerHTML = `
    <div class="project-header">
        <div class="img-holder">
            <img src="../${post.featuredImage}"/>
        </div>
        <div class="project-cat">
            <h4>${post.title}</h4>
            <span>${post.id}</span>
        </div>
  </div>
  <div class="project-copy">
    <p>
      ${post.description}
    </p>
  </div>
    `;

  return postElement;
}

function redirectToProject(postId) {
  window.location.href = `extras/project.html?id=${postId}`; // Redirect to project.html with post ID as parameter
}
