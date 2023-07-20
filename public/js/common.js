let navButton = document.getElementById("nav-link-button");
let navList = document.getElementById("nav-list");
let bodyBackground = document.getElementById("background-container");

navButton.addEventListener("click", function () {

    let navListDisplay = window.getComputedStyle(navList).getPropertyValue("display");

    if (navListDisplay == 'none') {
        navList.style.display = "flex";
        navButton.style.backgroundColor = "#f1f1f1";
        bodyBackground.style.display = "block";
    }

    else {
        navList.style.display = "none";
        navButton.style.backgroundColor = "#fff";
        bodyBackground.style.display = "none";
    }
});

bodyBackground.addEventListener("click", () => {
    if ( bodyBackground.style.display == "block" ) {
        navList.style.display = "none";
        navButton.style.backgroundColor = "#fff";
        bodyBackground.style.display = "none";
        }
});