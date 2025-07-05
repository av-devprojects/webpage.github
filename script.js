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

const container = document.querySelector('.container-bubbles');

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.width = `${10 + Math.random() * 20}px`;
    bubble.style.height = bubble.style.width;
    bubble.style.animationDuration = `${6 + Math.random() * 4}s`;
    
    container.appendChild(bubble);
}

function CallLotsOfBubblies()
{
    setInterval(createBubble, 1000);
}





