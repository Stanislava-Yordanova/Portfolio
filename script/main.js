let selectedLanguage;

document.addEventListener("addLogoAndMenuListeners", (e) => {
    const headerLogo = document.getElementById("header-logo");
    const mainMenu = document.getElementById("main-menu-label");
    const mainMenuSVG =  mainMenu.children[0];

    if (e.params) {
    headerLogo.addEventListener("mouseenter", (e) => setElementColor(headerLogo, "fill", "#BBBBBB", "#4c4c4c", params.ranges.logo, params.details));
    headerLogo.addEventListener("mouseleave", (e) => setElementColor(headerLogo, "fill", "#fff", "#242730", params.ranges.logo));

    mainMenuSVG.addEventListener("mouseenter", (e) => setElementColor(mainMenuSVG, "stroke", "#BBBBBB", "#4c4c4c", params.ranges.menu, params.details));
    mainMenuSVG.addEventListener("mouseleave", (e) => setElementColor(mainMenuSVG, "stroke", "#fff", "#242730", params.ranges.menu, params.details));

    }
    else {
        headerLogo.addEventListener("mouseenter", (e) => setElementColor(headerLogo, "fill", "#BBBBBB"));
        headerLogo.addEventListener("mouseleave", (e) => setElementColor(headerLogo, "fill", "#fff"));
    
        mainMenuSVG.addEventListener("mouseenter", (e) => setElementColor(mainMenuSVG, "stroke", "#BBBBBB"));
        mainMenuSVG.addEventListener("mouseleave", (e) => setElementColor(mainMenuSVG, "stroke", "#fff"));
    }
})

window.addEventListener("DOMContentLoaded", (e) => {
    const icons = document.getElementsByClassName("icon");
    const copyTexts = document.getElementsByClassName("copy-text");
    const slideshowButtons = document.getElementsByClassName("slideshow-button");
    const changeLanguage = document.getElementById("change-language");
    selectedLanguage = changeLanguage.children[0].textContent;
    selectedLanguage = selectedLanguage.toLocaleLowerCase();
    
    for (const copyText of copyTexts) {
        copyText.addEventListener("click", CopyToClipboard);
    }

    changeProp(icons, ["src"], "defaultSrc", "hoverSrc");
    changeProp(slideshowButtons, ["style", "opacity"], "defaultOpacity", "hoverOpacity");
    
        document.addEventListener("updateButtonListeners", () => {
            changeProp(slideshowButtons, ["style", "opacity"], "defaultOpacity", "hoverOpacity");
        });

    async function CopyToClipboard(e){
        const textToCopy = e.target.dataset.copy;

        try {
            await navigator.clipboard.writeText(textToCopy);
        } catch (err) {
            console.error('Failed to write to clipboard:', err);
        }
    }
});

function changeProp(elements, props, defaultData, hoverData) {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        
        element.addEventListener("mouseenter", (e) => {
            setProp(e.target, props, e.target.dataset[hoverData])
        })

        element.addEventListener("mouseout", (e) => {
            setProp(e.target, props, e.target.dataset[defaultData])
        })
    }
}

function setProp(element, props, value) {
    let targetProp = element;

    for (let i = 0; i < props.length - 1; i++) {
        const prop = props[i];
        targetProp = targetProp[prop];
    }

    targetProp[props[props.length - 1]] = value;
}

function setElementColor(element, propToSet, defaultColor, nonDefaultColor, ranges, details) {
    if (ranges) {
        if (elementShouldChangeColor(ranges, details) && details.isMenuOpen === false) {
            element.style[propToSet] = nonDefaultColor;
        }
        else {
            element.style[propToSet] = defaultColor;
        }
    }
    else {
        element.style[propToSet] = defaultColor;
    }
}

function elementShouldChangeColor(ranges, details) {
    const screenWidth = window.innerWidth;
    for (const range of ranges) {
        if (details.scrollTop >= range.top && screenWidth >= range.width) {
            return true;
        }
    }

    return false;
}