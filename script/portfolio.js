let canChangeImage = true;

document.addEventListener("DOMContentLoaded", () => {
    const slideshowWrapper = document.getElementById("slideshow-wrapper");
    const openedProjectContainer = document.getElementById("opened-project-container");
    const projectTemplate = document.getElementById("project-template");
    const openProjectCheckbox = document.getElementById("open-project-checkbox");

    const addHeaderEventListenrs = new Event("addLogoAndMenuListeners")
    document.dispatchEvent(addHeaderEventListenrs);

    let subscribedButtonsOfSlideshows = [];

    let numImgOnSlideshow = determineSlideshowsImageCount(window.innerWidth);
    
    let currentIndexes = [];

    createSlideshows();

    window.addEventListener("resize", (e) => {
        const windowWidth = e.target.innerWidth;

        numImgOnSlideshow = determineSlideshowsImageCount(windowWidth);

        createSlideshows(true);
    })

    autoPlay();

    function determineSlideshowsImageCount(windowWidth) {
        let count = 0;

        if (windowWidth < 860) {
            count = 1;
        }
        else if (windowWidth < 1145) {
            count = 2;
        }
        else {
            count = 3;
        }

        return count;
    }

    function createSlideshows(useCurrentIndexes = false) {
        subscribedButtonsOfSlideshows = [];

        slideshowWrapper.innerHTML = "";

        slideshows.forEach((slideshow, slideshowIndex) => {
            let shouldCreateButtons = false;

            if (slideshow.projects.length > 3 || numImgOnSlideshow < slideshow.projects.length) {
                shouldCreateButtons = true;
            }

            const slideshowSection = document.createElement('section');
            slideshowSection.classList = "category-slideshow";

            const slideshowTitle = document.createElement('h2');
            slideshowTitle.className = "category-title roboto-700";
            slideshowTitle.innerHTML = slideshow.slideshowTitle;

            slideshowSection.appendChild(slideshowTitle);

            const slideshowDiv = document.createElement('div');
            slideshowDiv.className = "slideshow";

            slideshowDiv.addEventListener("mouseenter", (e) => {
                const nextButton = slideshowDiv.querySelectorAll(".slideshow-button")[1];

                subscribedButtonsOfSlideshows = subscribedButtonsOfSlideshows.filter(button => {
                    if (button === nextButton) {
                        return false;
                    }
                    return true;
                })
            });

            slideshowDiv.addEventListener("mouseleave", (e) => {
                const nextButton = slideshowDiv.querySelectorAll(".slideshow-button")[1];
                subscribedButtonsOfSlideshows.push(nextButton);
            });

            if (shouldCreateButtons == true) {
                const slideshowButton = document.createElement('button');
                slideshowButton.classList = "slideshow-button";
                slideshowButton.dataset.defaultOpacity = "1";
                slideshowButton.dataset.hoverOpacity = "0.5";

                slideshowButton.addEventListener("click", showPrevious);

                slideshowButton.dataset.index = slideshowIndex;

                if (useCurrentIndexes == false) {
                    currentIndexes[slideshowIndex] = 0;
                }

                slideshowDiv.appendChild(slideshowButton);
            }
            else {
                currentIndexes[slideshowIndex] = 0;
            }

            const slideshowImages = document.createElement('div');
            slideshowImages.className = "slideshow-images";

            if (shouldCreateButtons == false) {
                slideshowDiv.style.flexDirection = "column";
            }

            let counter = 0;
            let i = 0;

            if (useCurrentIndexes == true) {
                i = currentIndexes[slideshowIndex];
            }

            while (counter < numImgOnSlideshow && counter < slideshow.projects.length) {
                const project = slideshow.projects[i];
                const slideshowProject = createSlideshowProject(project);

                slideshowImages.appendChild(slideshowProject);

                ++counter;
                ++i;

                if (i > slideshow.projects.length - 1) {
                    if (useCurrentIndexes == false) {
                        break;
                    }
                    else {
                        i = 0;
                    }
                }
            }

            slideshowDiv.appendChild(slideshowImages);

            if (shouldCreateButtons == true) {
                const slideshowButton = document.createElement('button');
                slideshowButton.classList = "slideshow-button";
                slideshowButton.dataset.defaultOpacity = "1";
                slideshowButton.dataset.hoverOpacity = "0.5";
                
                slideshowButton.addEventListener("click", showNext);
                subscribedButtonsOfSlideshows.push(slideshowButton);
                slideshowButton.dataset.index = slideshowIndex;

                slideshowDiv.appendChild(slideshowButton);
            }

            slideshowSection.appendChild(slideshowDiv);
            slideshowWrapper.appendChild(slideshowSection);
        });

        const onButtonsCreated = new Event("updateButtonListeners");

        document.dispatchEvent(onButtonsCreated);

        canChangeImage = true;
    }

    function showPrevious(e) {
        if (!canChangeImage) {
            return;
        }
        canChangeImage = false;

        const pressedButton = e.target;
        const slideshowIndex = pressedButton.dataset.index;
        const slideshowProjects = slideshows[slideshowIndex].projects;
        const currFirstProjectIndex = currentIndexes[slideshowIndex];

        let prevProjectIndex = 0;

        if (currFirstProjectIndex - 1 <= -1) {
            prevProjectIndex = slideshowProjects.length - 1;
        }
        else {
            prevProjectIndex = currFirstProjectIndex - 1;
        }

        const previousImageElement = createSlideshowProject(slideshowProjects[prevProjectIndex]);
        previousImageElement.style.position = "absolute";
        previousImageElement.style.top = "0";
        previousImageElement.style.left = "-280px";

        const slideshowImagesElement = pressedButton.parentElement.children[1];
        slideshowImagesElement.prepend(previousImageElement);

        const parentWidth = window.getComputedStyle(slideshowImagesElement).width;

        const prevImgEleStyle = window.getComputedStyle(previousImageElement);
        const prevImgEleWidth = prevImgEleStyle.width;
        createKeyframes(prevImgEleWidth, parentWidth, false);

        previousImageElement.style.animationName = "show-previous-animation-0";
        
        let currSibling = previousImageElement.nextSibling;
        for (let i = 1; i < numImgOnSlideshow + 1; i++) {
            currSibling.style.position = "absolute";
            currSibling.style.top = "0";
            currSibling.style.animationName = `show-previous-animation-${i}`;

            currSibling = currSibling.nextSibling;
        }

        currentIndexes[slideshowIndex] = prevProjectIndex;

        const delay = prevImgEleStyle.animationDuration;

        const delayInMillisec = parseFloat(delay) * 1000;

        setTimeout(createSlideshows, delayInMillisec, true);
    }

    function showNext(e) {
        if (!canChangeImage) {
            return;
        }
        canChangeImage = false;

        const pressedButton = e.target;
        const slideshowIndex = pressedButton.dataset.index;
        const slideshowProjects = slideshows[slideshowIndex].projects;
        const currFirstImgIndex = currentIndexes[slideshowIndex];

        let currLastProjectIndex = currFirstImgIndex;
        let nextProjectIndex = 0;

        if (numImgOnSlideshow == 2) {
            currLastProjectIndex = currLastProjectIndex + 1;
        }
        else if (numImgOnSlideshow == 3) {
            currLastProjectIndex = currLastProjectIndex + 2;
        }

        if (currLastProjectIndex + 1 > slideshowProjects.length - 1) {
            nextProjectIndex = (currLastProjectIndex + 1) - (slideshowProjects.length - 1) - 1;
        }
        else {
            nextProjectIndex = currLastProjectIndex + 1;
        }

        const slideshowImagesElement = pressedButton.parentElement.children[1];
        const parentWidth = window.getComputedStyle(slideshowImagesElement).width;

        const nextImageElement = createSlideshowProject(slideshowProjects[nextProjectIndex]);
        nextImageElement.style.position = "absolute";
        nextImageElement.style.top = "0";
        nextImageElement.style.right = "-280px";

       
        slideshowImagesElement.appendChild(nextImageElement);

        const nextImgEleStyle = window.getComputedStyle(nextImageElement);
        const nextImgEleWidth = nextImgEleStyle.width;
        createKeyframes(nextImgEleWidth, parentWidth, true);

        nextImageElement.style.animationName = "show-next-animation-0";
        
        let currSibling = nextImageElement.previousSibling;
        for (let i = 1; i < numImgOnSlideshow + 1; i++) {
            currSibling.style.position = "absolute";
            currSibling.style.top = "0";
            currSibling.style.animationName = `show-next-animation-${i}`;

            currSibling = currSibling.previousSibling;
        }

        let indexToSave = currFirstImgIndex
        if (currFirstImgIndex + 1 > slideshowProjects.length - 1) {
            indexToSave = 0;
        }
        else {
            indexToSave = currFirstImgIndex + 1;
        }

        currentIndexes[slideshowIndex] = indexToSave;

        const delay = nextImgEleStyle.animationDuration;

        const delayInMillisec = parseFloat(delay) * 1000;

        setTimeout(createSlideshows, delayInMillisec, true);
    }

    function createSlideshowProject(project) {
        const slideshowImage = document.createElement('div');
        slideshowImage.className = "slideshow-image"

        slideshowImage.addEventListener("click", (e) => {
            openProject(project);
        });

        const img = document.createElement('img');
        img.src = `./images/projects/${project.explorer_name}/tumbnail/image.png`;
        img.alt = "image";

        slideshowImage.appendChild(img);

        const imageTitle = document.createElement('h3');
        imageTitle.className = "image-title advent-pro-600";
        imageTitle.innerHTML = project.title.text;
        imageTitle.style.color = project.title.color;

        slideshowImage.appendChild(imageTitle);

        return slideshowImage;
    }

    function openProject(project) {
        openedProjectContainer.innerHTML = "";

        const IMAGES_PATH = `./Portfolio/images/projects/${project.explorer_name}`;
        const BANNER_PATH = `${IMAGES_PATH}/banner/image.png`;
        const SECTIONS_IMAGES_SUBPATH = `${IMAGES_PATH}/section_images`;
        const USED_SOFTWARE_SUBPATH = `./Portfolio/images/projects/software-logos`
        let FINAL_IMAGE_PATH;

        if (project.finalImageLanguageVariants) {
            FINAL_IMAGE_PATH = `${IMAGES_PATH}/final-image/${selectedLanguage}/image.png`;
        }
        else {
            FINAL_IMAGE_PATH = `${IMAGES_PATH}/final-image/image.png`;
        }

        const clone = projectTemplate.content.cloneNode(true);
        const openedImageContainer = clone.querySelector(".opened-image-container");
        const openedImage = clone.querySelector(".opened-image");

        openedImageContainer.addEventListener("click", (e) => {
            openedImageContainer.style.display = "none";
        })

        const banner = clone.querySelector(".banner");
        banner.src = BANNER_PATH;

        const types = clone.querySelector(".types");

        project.types.forEach(type => {
            const projectType = document.createElement("h3");
            projectType.classList = "roboto-700";
            projectType.innerHTML = type;

            types.appendChild(projectType);
        });

        const titleAndCategoryWrapper = clone.querySelector(".title-and-category-section").firstElementChild;

        const title = clone.querySelector(".title");
        title.innerHTML = project.title.text;

        titleAndCategoryWrapper.appendChild(title);

        const category = clone.querySelector(".category");
        category.innerHTML = project.category;

        titleAndCategoryWrapper.appendChild(category);

        const usedSoftwareAndLinsk = clone.querySelector(".used-software-and-links");

        project.used_software.forEach(software => {
            const defaultImagePath = `${USED_SOFTWARE_SUBPATH}/${software}.png`;
            const hoverImagePath = `${USED_SOFTWARE_SUBPATH}/${software}_colored.png`;
            const image = document.createElement("img");
            image.src = defaultImagePath;
            image.alt = software;
            image.dataset.defaultSrc = defaultImagePath;
            image.dataset.hoverSrc = hoverImagePath;

            changeProp([image], ["src"], "defaultSrc", "hoverSrc");

            usedSoftwareAndLinsk.insertBefore(image, usedSoftwareAndLinsk.children[usedSoftwareAndLinsk.childElementCount - 1]);
        });

        
        if (project.links) {
            const linkButtons = clone.querySelectorAll(".project-link-button");
            addProjectButtonEventListenr(true, linkButtons, project.links);

            if (project.links.length > 1) {
                addProjectButtonEventListenr(false, linkButtons, project.links);
            }
        }

        const projectContent = clone.querySelector(".project-content");

        project.sections.forEach((section, index) => {
            const projectSection = document.createElement("section");
            projectSection.classList = "project-section";
            if (section.title) {
                const title = document.createElement("h2");
                title.className = "project-section-title roboto-600";
                title.innerHTML = section.title;
                
                projectSection.appendChild(title);
            }

            if (section.text) {
                const text = document.createElement("p");
                text.className = "project-section-text roboto-300";
                text.innerHTML = section.text;
                
                projectSection.appendChild(text);
            }

            if (section.images) {
                const imageContainer = document.createElement("section");
                imageContainer.classList = "project-section-image-container";

                if (section.images.gap) {
                    imageContainer.style.gap = section.images.gap;
                }

                for (let i = 0; i < section.images.count; i++) {
                    const isOpenable = section.images.openable;
                    const differentForLanguage = section.images.languageVariants;

                    const image = document.createElement("img");
                    image.classList = "project-section-image";
                    
                    image.alt = "Image";
                    image.draggable = false;

                    if (section.images.width) {
                        image.style.width = section.images.width;
                    }

                    if (differentForLanguage) {
                        image.src = isOpenable === true ? `${SECTIONS_IMAGES_SUBPATH}/section_${index}/${selectedLanguage}/image_${i}_small.png` : `${SECTIONS_IMAGES_SUBPATH}/section_${index}/${selectedLanguage}/image_${i}.png`;
                    }
                    else {
                        image.src = isOpenable === true ? `${SECTIONS_IMAGES_SUBPATH}/section_${index}/image_${i}_small.png` : `${SECTIONS_IMAGES_SUBPATH}/section_${index}/image_${i}.png`;
                    }

                    if (isOpenable) {
                        image.style.cursor = "pointer";

                        image.addEventListener("click", (e) => {
                            if (differentForLanguage) {
                                openedImage.src = `${SECTIONS_IMAGES_SUBPATH}/section_${index}/${selectedLanguage}/image_${i}_big.png`;
                            }
                            else {
                                openedImage.src = `${SECTIONS_IMAGES_SUBPATH}/section_${index}/image_${i}_big.png`;
                            }
                            
                            openedImageContainer.style.display = "flex";
                        });

                        image.addEventListener("mouseover", (e) => {
                            const computedStyle = window.getComputedStyle(image);
                            
                            image.style.width = `calc(${computedStyle.width} - 3.2px)`;
                            image.style.height = `calc(${computedStyle.height} - 3.2px)`;
                            image.style.border = "solid 2px white";
                        });

                        image.addEventListener("mouseout", (e) => {
                            const computedStyle = window.getComputedStyle(image);
                            
                            image.style.width = `calc(${computedStyle.width} + 3.2px)`;
                            image.style.height = `calc(${computedStyle.height} + 3.2px)`;
                            image.style.border = "none";
                        })
                    }

                    imageContainer.appendChild(image);
                }

                projectSection.appendChild(imageContainer);
            }

            projectContent.appendChild(projectSection);
        });

        const finalImage = clone.querySelector(".project-final-image");
        finalImage.src = FINAL_IMAGE_PATH;

        openedProjectContainer.appendChild(clone);

        openProjectCheckbox.checked = true;
        document.body.scrollTo({ top: 0, behavior: "instant" });
    }

    function addProjectButtonEventListenr(isRightButton, buttons, links) {
        const buttonIndex = Number(isRightButton);
        const linkIndex = Number(!isRightButton); 

        buttons[buttonIndex].innerHTML = links[linkIndex].button_text;
        buttons[buttonIndex].style.display = "block";

        if (links[linkIndex].isProject === true) {
            let linkedProject;
            
            for (const slideshow of slideshows) {
                linkedProject = slideshow.projects.filter(project => {
                    if (project.explorer_name === links[linkIndex].project_explorer_name) {
                        return true;
                    }
                    
                    return false;
                })

                if (linkedProject && linkedProject.length !== 0) {
                    break;
                }
            }

            buttons[buttonIndex].addEventListener("click", (e) => {
                openProject(linkedProject[0]);
            });
        }
        else {
            buttons[buttonIndex].addEventListener("click", (e) => {
                window.open(links[linkIndex].path);
            });
        }
    }

    function createKeyframes(ImgEleWidth, parentEleWidth, isforNext) {
        const stylesheet = document.styleSheets[document.styleSheets.length - 2];
        const elementParsedWidth = parseFloat(ImgEleWidth);
        const halfElementWidth = elementParsedWidth / 2;
        const parentParsedWidth = parseFloat(parentEleWidth);
        const halfParentWidth = parentParsedWidth / 2;
        const keyframes = [];
    
        const interestingEffectAmount = 100;

        for (let i = stylesheet.cssRules.length - 1; i >= 0; i--) {
            const rule = stylesheet.cssRules[i];
            if (rule instanceof CSSKeyframesRule && rule.name.includes(`show-${isforNext == true ? "next" : "previous"}-animation`)) {
                stylesheet.deleteRule(i);
            }
        }
    
        if (numImgOnSlideshow === 1) {
            keyframes.push(`
                @keyframes show-${isforNext == true ? "next" : "previous"}-animation-0 {
                    0% { ${isforNext == true ? "right" : "left"}: -${elementParsedWidth + interestingEffectAmount}px; } 
                    100% { ${isforNext == true ? "right" : "left"}: ${halfParentWidth - halfElementWidth}px; }
                }
            `);
    
            keyframes.push(`
                @keyframes show-${isforNext == true ? "next" : "previous"}-animation-1 {
                    0% { ${isforNext == true ? "right" : "left"}: ${halfParentWidth - halfElementWidth}px; } 
                    100% { ${isforNext == true ? "right" : "left"}: ${parentParsedWidth + interestingEffectAmount}px; }
                }
            `);
        } else if (numImgOnSlideshow === 2) {
            keyframes.push(`
                @keyframes show-${isforNext == true ? "next" : "previous"}-animation-0 {
                    0% { ${isforNext == true ? "right" : "left"}: -${elementParsedWidth + interestingEffectAmount}px; } 
                    100% { ${isforNext == true ? "right" : "left"}: ${halfParentWidth - elementParsedWidth - 10}px; }
                }
            `);
    
            keyframes.push(`
                @keyframes show-${isforNext == true ? "next" : "previous"}-animation-1 {
                    0% { ${isforNext == true ? "right" : "left"}: ${halfParentWidth - elementParsedWidth - 10}px; } 
                    100% { ${isforNext == true ? "right" : "left"}: ${halfParentWidth + 10}px; }
                }
            `);
    
            keyframes.push(`
                @keyframes show-${isforNext == true ? "next" : "previous"}-animation-2 {
                    0% { ${isforNext == true ? "right" : "left"}: ${halfParentWidth + 10}px; } 
                    100% { ${isforNext == true ? "right" : "left"}: ${parentParsedWidth + interestingEffectAmount}px; }
                }
            `);
        } else {
            keyframes.push(`
                @keyframes show-${isforNext == true ? "next" : "previous"}-animation-0 {
                    0% { ${isforNext == true ? "right" : "left"}: -${elementParsedWidth + interestingEffectAmount}px; } 
                    100% { ${isforNext == true ? "right" : "left"}: ${halfParentWidth - elementParsedWidth - halfElementWidth - 20}px; }
                }
            `);
    
            keyframes.push(`
                @keyframes show-${isforNext == true ? "next" : "previous"}-animation-1 {
                    0% { ${isforNext == true ? "right" : "left"}: ${halfParentWidth - elementParsedWidth - halfElementWidth - 20}px; }
                    100% { ${isforNext == true ? "right" : "left"}: ${halfParentWidth - halfElementWidth}px; } 
                }
            `);
    
            keyframes.push(`
                @keyframes show-${isforNext == true ? "next" : "previous"}-animation-2 {
                    0% { ${isforNext == true ? "right" : "left"}: ${halfParentWidth - halfElementWidth}px; }
                    100% { ${isforNext == true ? "right" : "left"}: ${halfParentWidth + halfElementWidth + 20}px; } 
                }
            `);
    
            keyframes.push(`
                @keyframes show-${isforNext == true ? "next" : "previous"}-animation-3 {
                    0% { ${isforNext == true ? "right" : "left"}: ${halfParentWidth + halfElementWidth + 20}px; }
                    100% { ${isforNext == true ? "right" : "left"}: ${parentParsedWidth + interestingEffectAmount}px; } 
                }
            `);
        }
    
        keyframes.forEach(keyframe => {
            stylesheet.insertRule(keyframe, stylesheet.cssRules.length);
        });
    }    

    function autoPlay() {
        setInterval(() => {
            for (let i = 0; i < subscribedButtonsOfSlideshows.length; i++) {
                const target = subscribedButtonsOfSlideshows[i];
                canChangeImage = true;
                showNext({target})
            } 
        }, 4000)
    }
})