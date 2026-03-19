import { favoritas, printFavoritas } from "../favoritos/favoritos"


export const Hover = (likesNumber, photosNumber, href) => {

    const fotos = document.createElement("div")
    const visitar = document.createElement("a")
    const likes = document.createElement("div")
    likes.classList.add("likes")


    visitar.textContent = "Visitar"
    visitar.href = href
    if (href === null) {
        visitar.href = "https://unsplash.com/es"
    }
    visitar.target = "_blank"
    visitar.classList.add("hover-visit")
    const nFotos = document.createElement("p")
    nFotos.textContent = likesNumber
    const nLikes = document.createElement("p")
    nLikes.textContent = photosNumber
    nLikes.classList.add("nLikes")

    const camara = document.createElement("img")
    camara.src = "./public/assets/camara.png"
    camara.alt = "camara"
    const corazones = document.createElement("img")
    corazones.src = "./public/assets/corazon.png"
    corazones.alt = "likes"


    const div = document.createElement("div")
    div.classList.add("hover")

    fotos.appendChild(camara)

    fotos.appendChild(nFotos)
    div.appendChild(fotos)
    div.appendChild(visitar)
    likes.appendChild(corazones)
    likes.appendChild(nLikes)

    likes.addEventListener("click", (e) => {
        const target = e.currentTarget;
        const card = target.closest(".card");

        let aFav = null;
        if (card) {
            const authorImg = card.querySelector(".card-img").src;
            const authorName = card.querySelector(".card-author-name").textContent;
            aFav = { "author": authorName, "img": authorImg };
        }

        target.classList.toggle("liked");

        if (target.classList.contains("liked")) {
            nLikes.textContent = Number(nLikes.textContent) + 1;
            if (aFav) {
                const existe = favoritas.some(f => f.img === aFav.img);
                if (!existe) {
                    favoritas.push(aFav);
                    localStorage.setItem("favoritas", JSON.stringify(favoritas));
                }
            }
        } else {
            nLikes.textContent = Number(nLikes.textContent) - 1;
            if (aFav) {
                const index = favoritas.findIndex(f => f.img === aFav.img);
                if (index > -1) {
                    favoritas.splice(index, 1);
                }
            }
        }
        const divFavsPapelera = document.querySelector(".divFavsPapelera")
        if (!divFavsPapelera.classList.contains("divPapelera-open")) {
            divFavsPapelera.classList.add("divPapelera-open");
        }
        printFavoritas(favoritas);
    });

    div.appendChild(likes);
    return div;
}
