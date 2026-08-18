const cursorDot = document.querySelector('.cursordot');
const cursorOutline = document.querySelector('.cursoroutline');

let mouseX = 0;
let mouseY = 0;

let outlineX = 0;
let outlineY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
});

function animate() {
    outlineX += (mouseX - outlineX) * 0.2
    outlineY += (mouseY - outlineY) * 0.2

    cursorOutline.style.left = `${outlineX}px`;
    cursorOutline.style.top = `${outlineY}px`;

    requestAnimationFrame(animate);

}
animate();

const hoverstuff = document.querySelectorAll('.hover-target, a');

hoverstuff.forEach((target) => {
    target.addEventListener('mouseenter', () => {
        document.body.classList.add('hovered');
    });
    target.addEventListener('mouseleave', () => {
        document.body.classList.remove('hovered');
    });
});