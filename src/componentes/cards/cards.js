const key = import.meta.env.VITE_API_KEY;


import { Hover } from "../hover/hover.js";
import { printFavoritas, favoritas } from "../favoritos/favoritos.js";


export async function FetchImgs(type, query = "") {

  let url = "";

  if (type === "home") {
    url = `https://api.unsplash.com/photos?page=0&per_page=30&client_id=${key}`;
  }

  if (type === "random") {
    url = `https://api.unsplash.com/photos/random?count=30&client_id=${key}`;
  }

  if (type === "search") {
    url = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${key}`;
  }

  const res = await fetch(url);
  const data = await res.json();
  let images = ""
  if(type === "search"){images = data.results}else{images = data}
    printImgs(images);
   printFavoritas(favoritas)
    
  return data;
};


const cards = document.createElement("div")
export function printImgs(data) {
    
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
