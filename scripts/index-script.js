
    // 2) css hover
    // 3) highlight active navlink

const itemImgs = document.querySelectorAll(".item-img");
let time = window.performance.timing;

document.addEventListener("DOMContentLoaded", function () {
    const imagePaths = [
        "assets/IMG_2419.png",
        "assets/IMG_2432.JPG",
        "assets/IMG_2722.PNG",
        "assets/IMG_2723.PNG"

    ];


    for (let i = 0; i < itemImgs.length; i++) {
        if (imagePaths[i]) {

            itemImgs[i].style.backgroundImage += `url(${imagePaths[i]})`;
        }
    }
});

const startTime = new Date().getTime();
window.addEventListener('load', function() {
    const endTime = new Date().getTime();

    const loadTime = endTime - startTime;
    let podval = document.querySelector('.podval')
    podval.textContent = 'Page loaded in: ' + loadTime;
    console.log(loadTime, endTime)
});
