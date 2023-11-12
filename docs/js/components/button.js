const _BUTTON_BACKGROUND_BROWN = "btn-brown";
const _BUTTON_BACKGROUND_TRANSPARENT = "btn-transparent";

class CustomButton extends HTMLElement {
    connectedCallback() {
        const path = this.getAttribute("path") || "";
        const label = this.getAttribute("label") || "Button";
        const className = this.getAttribute("className");
        const isArrow = this.getAttribute("isArrow");
        const isArrowDown = this.getAttribute("isArrowDown");
        const background = this.getAttribute("background") || _BUTTON_BACKGROUND_BROWN;

        // Check if isArrow is explicitly set to "false" (as a string)
        const hideArrow = isArrow === "false";
        const arrowDown = isArrowDown ? "btn-arrow-down" : "";

        // Use a ternary operator to conditionally include the <img> element
        const arrowIcon = hideArrow
            ? ""
            : `<img class="${arrowDown}" src="./assets/svg/btn-arrow.svg" alt="button arrow icon" />`;

        this.innerHTML = `

            <a class="${className} ${background}" href="${path}"
                >${label}
                ${arrowIcon}
            </a> 

        `;
    }
}

customElements.define("custom-button", CustomButton);
