import { Hover } from "../hover/hover.js";


let arrTheme = []
export async function FetchAuthor(theme) {
    const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${theme}&client_id=LbBtisisztXV7lhbu2EBcOngME1Oq_gzkZ6mvwgfuJA`)
    const data = await response.json()
    const resultados = data.results
    arrTheme = resultados

    console.log(resultados)
    printTheme(theme)
}

export function printTheme(theme) {
    
    arrTheme.forEach(photo => {
        
           
                console.log(photo)

                const divCard = document.createElement("div")
                divCard.classList.add("card")
                divCard.alt_description = photo.alt_description || ""
                divCard.description = photo.description || ""
                divCard.user = photo.user || {}


                const divImg = document.createElement("div")
                divImg.classList.add("card-img-hover")

                 const hover = Hover(photo.user.total_photos, photo.likes, photo.user.portfolio_url)
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
                imgUpload.src = "./public/assets/Subida.png"
                imgUpload.alt = "Subida"
                imgUpload.classList.add("card-upload-img")


                upload.appendChild(imgUpload)
                upload.appendChild(date)

                divImg.appendChild(img)
                divCard.appendChild(divImg)
                divCard.appendChild(divAuthor)

                divAuthor.appendChild(upload)

                document.querySelector(".cards").appendChild(divCard)
            
        



    })
}
