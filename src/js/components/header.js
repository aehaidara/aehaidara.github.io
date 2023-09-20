const currentPage = window.location.pathname;
console.log(currentPage);

/** LOGO */
const _LOGO_DEFAULT = "./assets/svg/logos/logo-default.svg";
const _LOGO_WHITE = "./assets/svg/logos/logo-white.svg";

/** NAVE-ITEMS */
const _NAV_COLOR_BROWN = "nav-color-brown";
const _NAV_COLOR_WHTIE = "nav-color-white";

/** NAV BACKGROUND COLOR */
const _NAV_BACKGROUND_COLOR = "nav-bg-color-brown";

let navBackgroundColor = "";
let navColor = "";
let logo = "";

if (currentPage === "/" || currentPage === "/index.html") {
    logo = _LOGO_DEFAULT;
    navColor = _NAV_COLOR_BROWN;
} else {
    logo = _LOGO_WHITE;
    navColor = _NAV_COLOR_WHTIE;
    if (currentPage === "/meet-your-coach.html") {
        navBackgroundColor = _NAV_BACKGROUND_COLOR;
    }
}


class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

      <nav id="home-humburger" class="default-humburger ${navBackgroundColor}">
          <div class="logo">
              <img
                  src="${logo}"
                  alt="dara-coaching-logo"
              />
          </div>
          <div role="navigation" class="navigation">
              <div id="menuToggle">
                  <input type="checkbox" />
                  <span></span>
                  <span></span>
                  <span></span>
                  <ul id="menu">
                      <a class="menu-item" href="#"><li>Home</li></a>
                      <a class="menu-item" href="#"><li>About</li></a>
                      <a class="menu-item" href="#"><li>Prise</li></a>
                      <a class="menu-item" href="#"><li>Services</li></a>
                      <a class="menu-item" href="#"><li>Business</li></a>
                      <a class="menu-item" href="#"><li>Contact</li></a>
                      <a class="menu-item" href="#"><li>Booking</li></a>
                  </ul>
              </div>
          </div>
          <div class="navigation-bar-menu ${navColor}" id="home-navigation-bar">
              <a href="./index.html">Home</a>
              <a href="">Services</a>
              <a href="./meet-your-coach.html">About</a>
              <a href="">Business</a>
              <a href="">Prise</a>
              <a href="">Booking</a>
              <a href="">Contact</a>
          </div>
      </nav>
      `;
    }
}

customElements.define("main-nav", Header);
