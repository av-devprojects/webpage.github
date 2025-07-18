// Load BTN's 
document.addEventListener("DOMContentLoaded", () => {
    // Get buttons
    const buttons = {
        about: document.querySelector(".aboutme-btn"),
        skills: document.querySelector(".skills-btn"),
        portfolio: document.querySelector(".portfolio-btn"),
        contacts: document.querySelector(".contacts-btn")
    };

    // Get content sections
    const sections = {
        about: document.querySelector(".aboutme-content"),
        skills: document.querySelector(".skills-content"),
        portfolio: document.querySelector(".portfolio-content"),
        contacts: document.querySelector(".contacts-content")
    };

    // Function to hide all and show the selected section
    const showSection = (sectionKey) => {
        for (let key in sections) {
            sections[key].classList.remove("active");
        }
        sections[sectionKey].classList.add("active");
    };

    // Add click event listeners AFTER showSection is defined
    buttons.about.addEventListener("click", () => showSection("about"));
    buttons.skills.addEventListener("click", () => showSection("skills"));
    buttons.portfolio.addEventListener("click", () => showSection("portfolio"));
    buttons.contacts.addEventListener("click", () => showSection("contacts"));

    // Show one by default (optional)
    showSection("about");
});



// Bubbles Script

const containerB = document.querySelector('.container-bubbles');

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.width = `${10 + Math.random() * 20}px`;
    bubble.style.height = bubble.style.width;
    bubble.style.animationDuration = `${6 + Math.random() * 4}s`;

    containerB.appendChild(bubble);
}

// Start bubbles and stop after 20 seconds
function CallLotsOfBubblies() {
    const bubbleInterval = setInterval(createBubble, 1000);

    setTimeout(() => {
        clearInterval(bubbleInterval); // stop bubbles after 20 sec
    }, 20000);
}

// -----------------------------

// Stars Script

const containerS = document.querySelector('.container-stars');

function createStars() {
    const stars = document.createElement('div');
    stars.classList.add('stars');

    const p = document.createElement('p');
    p.innerText = '*';
    stars.appendChild(p); // This places the <p> inside the <div>

    stars.style.left = `${Math.random() * 100}%`;
    stars.style.top = '0';

    const size = 10 + Math.random() * 20;
    stars.style.width = `${size}px`;
    stars.style.height = `${size}px`;

    const duration = 6 + Math.random() * 8;
    stars.style.animationDuration = `${duration}s`;

    containerS.appendChild(stars);

    // Remove stars after their animation finishes
    setTimeout(() => {
        stars.remove();
    }, duration * 1000);
}

// Start stars and stop after 20 seconds
function CallLotsOfStars() {
    const starsInterval = setInterval(createStars, 1000);

    setTimeout(() => {
        clearInterval(starsInterval); // stop stars after 20 sec
    }, 20000);
}

// -----------------------------

// JellyFish Script

const containerJ = document.querySelector('.container-jellyfish');

function createJellyfish() {
    const jellyfish = document.createElement('div');
    jellyfish.classList.add('jellyfish');

    // Jellyfish Body
    const jellyfishBody = document.createElement('div');
    jellyfishBody.classList.add('jellyfishBody');
    jellyfish.appendChild(jellyfishBody);

    // Jellyfish Trails
    const jellyfishTrails = document.createElement('div');
    jellyfishTrails.classList.add('jellyfishTrails');

    const trails = ['≋≋≋≋', '≋≋≋≋≋', '≋≋≋≋'];
    trails.forEach(t => {
        const trail = document.createElement('p');
        trail.innerText = t;
        jellyfishTrails.appendChild(trail);
    });

    jellyfish.appendChild(jellyfishTrails);

    // Random horizontal start, from bottom
    jellyfish.style.left = `${Math.random() * 90}vw`;
    jellyfish.style.top = `100vh`;

    const size = 40 + Math.random() * 20;
    jellyfish.style.width = `${size}px`;
    jellyfish.style.height = 'auto';

    const duration = 6 + Math.random() * 4;
    jellyfish.style.animation = `floatUp ${duration}s linear forwards`;

    containerJ.appendChild(jellyfish);

    // Fade in effect
    requestAnimationFrame(() => {
        jellyfish.classList.add('show');
    });

    // Fade out and remove after animation
    setTimeout(() => {
        jellyfish.classList.remove('show');
        setTimeout(() => {
            jellyfish.remove();
        }, 1200); // fade-out duration
    }, duration * 1000);
}

// Start jellyfish and stop after 20 seconds
function CallLotsOfJellyFish() {
    const jellyfishInterval = setInterval(createJellyfish, 1000);

    setTimeout(() => {
        clearInterval(jellyfishInterval); // stop jellyfish after 20 sec
    }, 20000);
}





