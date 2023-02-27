const mouse = document.getElementById("mouse");
const mouseTrailer = document.getElementById("mousetrailer");
const mouseExpandir = document.getElementById("mouseexpandir");
const copiar = document.getElementById("copiar");

window.onmousemove = event => {
    const x = event.clientX;
    const y = event.clientY;
    let keyframes = { transform: `translate(${x-25}px, ${y-25}px)` };
    
    mouse.style.left = `${x-5}px`;
    mouse.style.top = `${y-5}px`;
    
    if (event.target.id === "expandir") {
        mouseExpandir.style.display = "block";
        setTimeout(() => {mouseExpandir.innerHTML = "Clique ou role o mouse para ver o conteúdo!"}, 350);
        mouseTrailer.style.fontSize = "1em";
        mouseTrailer.style.width = "390px";
        mouseTrailer.style.paddingLeft = "50px";
        keyframes.transform = `translate(${x-25}px, ${y-25}px)`;
    } else if (event.target.id === "nome" || event.target.id === "sobrenome") {
        mouseTrailer.style.width = "200px";
        mouseTrailer.style.height = "200px";
        mouseTrailer.style.borderRadius = "100px";
        mouseTrailer.style.backgroundColor = "var(--white)";
        keyframes.transform = `translate(${x-100}px, ${y-100}px)`;
    } else if (event.target.classList.contains("linkmenu")) {
        mouseTrailer.style.width = "100px";
        mouseTrailer.style.height = "100px";
        keyframes.transform = `translate(${x-50}px, ${y-50}px)`;
    } else if (event.target.classList.contains("link")) {
        mouseExpandir.style.display = "block";
        mouseTrailer.style.width = "100px";
        mouseTrailer.style.height = "100px";
        mouseTrailer.style.paddingLeft = "38px";
        mouseTrailer.style.fontSize = "2em";
        keyframes.transform = `translate(${x-50}px, ${y-50}px)`;
        mouseExpandir.innerHTML = "&#129125;"
        mouse.style.zIndex = "-1";
    } else if (event.target.classList.contains("biglink")) {
        mouseExpandir.style.display = "block";
        mouseTrailer.style.width = "150px";
        mouseTrailer.style.height = "150px";
        mouseTrailer.style.borderRadius = "100px";
        mouseTrailer.style.paddingLeft = "55px";
        mouseTrailer.style.fontSize = "3em";
        keyframes.transform = `translate(${x-75}px, ${y-75}px)`;
        mouseExpandir.innerHTML = "&#129125;"
        mouse.style.zIndex = "-1";
    } else if (event.target.id === "copiar") {
        mouseExpandir.style.display = "block";
        setTimeout(() => {mouseExpandir.innerHTML = "Clique para copiar!"}, 350);
        mouseTrailer.style.fontSize = "1em";
        mouseTrailer.style.width = "200px";
        mouseTrailer.style.paddingLeft = "50px";
        keyframes.transform = `translate(${x-25}px, ${y-25}px)`;
    } else if (event.target.id === "baixar") {
        mouseExpandir.style.display = "block";
        setTimeout(() => {mouseExpandir.innerHTML = "Clique para baixar!"}, 350);
        mouseTrailer.style.fontSize = "1em";
        mouseTrailer.style.width = "200px";
        mouseTrailer.style.paddingLeft = "50px";
        keyframes.transform = `translate(${x-25}px, ${y-25}px)`;
    } else {
        mouseExpandir.style.display = "none";
        mouseTrailer.style.height = "50px";
        mouseTrailer.style.width = "50px";
        mouseExpandir.innerHTML = "";
        mouseTrailer.style.backgroundColor = "var(--red)";
        mouseTrailer.style.paddingLeft = "0px";
        mouse.style.zIndex = "2";
    }

    mousetrailer.animate(keyframes, {
        duration: 1000,
        fill: "forwards"
    });
}

copiar.addEventListener("click", event => {
    navigator.clipboard.writeText("oaluiser@gmail.com");
    copiar.innerHTML = "Copiado &#10004;";
})