const key = import.meta.env.VITE_API_KEY;


import { Hover } from "../hover/hover.js";
import { printFavoritas } from "../favoritos/favoritos.js";

export const home = `https://api.unsplash.com/photos?page=0&per_page=30&client_id=${key}`;
export const random = `https://api.unsplash.com/photos/random?count=30&client_id=${key}`;
export const theme = ``;


export async function FetchImgs(endpoint) {
    try {
    const response = await fetch(endpoint);
    const data = await response.json();
    const arrFav = JSON.parse(localStorage.getItem("favoritas")) || [];
    printImgs(data);
     printFavoritas(arrFav);
    } catch (error) {
        console.error("Error fetching images:", error);
    }
    
}


export function printImgs(data) {
    const cards = document.createElement("div")
        cards.classList.add("cards")
        document.querySelector("#app").appendChild(cards)
    data.forEach(photo => {
        
        const divCard = document.createElement("div")
        divCard.classList.add("card")
        divCard.alt_description = photo.alt_description || ""
        divCard.description = photo.description || ""
        divCard.user = photo.user || {}


        const divImg = document.createElement("div")
        divImg.classList.add("card-img-hover")

         const hover = Hover(photo.likes, photo.user.total_free_photos, photo.user.portfolio_url)
        divImg.appendChild(hover) 

        const img = document.createElement("img")
        img.classList.add("card-img")
        const url = `${photo.urls.raw}&w=600&h=1000&fit=crop&crop=entropy&q=80`;
        img.src = url;
        img.alt = photo.alt_description


        const divAuthor = document.createElement("div")
        divAuthor.classList.add("card-author")

        const imgAuthor = document.createElement("img")
        imgAuthor.src = photo.user.profile_image.medium
        imgAuthor.alt = photo.user.username
        imgAuthor.classList.add("card-author-img")
        imgAuthor.style.borderColor = photo.color

        const author = document.createElement("p")
        author.textContent = photo.user.username
        author.classList.add("card-author-name")

        divAuthor.appendChild(imgAuthor)
        divAuthor.appendChild(author)

        const date = document.createElement("h3")
        date.classList.add("card-date")

        const fecha = new Date(photo.created_at)

        date.textContent = fecha.toLocaleDateString("es-ES")

        const upload = document.createElement("div")
        upload.classList.add("card-upload")

        const imgUpload = document.createElement("img")
        imgUpload.src = "./assets/Subida.png"
        imgUpload.alt = "Subida"
        imgUpload.classList.add("card-upload-img")

        upload.appendChild(imgUpload)
        upload.appendChild(date)

        divImg.appendChild(img)
        divCard.appendChild(divImg)
        divCard.appendChild(divAuthor)

        divAuthor.appendChild(upload)

        cards.appendChild(divCard)
        
        document.querySelector(".cards").appendChild(divCard)

    });
    
}
