const btn = document.getElementById("surpriseBtn");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
    message.classList.remove("hidden");
    btn.innerHTML = "🎉 Enjoy Your Day! 🎉";
    startConfetti();
});

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];

for (let i = 0; i < 40; i++) {
    pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 6 + 2,
        d: Math.random() * 180,
        color: ["#FFD700", "#FFFFFF", "#FF4D4D", "#00E5FF"][Math.floor(Math.random() * 4)]
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach(p => {
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
    });

    update();
}

function update() {
    pieces.forEach(p => {
        p.y += 2;
        if (p.y > canvas.height) {
            p.y = -10;
            p.x = Math.random() * canvas.width;
        }
    });
}

let animation;

function startConfetti() {
    if (!animation) {
        animation = setInterval(draw, 20);
    }
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
