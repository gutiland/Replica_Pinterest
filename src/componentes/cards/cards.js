const key = import.meta.env.VITE_API_KEY;


import { Hover } from "../hover/hover.js";
import { printFavoritas } from "../favoritos/favoritos.js";


export async function FetchRandom() {
    const response = await fetch(`https://api.unsplash.com/photos/random?count=30&client_id=LbBtisisztXV7lhbu2EBcOngME1Oq_gzkZ6mvwgfuJA`)
    const data = await response.json()
    
    printImgs(data)

}


export async function FetchImgs(page = 1) {
    try {
    const response = await fetch(`https://api.unsplash.com/photos?page=${page}&per_page=30&client_id=LbBtisisztXV7lhbu2EBcOngME1Oq_gzkZ6mvwgfuJA`);
    const data = await response.json();
    const arrFav = JSON.parse(localStorage.getItem("favoritas")) || [];
    printImgs(data);
     printFavoritas(arrFav);
    } catch (error) {
        console.error("Error fetching images:", error);
    }
    
}


export function printImgs(data) {
    const cards =document.createElement("div")
        cards.classList.add("cards")
    data.forEach(element => {
        
        const divCard = document.createElement("div")
        divCard.classList.add("card")
        divCard.alt_description = element.alt_description || ""
        divCard.description = element.description || ""
        divCard.user = element.user || {}


        const divImg = document.createElement("div")
        divImg.classList.add("card-img-hover")

         const hover = Hover(element.likes, element.user.total_free_photos, element.user.portfolio_url)
        divImg.appendChild(hover) 

        const img = document.createElement("img")
        img.classList.add("card-img")
        const url = `${element.urls.regular}&w=600&h=1000&fit=crop&crop=entropy&q=80`;
        img.src = url;
        img.alt = element.alt_description


        const divAuthor = document.createElement("div")
        divAuthor.classList.add("card-author")

        const imgAuthor = document.createElement("img")
        imgAuthor.src = element.user.profile_image.medium
        imgAuthor.alt = element.user.username
        imgAuthor.classList.add("card-author-img")
        imgAuthor.style.borderColor = element.color

        const author = document.createElement("p")
        author.textContent = element.user.username
        author.classList.add("card-author-name")

        divAuthor.appendChild(imgAuthor)
        divAuthor.appendChild(author)

        const date = document.createElement("h3")
        date.classList.add("card-date")

        const fecha = new Date(element.created_at)

        date.textContent = fecha.toLocaleDateString("es-ES")

        const upload = document.createElement("div")
        upload.classList.add("card-upload")

        const imgUpload = document.createElement("img")
        imgUpload.src = "./public/assets/Subida.png"
        imgUpload.alt = "Subida"
        imgUpload.classList.add("card-upload-img")

        upload.appendChild(imgUpload)
        upload.appendChild(date)

        divImg.appendChild(img)
        divCard.appendChild(divImg)
        divCard.appendChild(divAuthor)

        divAuthor.appendChild(upload)

        
        cards.appendChild(divCard)
        document.querySelector("#app").appendChild(cards)
        document.querySelector(".cards").appendChild(divCard)





    });
}
