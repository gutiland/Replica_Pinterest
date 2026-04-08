import { FetchImgs} from './componentes/cards/cards';
import { createFavs, } from './componentes/favoritos/favoritos';
import { loadMore } from './componentes/loadMore/LoadMore';
import { navBar } from './componentes/NavBar/navBar'
import './style.css'


navBar();
FetchImgs("home");
createFavs();
loadMore();

