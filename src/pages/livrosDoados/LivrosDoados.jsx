import livroProtagonista from'../../assets/livroProtagonista.png'
import s from'./livrosDoados.module.scss'

export default function LivrosDoados (){

    return(
            <section className={s.LivrosDoados}>
                    <h2>Livros Doados</h2>
                    <section className={s.CardsLivrosDoados}>
                        <section>
                            <img src={livroProtagonista} alt="Imagem do livro (O protagonista)" />
                            <div>
                            <h3>O protagonista</h3>
                            <p>Susanne Andrade</p>
                            <p>Ficção</p>
                            </div>
                        </section>
                    </section>
            </section> 
            
        )
 }