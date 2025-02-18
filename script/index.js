const MAIN_MENU_TO_BLACK = [{top: 580, width: 1440}, {top: 610, width: 1380}, {top: 675, width: 1270}, 
                            {top: 685, width: 1220}, {top: 710, width: 1170}, {top: 725, width: 1030}
];
const HEADER_LOGO_TO_BLACK = [{top: 680, width: 1030}];

//for phone
const MOON_RANGES = [{endHeight: 950, stopPosition: 1270, scaleValue: 1200}, {startHeight: 950, endHeight: 900, stopPosition: 1300, scaleValue: 1250},
                    {startHeight: 900, endHeight: 850, stopPosition: 1270, scaleValue: 1200}, {startHeight: 950, endHeight: 900, stopPosition: 1300, scaleValue: 1250},
];

document.addEventListener("DOMContentLoaded", (e) => {
    const body = document.getElementsByTagName("body")[0];
    const headerLogo = document.getElementById("header-logo");
    const mainMenuCheckbox = document.getElementById("main-menu-input");
    const mainMenu = document.getElementById("main-menu-label");
    const mainMenuSVG =  mainMenu.children[0];
    const moon = document.getElementById("moon");

    const shouldShowContacts = localStorage.getItem("show contacts")

    if (shouldShowContacts) {
        location.assign("#footer");
        localStorage.removeItem("show contacts");
    }

    const addHeaderEventListenrs = new CustomEvent("addLogoAndMenuListeners", {detail : {params: {ranges: {logo: HEADER_LOGO_TO_BLACK, menu: MAIN_MENU_TO_BLACK}, details: {isMenuOpen: mainMenuCheckbox.checked, scrollTop: body.scrollTop}}}})
    document.dispatchEvent(addHeaderEventListenrs);

    mainMenuCheckbox.addEventListener("change", (e) => {
        if (mainMenuCheckbox.checked === true) {
            headerLogo.style.fill = "#fff";
            mainMenuSVG.style.stroke = "#fff";
        }
        else {
            setElementColor(headerLogo, "fill", "#fff", "#242730", HEADER_LOGO_TO_BLACK, {isMenuOpen: mainMenuCheckbox.checked, scrollTop: body.scrollTop});
            setElementColor(mainMenuSVG, "stroke", "#fff", "#242730", MAIN_MENU_TO_BLACK, {isMenuOpen: mainMenuCheckbox.checked, scrollTop: body.scrollTop});
        }
    })

    body.addEventListener('scroll', (e) => {
        let scrollPosition = body.scrollTop;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;      
        
        //for phone
        //
        //if (windowWidth < 1030 && scrollPosition > 300) {
        //    scrollPosition = scrollPosition - 300;
        //}
        //else {
        //    scrollPosition = 0;
        //}

        const scrollPercentage = scrollPosition / windowHeight;
        const animationProgress = scrollPercentage * 100;

        if (windowHeight > 950 && scrollPosition < 1270) {
            moon.style.transform = `translateY(${animationProgress + (scrollPosition / 90)}vh) scale(max(1 , ${scrollPosition / 1200}))`;
        }
        else if (windowHeight <= 950 && windowHeight > 900 && scrollPosition < 1300) {
            moon.style.transform = `translate(${scrollPercentage}px , ${animationProgress + (scrollPosition / 90)}vh) scale(max(1 , ${scrollPosition / 1250}))`;
        }
        else if (windowHeight <= 900 && windowHeight > 850 && scrollPosition < 1320) {
            moon.style.transform = `translate(${scrollPercentage * 10}px , ${animationProgress + (scrollPosition / 90)}vh) scale(max(1 , ${scrollPosition / 1150}))`;
        }
        else if (windowHeight <= 850 && windowHeight > 800 && scrollPosition < 1300) {
            moon.style.transform = `translate(${scrollPercentage * 15}px , ${animationProgress + (scrollPosition / 90)}vh) scale(max(1 , ${scrollPosition / 1100}))`;
        }
        else if (windowHeight <= 800 && windowHeight > 750 && scrollPosition < 1280) {
            moon.style.transform = `translate(${scrollPercentage * 20}px , ${animationProgress + (scrollPosition / 90)}vh) scale(max(1 , ${scrollPosition / 1050}))`;
        }
        else if (windowHeight <= 750 && scrollPosition < 1270) {
            moon.style.transform = `translate(${scrollPercentage * 15}px , ${animationProgress + (scrollPosition / 90)}vh) scale(max(1 , ${scrollPosition / 1000}))`;
        }

        setElementColor(headerLogo, "fill", "#fff", "#242730", HEADER_LOGO_TO_BLACK, {isMenuOpen: mainMenuCheckbox.checked, scrollTop: body.scrollTop});
        setElementColor(mainMenuSVG, "stroke", "#fff", "#242730", MAIN_MENU_TO_BLACK, {isMenuOpen: mainMenuCheckbox.checked, scrollTop: body.scrollTop});      
    });
});
