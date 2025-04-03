import livroProtagonista from'../../assets/livroProtagonista.png'
import s from'./livrosDoados.module.scss'
import { useEffect,useState } from 'react'
import axios from 'axios'

export default function LivrosDoados (){

    const [livros,setLivros] = useState([])

    const getLivros = async() => {
        const resposta = await axios.get("https://desafio2-api-livros.onrender.com/livros")
        setLivros(resposta.data)
    }
    
    useEffect(()=>{
        getLivros()
    },[])


    return(
            <section className={s.LivrosDoados}>
                    <h2>Livros Doados</h2>
                    <section className={s.CardsLivrosDoados}>

                        {
                            livros.map((item) =>(
                                <section> 
                                    <img src = {item.image_url} alt={`Titulo do Livro ${item.titulo}`} />
                                    <h3> {item.titulo}</h3>
                                    <p>{item.autor}</p>
                                    <p>{item.categoria}</p>
                                </section>    


                            ) )
                        }

                        {/* <section>
                            <img src={livroProtagonista} alt="Imagem do livro (O protagonista)" />
                            <div>
                            <h3>O protagonista</h3>
                            <p>Susanne Andrade</p>
                            <p>Ficção</p>
                            </div>
                        </section> */}
                    </section>
            </section> 
            
        )
 }