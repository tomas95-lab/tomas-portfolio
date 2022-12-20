function animate(object) {
    let skills = document.querySelector(`.${object}`)
    let pos1 = skills.getBoundingClientRect().top
    let windowHeight = window.innerHeight / 1.5

    if (pos1 < windowHeight) {
        skills.classList.add("animate")
    }

}

addEventListener("scroll", (e) => {
    animate("skillsContainer")
    animate("containerProjects")
})


const inputCheckbox = document.getElementById("mode")
const main = document.getElementById("main")
inputCheckbox.addEventListener("change", (e) => {
    main.classList.toggle("light")
})  