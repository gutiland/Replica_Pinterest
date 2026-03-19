import { FetchImgs, FetchRandom } from "../cards/cards"
import { FetchAuthor } from "../searchBar/searchbar"

export function navBar() {
document.querySelector('#app').innerHTML = `
<header>
      <nav>
        <div class="logo">
          <img class="img-header img-logo" src="public/assets/logo_pinterest.png" alt="Logo_Pinterest">
        </div>
        <div class="nav">
          <ul>
            <li><a class="inicio" href="https://es.pinterest.com/" target="_blank">Inicio</a>
            </li>
            <li><a class="explora" href="#">Explorar</a></li>
            <li><a href="https://create.pinterest.com/es-es/" target="_blank">Crear</a></li>
          </ul>
        </div>
        <div class="search">
          <input type="text" placeholder="Buscar">
        </div>
        <div class="notifications">
          <div><img class="img-header img-favoritos" src="public/assets/corazon.png" alt="Favoritos"></div>
          <div><img class="img-header img-bocadillo" src="public/assets/bocadillo.png" alt="Bocadillo"></div>
          <div class="icono-perfil img-header"> D</div>
        </div>
      </nav>
    </header>`
    
    const input = document.querySelector("input")
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        document.querySelector(".cards").innerHTML = ""
        const theme = input.value
        FetchAuthor(theme);
        input.value = ""
    }
})
const logo = document.querySelector(".img-logo")
logo.addEventListener("click", () => {
    document.querySelector(".cards").innerHTML = ""
    FetchImgs()
    document.querySelector(".divFavsPapelera").classList.remove("divPapelera-open")
})

const explorar = document.querySelector(".explora")
explorar.addEventListener("click", () => {
    document.querySelector(".cards").innerHTML = ""
    FetchRandom();
    }
)


}