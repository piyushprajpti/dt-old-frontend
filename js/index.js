let popupContainer = document.getElementById("contact-us-popup-container");
let contactButton = document.getElementById("primary-action");

let popupHideButton = document.getElementById("popup-hide-button");

contactButton.addEventListener("click", function () {
    popupContainer.style.display = "flex";
})

popupHideButton.addEventListener("click", function () {
    popupContainer.style.display = "none";  
})
