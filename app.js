// import { characters } from "./data"

// import { characters } from "./data.js"


const name_input = document.getElementById("search")

const url = "https://rickandmortyapi.com/api/character"

name_input.addEventListener("input", ()=> search())

function search(){
    const main = document.querySelector("main")
    main.innerHTML = ""
    const NewURL = `https://rickandmortyapi.com/api/character/?name=${name_input.value}`
    getCharacter(NewURL)
}

function makeCharacter(character){
    const container = document.createElement("div")
    container.id = "container"

    const imgCharacter = document.createElement("img")
    imgCharacter.id = "img-container"
    imgCharacter.src = character.image
    imgCharacter.alt = character.name

    const name= document.createElement("h2")
    name.textContent = character.name

    const status = document.createElement("h3")
    status.textContent = `Status: ${character.status}`

    const specie = document.createElement("h4")
    specie.textContent = `Species: ${character.species}`

    container.appendChild(imgCharacter)
    container.appendChild(name)
    container.appendChild(status)
    container.appendChild(specie)

    document.querySelector("main").appendChild(container)
}

const getCharacter = async (URL) => {
    const response  = await fetch(URL)
    const data = await response.json()
    try {
        printCharacters(data.results)
    } catch (error) {
        console.log("character not found")
    }
}
try {
    getCharacter(url)
} catch (error) {
    console.log("Function getCharacter is not defined")
}

function printCharacters(characters){
    characters.forEach(character => makeCharacter(character))
}

// function getCharacter (URL){
//     fetch(URL)
//     .then(Response => Response.json())
//     .then( data => console.log(data.results))
// }

 

