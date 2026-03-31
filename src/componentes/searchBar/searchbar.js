
import { printImgs } from "../cards/cards.js";

export async function FetchAuthor(theme) {
    try{
    const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${theme}&client_id=LbBtisisztXV7lhbu2EBcOngME1Oq_gzkZ6mvwgfuJA`)
    const data = await response.json()
    const resultados = data.results
    
    console.log(resultados)
    printImgs(resultados)
    }catch(e){
        console.log("error")
    }
}

