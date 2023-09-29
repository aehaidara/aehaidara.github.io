
// price - currency toggle
const krButton = document.getElementById("kr-button");
const eurButton = document.getElementById("eur-button");
const prices = document.querySelectorAll(".price");

krButton.addEventListener("click", () => {
    krButton.classList.add("active");
    eurButton.classList.remove("active");

    prices.forEach((price) => {
        const krValue = price.getAttribute("data-kr");
        const onlinePart = price.querySelector("span").textContent.includes(" / Online") ? " / Online" : "";
        price.innerHTML = `${krValue}<span>kr${onlinePart}</span>`;
    });
});

eurButton.addEventListener("click", () => {
    eurButton.classList.add("active");
    krButton.classList.remove("active");

    prices.forEach((price) => {
        const eurValue = price.getAttribute("data-eur");
        const onlinePart = price.querySelector("span").textContent.includes(" / Online") ? " / Online" : "";
        price.innerHTML = `${eurValue}<span>€${onlinePart}</span>`;
    });
});