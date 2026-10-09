const particles = document.getElementById("particles");

for (let i = 0; i < 150; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    const size = 2 + Math.random() * 4;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particle.style.opacity = 0.2 + Math.random() * 0.8;

    if (Math.random() < 0.4) {
        particle.style.backgroundColor = "#6d6";
    } else {
        particle.style.backgroundColor = "cyan";
    }

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    const speed = 0.2 + Math.random() * 0.8;

    const angle = Math.random() * Math.PI * 2;

    const dx = Math.cos(angle) * speed;
    const dy = Math.sin(angle) * speed;

    particle.style.left = x + "px";
    particle.style.top = y + "px";

    particles.appendChild(particle);

    function move() {

        x += dx;
        y += dy;

        if (x > window.innerWidth) x = 0;
        if (x < 0) x = window.innerWidth;

        if (y > window.innerHeight) y = 0;
        if (y < 0) y = window.innerHeight;

        particle.style.left = x + "px";
        particle.style.top = y + "px";

        requestAnimationFrame(move);
    }

    move();
}