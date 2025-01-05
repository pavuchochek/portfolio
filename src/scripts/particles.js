document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    });
// Configuration des particules
let particlesArray = [];
const particleCount = 100; // Nombre de particules

class Particle {
    constructor(x, y, size, speedX, speedY, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Rebondissement sur les bords
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
}

function initParticles() {
    particlesArray = [];
    for (let i = 0; i < particleCount; i++) {
        // Définir les tailles et opacités pour varier
        const isLarge = Math.random() > 0.7; // 30% des particules seront grandes et lentes
        const size = isLarge ? Math.random() * 10 + 10 : Math.random() * 5 + 1; // Grandes : 10-20px | Petites : 1-5px
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = isLarge ? (Math.random() - 0.5) * 0.5 : (Math.random() - 0.5) * 2; // Grandes : Lentes
        const speedY = isLarge ? (Math.random() - 0.5) * 0.5 : (Math.random() - 0.5) * 2; // Petites : Rapides
        const opacity = isLarge ? Math.random() * 0.3 + 0.1 : Math.random() * 0.5 + 0.5; // Grandes : Transparente
        const color = `rgba(255, 255, 255, ${opacity})`;
        particlesArray.push(new Particle(x, y, size, speedX, speedY, color));
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();
});