const curosrdot = document.querySelector('.cursordot');
const cursoroutline = document.querySelector('.cursoroutline');

let mouseX = 0;
let mouseY = 0;

let outlineX = 0;
let outlineY = 0;

window.addeventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursordot.style.left = `${mouseX}px`;
    cursordot.style.top = `${mouseY}px`;
});

function animate() {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;

    cursoroutline.style.left = `${outlineX}px`;
    cursoroutline.style.top = `${outlineY}px`;

    requestAnimationFRame(animate);

}
animate();

const hoverstuff = document.querySelectorAll('.hover-target, a');

hoverstuff.forEach((target) => {
    target.addEventListener('mouseenter', () => {
        document.body.classList.add('hovered');
    });
    target.addeventListener('mouseleave', () => {
        document.body.classList.remove('hovered');
    });
});