const mouse = document.getElementById("mouse");
const mouseTrailer = document.getElementById("mousetrailer");
const inicio = document.getElementById("inicio");
const sobremim = document.getElementById("sobremim");
const portfolio = document.getElementById("portfolio");
const contato = document.getElementById("contato");

//offsetop

window.onmousemove = event => {
    console.log(event.target);
    const x = event.clientX;
    const y = event.clientY;
    
    mouse.style.left = `${x-5}px`;
    mouse.style.top = `${y-5}px`;

    const keyframes = {
        transform: `translate(${x-25}px, ${y-25}px)`
    };

    mousetrailer.animate(keyframes, {
        duration: 1000,
        fill: "forwards"
    });
}