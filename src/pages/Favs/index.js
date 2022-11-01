import {useEffect, useState} from 'react';
import './favs.css'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';



function Favs() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const myList = localStorage.getItem('@primeflix')
        setFilmes(JSON.parse(myList) || [])
    })

    function handleExc(id) {
       let filterFilm = filmes.filter( (i) => {
        return (i.id !== id)
       })

       setFilmes(filterFilm)
       localStorage.setItem('@primeflix', JSON.stringify(filterFilm))
       toast.success('Filme excluido da lista')
    }

    return (
   
    <div className='meus-filmes'>
        <h1 className='h1 paragraf'>Meus Favoritos</h1>

        {filmes.length === 0 && <h1 className='h1 text-warning'>Você não possui um filme salvo aqui. 

            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-emoji-smile-upside-down ml-5" viewBox="0 0 16 16">
                <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0-1a8 8 0 1 1 0 16A8 8 0 0 1 8 0z"/>
                <path d="M4.285 6.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 4.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 3.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 9.5C7 8.672 6.552 8 6 8s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5zm4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5z"/>
            </svg>

        </h1>}
   
        <ul id="div-center">

        {filmes.map( i => {
            return(
                <li key={i.id}>
                    <span className='spn-title'>{i.title}</span>
                    <hr></hr>
                    <button type='button' className='btn btn-info ml-5 ver'>
                            <Link to={`/filme/${i.id}`}>Ver detalhes</Link>
                    </button> 

                    <button type='button' className='btn btn-danger exl' onClick={ () => handleExc(i.id) }>
                            <Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                            </Link>
                    </button> 
                    
                       
                    
                    
                
                
                </li>
      
             
               

            

            )
            
        })}
 
        </ul>
    </div>
       
       


    )
}

export default Favs;