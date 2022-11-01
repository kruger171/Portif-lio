import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';



function Home(){
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() =>  {
    async function loadFilms() {
      const response = await api.get('movie/now_playing', {
        params: {
          api_key: '684187a736e15c2ad2d7c0c5485b54ba',
          language: 'pt-BR',
          page: 1
        }
      })
      setLoading(false)
      setFilmes(response.data.results.slice(0, 10))
    }

    loadFilms()
  })

  if(loading) {
    return(
      <div className='container'> 
      <div className='row'>
        <div className='col'>

        <div className="d-flex align-items-center">
        <strong>Carregando os filmes...</strong>
        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>

        </div>
        </div>
        </div>
      </div>
     
    )
  } 

  return(
    <div className='container'>
      <div className='row'> 
    <div className='lista-filmes'>
      {filmes.map((i) => {
        return(
          <article key={i.id}>
            <strong>{i.title}</strong>
            <img src={`https://image.tmdb.org/t/p/original${i.poster_path}`} alt={i.title} />
            <Link to={`/filme/${i.id}`} >Acess</Link>.
          </article>
        )
      })}
    </div>
      </div>
    </div>
  )
}

export default Home;