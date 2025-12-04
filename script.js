document.addEventListener('DOMContentLoaded', () => {
    const starfield = document.querySelector('.starfield');
    const starCount = 200; // Number of stars to generate

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Random size
        const sizeRandom = Math.random();
        if (sizeRandom < 0.6) {
            star.classList.add('small');
        } else if (sizeRandom < 0.9) {
            star.classList.add('medium');
        } else {
            star.classList.add('large');
        }

        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;

        // Random animation duration and delay
        const duration = 2 + Math.random() * 4; // Between 2s and 6s
        const delay = Math.random() * 5; // Start at different times

        star.style.setProperty('--duration', `${duration}s`);
        star.style.animationDelay = `${delay}s`;

        starfield.appendChild(star);
    }
});
