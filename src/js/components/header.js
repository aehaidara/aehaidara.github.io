const currentPage = window.location.pathname;
// console.log(currentPage);

/** LOGO */
const _LOGO_DEFAULT = "./assets/svg/logos/logo-default.svg";
const _LOGO_WHITE = "./assets/svg/logos/logo-white.svg";

/** NAVE-ITEMS */
const _NAV_COLOR_BROWN = "nav-color-brown";
const _NAV_COLOR_WHTIE = "nav-color-white";

/** NAV BACKGROUND COLOR */
const _NAV_BACKGROUND_COLOR_BROWN = "nav-bg-color-brown";
const _NAV_BACKGROUND_COLOR_GREEN = "nav-bg-color-green";
const _NAV_BACKGROUND_COLOR_DARK_BROWN = "nav-bg-color-dark-brown";

/** HAMBURGER COLOR */
const _HAMBURGER_COLOR_BROWN = "hamburger-brown";
const _HAMBURGER_COLOR_WHITE = "hamburger-white";

let navBackgroundColor = "";
let navTextColor = "";
let hamburgerIconColor = "";
let logo = "";

if (currentPage === "/" || currentPage === "/index.html") {
    logo = _LOGO_DEFAULT;
    navTextColor = _NAV_COLOR_BROWN;
    hamburgerIconColor = _HAMBURGER_COLOR_BROWN;
} else {
    logo = _LOGO_WHITE;
    navTextColor = _NAV_COLOR_WHTIE;
    hamburgerIconColor = _HAMBURGER_COLOR_WHITE;
    if (
        currentPage === "/meet-your-coach.html" ||
        currentPage === "/prices.html" ||
        currentPage === "/about-dara-coaching.html"
    ) {
        navBackgroundColor = _NAV_BACKGROUND_COLOR_BROWN;
    } else if (
        currentPage === "/contact.html" ||
        currentPage === "/for-businesses.html"
    ) {
        navBackgroundColor = _NAV_BACKGROUND_COLOR_GREEN;
    } else if (currentPage === "/for-individuals.html") {
        navBackgroundColor = _NAV_BACKGROUND_COLOR_DARK_BROWN;
    }
}

class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

      <nav id="hamburger" class="${navBackgroundColor}">
          <div class="logo">
            <a href="./index.html">
              <img
                  src="${logo}"
                  alt="dara-coaching-logo"
              />
            </a>
          </div>
          <div role="navigation" class="navigation">
              <div class="${hamburgerIconColor}" id="menuToggle">
                  <input type="checkbox" />
                  <span></span>
                  <span></span>
                  <span></span>
                  <ul id="menu">
                      <a class="menu-item" href="/">
                        <li>Home</li>
                      </a>
                      <a class="menu-item" href="./for-individuals.html">
                        <li>For Individuals</li>
                      </a>
                      <a class="menu-item" href="./for-businesses.html">
                        <li>For Businesses</li>
                      </a>
                      <a class="menu-item" href="./about-dara-coaching.html">
                        <li>About Dara Coaching</li>
                      </a>
                      <a class="menu-item" href="./meet-your-coach.html">
                        <li>Meet Your Coach</li>
                      </a>
                      <a class="menu-item" href="./prices.html">
                        <li>Prices</li>
                      </a>
                      <a class="menu-item" href="./contact.html">
                        <li>Contact</li>
                      </a>
                      <a class="menu-item" href="https://dara-coaching.planway.com/">
                        <li>Booking</li>
                      </a>
                  </ul>
              </div>
          </div>
          <div class="navigation-bar-menu ${navTextColor}" id="navigation-items">
              <a href="./index.html">Home</a>
              <div class="nav-with-dropdown">
                <a href="#">Services</a>
                <div class="dropdown">
                    <a href="./for-individuals.html">For Individuals</a>
                    <a href="./for-businesses.html">For Businesses</a>
                </div>
              </div>
              <div class="nav-with-dropdown">
                <a href="#">About</a>
                <div class="dropdown">
                    <a href="./about-dara-coaching.html">About DARA Coaching</a>
                    <a href="./meet-your-coach.html">Meet Your Coach</a>
                </div>
              </div>
              <a href="./prices.html">Prices</a>
              <a href="./contact.html">Contact</a>
              <a href="https://dara-coaching.planway.com">Booking</a>
          </div>
      </nav>
      `;
    }
}

customElements.define("main-nav", Header);
