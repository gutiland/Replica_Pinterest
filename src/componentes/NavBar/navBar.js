import { FetchImgs} from "../cards/cards"

export function navBar() {

//LOGO
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const logoContenedor = document.createElement("div");
  logoContenedor.classList.add("logo");
  const imgLogo = document.createElement("img");
  imgLogo.src = "./assets/logo_pinterest.png";
  imgLogo.alt = "Logo_Pinterest";
  imgLogo.classList.add("img-header", "img-logo");

  logoContenedor.appendChild(imgLogo);
  nav.appendChild(logoContenedor);
  header.appendChild(nav);
  document.querySelector('#app').appendChild(header);

  //MENU
  const menu = document.createElement("div");
  menu.classList.add("nav");

  const ul = document.createElement("ul");
  const liInicio = document.createElement("li");
  const aInicio = document.createElement("a");
  ul.appendChild(liInicio);
  liInicio.appendChild(aInicio);
  aInicio.textContent = "Inicio";

  const liExplora = document.createElement("li");
  const aExplora = document.createElement("a");
  aExplora.classList.add("explora")
  liExplora.appendChild(aExplora);
  aExplora.textContent = "Explorar";
  ul.appendChild(liExplora);

  const liCrear = document.createElement("li");
  const aCrear = document.createElement("a");
  aCrear.classList.add("crear")
  liCrear.appendChild(aCrear);
  aCrear.textContent = "Crear";
  ul.appendChild(liCrear);
  menu.appendChild(ul);
  nav.appendChild(menu);

  //BUSCADOR
  const search = document.createElement("div");
  search.classList.add("search");
  const inputSearch = document.createElement("input");
  inputSearch.placeholder = "Buscar";
  search.appendChild(inputSearch);
  nav.appendChild(search);

  //NOTIFICACIONES
  const notifications = document.createElement("div");
  notifications.classList.add("notifications");
  const favsContainer = document.createElement("div");
  const imgFavs = document.createElement("img");
  imgFavs.classList.add("img-header", "img-favoritos");
  imgFavs.alt = "Favoritos";
  imgFavs.src = "./assets/corazon.png";
  favsContainer.appendChild(imgFavs);
  notifications.appendChild(favsContainer);

  const bocadilloContainer = document.createElement("div");
  const imgBocadillo = document.createElement("img");
  imgBocadillo.classList.add("img-header", "img-bocadillo");
  imgBocadillo.alt = "Bocadillo";
  imgBocadillo.src = "./assets/bocadillo.png";
  bocadilloContainer.appendChild(imgBocadillo);
  notifications.appendChild(bocadilloContainer);

  const iconoContainer = document.createElement("div");
  iconoContainer.classList.add("icono-perfil", "img-header");
  iconoContainer.textContent = "D";

  notifications.appendChild(iconoContainer);
  notifications.appendChild(bocadilloContainer);
  notifications.appendChild(favsContainer);

  nav.appendChild(notifications);

  //event listeners navbar
    
    const input = document.querySelector("input")
      input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        document.querySelector(".cards").innerHTML = ""

        FetchImgs("search", input.value);
        input.value = ""
    }
})
const logo = document.querySelector(".img-logo")
logo.addEventListener("click", () => {
    document.querySelector(".cards").innerHTML = ""
    FetchImgs("home");
    document.querySelector(".divFavsPapelera").classList.remove("divPapelera-open")
})

const explorar = document.querySelector(".explora")
explorar.addEventListener("click", () => {
    document.querySelector(".cards").innerHTML = ""
    FetchImgs("random");
    }
)


}