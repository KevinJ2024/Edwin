import { characters } from "./data.js"

window.addEventListener("DOMContentLoaded", printCharacters(characters))

function makeCharacter(character){
    const container = document.createElement("div")
    container.id = "container"

    const imgCharacter = document.createElement("img")
    imgCharacter.id = "img-container"
    imgCharacter.src = character.img
    imgCharacter.alt = character.name

    const name= document.createElement("h2")
    name.textContent = character.name

    const status = document.createElement("h3")
    status.textContent = character.status

    const specie = document.createElement("h4")
    specie.textContent = character.specie

    container.appendChild(imgCharacter)
    container.appendChild(name)
    container.appendChild(status)
    container.appendChild(specie)

    document.querySelector("main").appendChild(container)
}

function printCharacters(characters){
    characters.forEach(character => makeCharacter(character))
}