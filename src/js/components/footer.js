class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
            <h1>Get in touch</h1>

            <div class="footer__wrapper">
                <div class="footer__left-side">
                    <div class="footer__image-container">
                        <img src="./assets/images/home/footer-img.jpg" alt="" />
                    </div>
                    <div class="footer__text-and-btn">
                        <p>
                            It all starts with a conversatin, don't hesitate
                            to reach out
                        </p>
                        <a class="btn-transparent" href="#"
                            >Booking
                            <img src="./assets/svg/btn-arrow.svg" alt="" />
                        </a>
                    </div>
                </div>

                <div class="footer__contacts">
                    <div class="footer__logo">
                        <img
                            src="./assets/svg/logos/logo-white.svg"
                            alt="dara-coaching-logo"
                        />
                    </div>
                    <div>
                        <p class="">contact@daracoaching.com</p>
                        <p>+45 93 93 55 38</p>
                        <p>CVR 38955462</p>
                    </div>
                    <div class="footer__icons">
                        <img src="./assets/svg/instagram-icon.svg" alt="" />
                        <img src="./assets/svg/facebook-icon.svg" alt="" />
                        <img src="./assets/svg/linkedin-icon.svg" alt="" />
                    </div>
                </div>
            </div>

            <p class="footer__copywrite">
                Copyright &copy; <span id="copyrightYear"></span> DARA
                Coaching
            </p>

      `;
    }
}

// DEFAULT - NAVIGATION

customElements.define("main-footer", Footer);
