import { FetchImgs, printImgs } from './componentes/cards/cards';
import { createFavs, favoritas } from './componentes/favoritos/favoritos';
import { loadMore } from './componentes/loadMore/LoadMore';
import { navBar } from './componentes/NavBar/navBar'
import { FetchAuthor, printTheme } from './componentes/searchBar/searchbar';
import './style.css'


navBar();
FetchImgs();
createFavs();
loadMore();

