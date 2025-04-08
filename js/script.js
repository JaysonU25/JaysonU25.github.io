let heartstatus = 0;
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".heart").forEach(heart => {
        heart.addEventListener("click", function () {
            this.classList.toggle("clicked"); // Toggle the red fill
            if(heartstatus == 0){
                heartstatus = 1;
                heart.innerHTML = "&#9829;"
            } else {
                heartstatus = 0;
                heart.innerHTML = "&#9825;"
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const postID = urlParams.get("post");

    if (postID) {
        const targetPost = document.querySelector(`.post:nth-child(${postID})`);
        if (targetPost) {
            targetPost.scrollIntoView({ behavior: "smooth" });
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Fetch the content of index.html
    fetch("index.html")
        .then(response => response.text())
        .then(data => {
            // Create a temporary element to parse the HTML
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = data;

            // Loop through each profile post
            document.querySelectorAll(".profile-post").forEach(profilePost => {
                let postID = profilePost.getAttribute("data-post"); // Get post ID
                let postElement = tempDiv.querySelector(`#post-${postID}`); // Find the post div

                if (postElement) {
                    let images = postElement.querySelectorAll("img"); // Select all images
                    if (images.length > 1) { // Ensure there is a second image
                        let img = document.createElement("img");
                        img.src = images[1].src; // Select the second image
                        img.alt = `Post ${postID}`;
                        profilePost.appendChild(img); // Add image to profile post
                    }
                }
            });
        })
        .catch(error => console.error("Error loading posts:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    const stories = document.querySelectorAll(".stories-entry");
    const storyOverlay = document.querySelector(".story-overlay");
    const storyViewer = document.querySelector(".story-viewer");
    const storyComponents = document.querySelectorAll(".story-component");
    const quitButton = document.getElementById("Quit");
    const nextStory = document.getElementById('next-story');
    const prevStory = document.getElementById('prev-story');
    const nextStory2 = document.getElementById('next-story-small');
    const prevStory2 = document.getElementById('prev-story-small');
    let darkModeSwitch = document.getElementById("darkModeSwitch");

    let currentIndex = 0;


    function openStory(index) {
        storyOverlay.style.display = "flex";
        darkModeSwitch.style.display = 'none';
        currentIndex = index;

        if (storyComponents[index]) {
            storyComponents[index].scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        }
    }

    stories.forEach((story, index) => {
        story.addEventListener("click", () => {
            openStory(index);
        });
    });
    if (quitButton){
        quitButton.onclick = () => {
            storyOverlay.style.display = 'none';
            darkModeSwitch.style.display = 'flex'
        };
    }

    if(nextStory){
        nextStory.onclick = () => {
            if (currentIndex < storyComponents.length - 1) {
                currentIndex++;
                openStory(currentIndex);
            }
        };
    };
    if(prevStory){
        prevStory.onclick = () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    openStory(currentIndex);
                }
        };
    };
    if(nextStory2){
    nextStory2.onclick = () => {
        if (currentIndex < storyComponents.length - 1) {
            currentIndex++;
            openStory(currentIndex);
        }
    }
    };
    if(prevStory2){
        prevStory2.onclick = () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    openStory(currentIndex);
                }
        };
    };  

});

document.addEventListener("DOMContentLoaded", function () {
    let darkModeSwitch = document.getElementById("darkModeSwitch");
    
    if(darkModeSwitch === null){
        darkModeSwitch = document.getElementById("darkModeSwitch2");
    }
    const body = document.body;
    const html = document;
    const homeElement = document.getElementById("home");
    const resumeElement = document.getElementById("resume");
    const homeElement2 = document.getElementById("home2");
    const resumeElement2 = document.getElementById("resume2");
    const storyComponents = document.querySelectorAll(".story-component");

    // Check if dark mode was previously enabled
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        
        darkModeSwitch.classList.add("active");
        homeElement.src = 'assets/home_white.webp';
        resumeElement.src = '../assets/Resume_white.webp';
        homeElement2.src = 'assets/home_white.webp';
        resumeElement2.src = '../assets/Resume_white.webp';
        storyComponents.forEach( comp => { comp.style.backgroundColor = 'black'});
    }

    darkModeSwitch.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        
        darkModeSwitch.classList.toggle("active");

        // Save preference
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            homeElement.src = 'assets/home_white.webp';
            resumeElement.src = '../assets/Resume_white.webp';
            homeElement2.src = 'assets/home_white.webp';
            resumeElement2.src = '../assets/Resume_white.webp';
            storyComponents.forEach( comp => { comp.style.backgroundColor = 'black'});
        } else {
            localStorage.setItem("dark-mode", "disabled");
            homeElement.src = '../assets/home.webp';
            resumeElement.src = '../assets/Resume.webp';
            homeElement2.src = 'assets/home.webp';
            resumeElement2.src = '../assets/Resume.webp';
            storyComponents.forEach( comp => { comp.style.backgroundColor = 'white'});
        }

    });
});


document.querySelectorAll(".post-images").forEach(post => {
    const imagesContainer = post.querySelector(".images-container");
    const images = imagesContainer.querySelectorAll(".post-image");
    const prevButton = post.querySelector(".prev-image");
    const nextButton = post.querySelector(".next-image");

    let currentIndex = 0;

    function updateVisibility() {
        prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
        nextButton.style.display = currentIndex === images.length - 1 ? "none" : 'block';
    }

    function scrollToImage(index) {
        currentIndex = Math.max(0, Math.min(index, images.length - 1));
        const offset = -currentIndex * images[0].clientWidth;
        imagesContainer.style.transform = `translateX(${offset}px)`;
        updateVisibility();
    }

    prevButton.addEventListener("click", () => scrollToImage(currentIndex - 1));
    nextButton.addEventListener("click", () => scrollToImage(currentIndex + 1));

    updateVisibility(); // Set initial visibility
});



