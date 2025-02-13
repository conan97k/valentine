function openGift() {
const giftBox = document.querySelector(".gift-box");
giftBox.style.animation = "none";
giftBox.style.transform = "scale(1.2) rotate(360deg)";
setTimeout(() => {
giftBox.style.display = "none";
showMessage();
createHearts();
}, 500);
}

function showMessage() {
const messageElement = document.getElementById("message");
messageElement.style.display = "inline-block";
}

function createHearts() {
const heartSize = 50;

// Create hearts function
function createHeart() {
let heart = document.createElement("div");
heart.classList.add("hearts");
heart.innerHTML = "❤️";

// Random position across the full screen width
const x = Math.random() * (window.innerWidth - heartSize);
const y = -heartSize;

heart.style.left = x + "px";
heart.style.top = y + "px";

document.body.appendChild(heart);
// Random animation duration between 2-4 seconds
heart.style.animationDuration = (Math.random() * 2 + 2) + "s";
// Remove heart element after animation
heart.addEventListener('animationend', () => heart.remove());
}

// Initial hearts
for (let i = 0; i < 15; i++) {
createHeart();
}

// Create new hearts every 200ms
const heartInterval = setInterval(createHeart, 200);
}