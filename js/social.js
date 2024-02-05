
let ctalinkBox = document.querySelector(".ctalink");
let phonectaBtn = document.querySelector(".phone-ctaBtn");
let mapctaBtn = document.querySelector(".map-ctaBtn");
let emailctaBtn = document.querySelector(".email-ctaBtn")

let isOpen = false;

ctalinkBox.addEventListener("click", () => {
    isOpen = !isOpen; // Toggle the isOpen variable

    if (isOpen) {
        phonectaBtn .classList.add("show-phone-ctaBtn");
        mapctaBtn.classList.add("show-map-ctaBtn");
        emailctaBtn.classList.add("show-email-ctaBtn");
        
    } else {
        phonectaBtn. classList.remove("show-phone-ctaBtn");
        mapctaBtn.classList.remove("show-map-ctaBtn");
        emailctaBtn.classList.remove("show-email-ctaBtn");
        

    }
});

