let canChangeImage = true;

document.addEventListener("DOMContentLoaded", () => {
    const galleryWrapper = document.getElementById("gallery-wrapper");
    const gallery = document.getElementById("gallery");
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");

    /** @type {HTMLImageElement[]} */
    const imageElements = [];
    let autoPlayId;
    let currentIndex = 1;

    for (let i = 0; i < images.length; i++) {
        const image = images[i];

        const imageElement = document.createElement("div");
        imageElement.classList = "gallery-image";

        if (i == 0) {
            imageElement.classList.add("left-image");
        }
        else if (i == 1) {
            imageElement.classList.add("front-image");
            imageElement.dataset.active = true;

            imageElement.addEventListener("click", goToProtfolio);
        }
        else if (i == 2) {
            imageElement.classList.add("right-image");
        }
        else {
            imageElement.classList.add("back-image");
        }

        const img = document.createElement("img");
        img.classList = "gallery-image-img";
        img.src = image.src;
        img.alt = image.alt;

        imageElement.appendChild(img)

        const title = document.createElement("div");
        title.classList = "image-title roboto-800";
        title.innerHTML = image.title;
        title.style.color = image.textColor;
        
        imageElement.appendChild(title);

        const category = document.createElement("div");
        category.classList = "image-category roboto-600";
        category.innerHTML = image.category;
        category.style.color = image.textColor;

        imageElement.appendChild(category);

        gallery.appendChild(imageElement);

        imageElements.push(imageElement);

        if (i === 3) {
            break;
        }
    }

    autoPlayId = setInterval(showNext, 4000);

    galleryWrapper.addEventListener("mouseenter", (e) => {
        clearInterval(autoPlayId);
    });

    galleryWrapper.addEventListener("mouseleave", (e) => {
        autoPlayId = setInterval(showNext, 4000);
    });

    previousButton.addEventListener("click", () => {
        if (!canChangeImage) {
            return;
        }
        canChangeImage = false;


        let imageToGoLeft = new Image();
        let imageToGoFront = new Image();
        let imageToGoRight = imageElements[currentIndex];
        let imageToGoBehind = new Image();

        if (currentIndex - 2 == -1) {
            imageToGoLeft = imageElements[imageElements.length - 1];
        }
        else if (currentIndex - 2 == -2) {
            imageToGoLeft = imageElements[imageElements.length - 2];
        }
        else {
            imageToGoLeft = imageElements[currentIndex - 2];
        }

        if (currentIndex - 1 <= -1) {
            imageToGoFront = imageElements[imageElements.length - 1];
        }
        else {
            imageToGoFront = imageElements[currentIndex - 1];
        }
        
        if (currentIndex + 1 >= imageElements.length) {
            imageToGoBehind = imageElements[0];
        }
        else {
            imageToGoBehind = imageElements[currentIndex + 1];
        }

        imageToGoFront.style.animationName = "left-to-front";
        imageToGoFront.classList = "gallery-image front-image"

        imageToGoRight.style.animationName = "front-to-right";
        imageToGoRight.classList = "gallery-image right-image"

        imageToGoBehind.style.animationName = "right-to-back";
        imageToGoBehind.classList = "gallery-image back-image"

        imageToGoLeft.style.animationName = "back-to-left";
        imageToGoLeft.classList = "gallery-image left-image"
        
        imageToGoFront.dataset.active = true;
        imageToGoRight.dataset.active = false;

        imageToGoFront.addEventListener("click", goToProtfolio);
        imageToGoRight.removeEventListener("click", goToProtfolio)

        if (currentIndex - 1 <= -1) {
            currentIndex = imageElements.length - 1;
        }
        else {
            currentIndex = currentIndex - 1;
        }
        
        const computedImg = window.getComputedStyle(imageToGoFront);
        const delay = computedImg.animationDuration;
        const delayInMillisec = parseFloat(delay) * 1000;
        setTimeout(() => {canChangeImage = true;}, delayInMillisec);
    })

    nextButton.addEventListener("click", () => {
        showNext();
    })

    function showNext() {
        if (!canChangeImage) {
            return;
        }
        canChangeImage = false;


        let imageToGoRight = new Image();
        let imageToGoFront = new Image();
        let imageToGoLeft = imageElements[currentIndex];
        let imageToGoBehind = new Image();

        if (currentIndex + 2 == imageElements.length) {
            imageToGoRight = imageElements[0];
        }
        else if (currentIndex + 2 == imageElements.length + 1) {
            imageToGoRight = imageElements[1];
        }
        else {
            imageToGoRight = imageElements[currentIndex + 2];
        }

        if (currentIndex + 1 >= imageElements.length) {
            imageToGoFront = imageElements[0];
        }
        else {
            imageToGoFront = imageElements[currentIndex + 1];
        }
        
        if (currentIndex - 1 <= -1) {
            imageToGoBehind = imageElements[imageElements.length - 1];
        }
        else {
            imageToGoBehind = imageElements[currentIndex - 1];
        }

        imageToGoFront.style.animationName = "right-to-front";
        imageToGoFront.classList = "gallery-image front-image"

        imageToGoRight.style.animationName = "back-to-right";
        imageToGoRight.classList = "gallery-image right-image"

        imageToGoBehind.style.animationName = "left-to-back";
        imageToGoBehind.classList = "gallery-image back-image"

        imageToGoLeft.style.animationName = "front-to-left";
        imageToGoLeft.classList = "gallery-image left-image"
        
        imageToGoFront.dataset.active = true;
        imageToGoLeft.dataset.active = false;

        imageToGoFront.addEventListener("click", goToProtfolio);
        imageToGoLeft.removeEventListener("click", goToProtfolio)

        if (currentIndex + 1 >= imageElements.length) {
            currentIndex = 0;
        }
        else {
            currentIndex = currentIndex + 1;
        }
        const computedImg = window.getComputedStyle(imageToGoFront);
        const delay = computedImg.animationDuration;
        const delayInMillisec = parseFloat(delay) * 1000;
        setTimeout(() => {canChangeImage = true;}, delayInMillisec);
    }

    function goToProtfolio() {
        window.location.assign(`./portfolio_${selectedLanguage}.html`)
    }
})