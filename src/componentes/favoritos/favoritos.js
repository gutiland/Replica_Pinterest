export const favoritas = JSON.parse(localStorage.getItem("favoritas")) || [];

export function createFavs(){

const divFavs = document.createElement("div")
divFavs.classList.add("favs")
document.querySelector("#app").appendChild(divFavs)



const papelera = document.createElement("img")
papelera.src = "./assets/basura.png"
papelera.alt = "Papelera"
papelera.classList.add("papelera")
const divFavsPapelera = document.createElement("div")
divFavsPapelera.classList.add("divFavsPapelera")
divFavsPapelera.appendChild(papelera)
divFavsPapelera.appendChild(divFavs)
document.querySelector("#app").appendChild(divFavsPapelera)

papelera.addEventListener("click", () => {
    divFavsPapelera.classList.remove("divPapelera-open")
    document.querySelector(".favs").innerHTML = ""
    favoritas.length = 0
    localStorage.removeItem("favoritas")

    const likedElements = document.querySelectorAll(".liked")
    likedElements.forEach(element => {
        element.classList.remove("liked")
        const nLikes = element.querySelector(".nLikes")
        if (nLikes) {
            nLikes.textContent = Number(nLikes.textContent) - 1
        }
    })

}) 
 document.querySelector(".img-favoritos").addEventListener("click", () => {

    if (divFavsPapelera.classList.contains("divPapelera-open")) {
        divFavsPapelera.classList.remove("divPapelera-open")
    } else {
        divFavsPapelera.classList.add("divPapelera-open")
    }
}) 

}

export function printFavoritas(arrFav) {
    const divFavs = document.querySelector(".favs")

    if (divFavs.innerHTML !== "") {
        divFavs.innerHTML = ""
    }

    arrFav.forEach(element => {



        const divFav = document.createElement("div")
        divFav.classList.add("fav")


        const img = document.createElement("img")
        const p = document.createElement("p")
        img.src = element.img
        img.alt = element.author
        p.textContent = element.author
        divFav.appendChild(img)
        divFav.appendChild(p)
        document.querySelector(".favs").appendChild(divFav)

    });

}

 