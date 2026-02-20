// ===== SLIDESHOW FOTO =====
const photos = document.querySelectorAll('.photo');
let index = 0;

setInterval(() => {
    photos.forEach(p => p.classList.remove('active'));
    photos[index].classList.add('active');
    index = (index + 1) % photos.length;
}, 3500);

// ===== CONFETTI =====
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiPieces = [];
const colors = ["#ffffff", "#cfe9ff", "#7bbcff"];

for (let i = 0; i < 120; i++) {
    confettiPieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 4 + 2,
        d: Math.random() * 1 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
    });
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiPieces.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        p.y += p.d;
        if (p.y > canvas.height) {
            p.y = -10;
            p.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(drawConfetti);
}

drawConfetti();

// ===== RESPONSIVE =====
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
