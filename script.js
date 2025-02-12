// Show message-notification when scrolling
window.addEventListener('scroll', function () {
    const messageBox = document.querySelector('.message-notification');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) { // Adjust threshold as needed
        messageBox.classList.add('visible');
    }
});

// Modal Logic
const modal = document.getElementById("imageModal");
const openBtn = document.getElementById("openImageBtn");
const closeBtn = document.querySelector(".close");

// Ensure modal is hidden at first
document.addEventListener("DOMContentLoaded", function () {
    modal.style.display = "none";
});

// Open modal on image button click
openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Close modal when clicking the close button
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the image
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
