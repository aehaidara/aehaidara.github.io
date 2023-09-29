const _BUTTON_BACKGROUND_BROWN = 'btn-brown';
const _BUTTON_BACKGROUND_TRANSPARENT = 'btn-transparent';


class CustomButton extends HTMLElement {

    connectedCallback() {
        const path = this.getAttribute("path") || "#";
        const label = this.getAttribute("label") || "Button";
        const className = this.getAttribute("className");
        const background = this.getAttribute("background") || _BUTTON_BACKGROUND_BROWN;

        this.innerHTML = `

            <a class="${className} ${background}" href="${path}"
                >${label}
                <img src="./assets/svg/btn-arrow.svg" alt="" />
            </a> 

        `;
    }
}

customElements.define("custom-button", CustomButton);