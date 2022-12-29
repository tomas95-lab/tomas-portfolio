function animate(object) {
    let skills = document.querySelector(`.${object}`);
    let pos1 = skills.getBoundingClientRect().top;
    let windowHeight = window.innerHeight / 1;

    if (pos1 < windowHeight) {
        skills.classList.add("animate");
    }

}

addEventListener("scroll", (e) => {
    animate("skillsContainer");
    animate("containerProjects");
});

const header = document.getElementById("header");
const inputCheckbox = document.getElementById("mode");
const logo = document.getElementById("logo");
const main = document.getElementById("main");
inputCheckbox.addEventListener("change", (e) => {
    main.classList.toggle("light");
    header.classList.toggle("light");
    if (main.classList.contains("light")) {
        logo.src = "./assets/logoLight-removebg-preview.png";
    } else {
        logo.src = "Captura_de_pantalla_2022-12-15_181643-removebg-preview (1).png";

    }
});  