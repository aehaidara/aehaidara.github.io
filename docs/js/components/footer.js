class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
            <h1 classe="footer__title">Let's connect!</h1>
            <div class="footer__wrapper">
                <div class="footer__left-side">
                    <div class="footer__image-container">
                        <img src="./assets/images/home/footer-img.jpg" alt="" />
                    </div>
                </div>
                <div class="footer__text-and-btn footer__text-and-btn--hide-on-wide">
                    <p>
                        Show up for yourself and get started on your personal development 
                        journey by booking your free introduction call.
                    </p>
                    <a class="btn-transparent" href="https://dara-coaching.planway.com"
                        >Book your free call
                        <img src="./assets/svg/btn-arrow.svg" alt="" />
                    </a>
                </div>
                <div class="footer__contacts">
                    <div>
                        <p>
                            <a class="bold-text underline" href="https://hosnorup.dk/">Hos Norup</a> <br>
                            Roskildevej 46 <br>
                            2000 Frederiksberg
                        </p>
                    </div>
                    <div>
                        <p class="">contact@daracoaching.com</p>
                        <p>+45 93 93 55 38</p>
                        <p>CVR 38955462</p>
                    </div>
                    <div class="footer__logo">
                        <a href="./index.html">
                            <img
                                src="./assets/svg/logos/logo-white.svg"
                                alt="dara-coaching-logo"
                            />
                        </a>
                    </div>
                    <div class="footer__icons">
                        <a href="https://www.instagram.com/daracoaching/">
                            <img src="./assets/svg/instagram-icon.svg" alt="" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100086533623477">
                            <img src="./assets/svg/facebook-icon.svg" alt="" />
                        </a>
                        <a href="https://www.linkedin.com/company/dara-coaching/">
                            <img src="./assets/svg/linkedIn-icon.svg" alt="" />
                        </a>
                    </div>
                </div>
                <div class="footer__text-and-btn footer__text-and-btn--hide-on-mobile">
                    <p>
                        Show up for yourself and get started on your personal development 
                        journey by booking your free introduction call.
                    </p>
                    <a class="btn-transparent" href="https://dara-coaching.planway.com"
                        >Book your free call
                        <img src="./assets/svg/btn-arrow.svg" alt="" />
                    </a>
                </div>
            </div>

            <p class="footer__copywrite">
                

                <!-- Below is the link that users can use to open Preferences Center to change 
                their preferences. Do not modify the ID parameter. Place it where appropriate, 
                style it as needed. -->
                <a class="underline" href="./cookie-policy.html" id="open_preferences_center">Cookie</a>
                & <a class="underline" href="./privacy-policy.html" id="open_preferences_center">Privacy</a> Policies
                | <a class="underline" href="#" id="open_preferences_center">Update cookies preferences</a>
                <br>
                Copyright &copy; <span id="copyrightYear"></span> DARA
                Coaching
            </p>

      `;
    }
}

// DEFAULT - NAVIGATION

customElements.define("main-footer", Footer);
