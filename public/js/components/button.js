const _BUTTON_BACKGROUND_BROWN = 'btn-brown';
const _BUTTON_BACKGROUND_TRANSPARENT = 'btn-transparent';


class CustomButton extends HTMLElement {

    connectedCallback() {
        const path = this.getAttribute("path") || "";
        const label = this.getAttribute("label") || "Button";
        const className = this.getAttribute("className");
        const isArrow = this.getAttribute("isArrow");
        const background = this.getAttribute("background") || _BUTTON_BACKGROUND_BROWN;

       // Check if isArrow is explicitly set to "false" (as a string)
       const hideArrow = isArrow === "false";

       // Use a ternary operator to conditionally include the <img> element
       const imgElement = hideArrow ? '' : '<img src="./assets/svg/btn-arrow.svg" alt="" />';

        this.innerHTML = `

            <a class="${className} ${background}" href="${path}"
                >${label}
                ${imgElement}
            </a> 

        `;
    }
}

customElements.define("custom-button", CustomButton);