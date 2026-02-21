// SLIDESHOW FOTO
const photos = document.querySelectorAll('.photo');
let index = 0;

setInterval(() => {
    photos.forEach(p => p.classList.remove('active'));
    photos[index].classList.add('active');
    index = (index + 1) % photos.length;
}, 3500);

// CONFETTI
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();

const colors = ["#ffffff", "#cfe9ff", "#7bbcff"];
const confetti = [];

for (let i = 0; i < 100; i++) {
    confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 4 + 2,
        d: Math.random() * 1 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.fill();
        c.y += c.d;
        if (c.y > canvas.height) {
            c.y = -10;
            c.x = Math.random() * canvas.width;
        }
    });
    requestAnimationFrame(draw);
}

draw();
window.addEventListener("resize", resize);
