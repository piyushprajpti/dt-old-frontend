let navButton = document.getElementById("nav-link-button");
let navList = document.getElementById("nav-list");

navButton.addEventListener("click", function() {

    let navListDisplay = window.getComputedStyle(navList).getPropertyValue("display");

    if (navListDisplay == 'none') {
        navList.style.display = "flex";
        navButton.style.backgroundColor = "#f1f1f1";
    } 
    
    else {
        navList.style.display = "none";
        navButton.style.backgroundColor = "#fff";
    }
});
