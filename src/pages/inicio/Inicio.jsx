import s from'./inicio.module.scss'
import imagem1 from '../../assets/imagem1doacao.png'
import imagem2 from '../../assets/imagem2doacao.png'
import imagem3 from '../../assets/imagem3doacao.png'
import imagem4 from '../../assets/imagem4doacao.png'

export default function Inicio (){

    return(
        <main>
            <section className={s.primeiraSessao}>
               <h2> VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>    
            <section className={s.porqueDevoDoar}      >
                <h2>Por que devo doar?</h2>

                <section className={s.containerCards}>

                        <section >
                            <img src={imagem1} alt='Imagem ilustrando circulo social com 4 pessoas'/>
                        <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social. </p>
                        </section>

                        <section >
                            <img src={imagem2} alt='Imagem ilustrando pessoa lendo um livro'/>
                        <p> Estimula o hábito da leitura e o aprendizado contínuo. </p>
                        </section>

                        <section >
                            <img src={imagem3} alt='Imagem ilustrando 6 pessoas transformando o mundo'/>
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas. </p>
                        </section>

                        <section >
                            <img src={imagem4} alt='Imagem ilustrando balança de igualdade'/>
                        <p> Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado. </p>
                        </section>

                 </section>

                </section>     
        </main>
    )
 }