class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<nav>
      <div class="logo-container">
        <img src="../../assets/icons/brand/logo_white.png" class="logo" />
      </div>
      <div class="nav-list-container">
        <div id="menuIconContainer">
          <button><span id="menuIcon">&#9776;</span></button>
        </div>

        <ul id="nav-list">
          <li><a href="index.html">Home</a></li>
          <li><a href="store.html">Store</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
    </nav>`;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer>
    <span>Copyright © Classic Studios | 2024</span>
      </footer>`;
  }
}

customElements.define("main-header", Header);
customElements.define("main-footer", Footer);

// Toggle navbar items visibility when menu icon is clicked
document.getElementById("menuIcon").addEventListener("click", function () {
  var navbar = document.getElementById("nav-list");
  navbar.querySelector("li").classList.toggle("show");
});
