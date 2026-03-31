import { FetchImgs, random } from "../cards/cards";

export function loadMore() {
const divCargar = document.createElement("div")
divCargar.classList.add("cargar-mas")

document.querySelector("#app").appendChild(divCargar)

const boton = document.createElement("button")
boton.classList.add("btn-cargar-mas")
boton.textContent = "Cargar más"

divCargar.appendChild(boton)
document.body.appendChild(divCargar)
boton.addEventListener("click", () => {
    FetchImgs(random);
})
}