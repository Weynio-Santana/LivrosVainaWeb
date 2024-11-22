import livro from '../../assets/livro.png';
import lupa from '../../assets/lupa.png';
import { BrowserRouter,Routes,Route,Link } from "react-router-dom" 
import Inicio from "../../pages/inicio/Inicio"
import LivrosDoados from "../../pages/livrosDoados/LivrosDoados"
import QueroDoar from "../../pages/queroDoar/QueroDoar"
import s from"./header.module.scss"

export default function Header(){

    return(
    <BrowserRouter>
            <header>
              <section className={s.logoHeader}>
            <img src={livro} alt="Logo da Empresa" />
            <h1>Livros Vai na Web</h1>
            </section>
                 <nav className={s.navHeader}>
                    <ul>
                        <li> <Link className={s.link}   to='/'> Inicio </Link>           </li>
                        <li> <Link className={s.link}  to='LivrosDoados'> Livros Doados</Link>     </li>
                        <li> <Link className={s.link}  to='QueroDoar'> Quero Doar </Link>       </li>
                    </ul>
                 </nav>

                 <section className={s.barradeBusca}>
                          <input type="search" name="" id="" placeholder="O que você procura?"/>
                         <button>
                            <img src={lupa} alt="Imagem de uma lupa branca"/>
                             </button>
                                  </section>
            </header>

            <Routes>

              <Route path='/'  element={<Inicio/>}/>
              <Route path='/LivrosDoados' element={<LivrosDoados/>}  />
              <Route path='/QueroDoar'element={<QueroDoar/>}   />

            </Routes>


    </BrowserRouter>)
}