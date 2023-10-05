// // My services
const myServicesItems = document.querySelectorAll(".my-services__item-wrapper");

myServicesItems.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () => {
        item.classList.toggle("open");
        header.classList.toggle("my-services__item--active");
        let description = item.querySelector(".my-services__description");
        if (item.classList.contains("open")) {
            description.style.height = `${description.scrollHeight}px`;

            item.querySelector("i").classList.replace(
                "fa-arrow-down",
                "fa-arrow-up"
            );
        } else {
            description.style.height = "0px";

            item.querySelector("i").classList.replace(
                "fa-arrow-up",
                "fa-arrow-down"
            );
        }
        removeOpen(index);
    });
});

// // FAQ
const faqQuestions = document.querySelectorAll(".faq__item-wrapper");

faqQuestions.forEach((item, index) => {
    let header = item.querySelector("header");

    header.addEventListener("click", () => {
        item.classList.toggle("open");
        header.classList.toggle("faq__item--active");
        let description = item.querySelector(".faq__description");
        if (item.classList.contains("open")) {
            description.style.height = `${description.scrollHeight}px`;

            item.querySelector("i").classList.replace(
                "fa-plus",
                "fa-minus"
            );
        } else {
            description.style.height = "0px";

            item.querySelector("i").classList.replace(
                "fa-minus",
                "fa-plus",
            );
        }
        removeOpenQuestions(index);
    });
});

function removeOpen(index1) {
    myServicesItems.forEach((item2, index2) => {
        let header = item2.querySelector("header");

        if (index1 !== index2) {
            item2.classList.remove("open");

            let des = item2.querySelector(".my-services__description");
            des.style.height = "0px";
            item2
                .querySelector("i")
                .classList.replace("fa-arrow-up", "fa-arrow-down");

            header.classList.remove("my-services__item--active");
        }
    });
}

function removeOpenQuestions(index1) {
    faqQuestions.forEach((item2, index2) => {
        let header = item2.querySelector("header");

        if (index1 !== index2) {
            item2.classList.remove("open");

            let des = item2.querySelector(".faq__description");
            des.style.height = "0px";
            item2
                .querySelector("i")
                .classList.replace("fa-minus", "fa-plus");

            header.classList.remove("faq__item--active");
        }
    });
}

/* @@@@@@@@@@@@@@@ */
// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    // loop: true,
    // autoplay: {
    //     delay: 2000,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Copywright
// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('copyrightYear').textContent = `${currentYear}`;