import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../services/api'
import './filmeinfo.css'
import { toast } from 'react-toastify';

function Filme(){
  const {id} = useParams()
  const [loading, setLoading] = useState(true);
  const [filme, setFilme] = useState([]);
  const navigation = useNavigate()


  useEffect(() => {
    async function loadDetails() {
      await api.get(`/movie/${id}` , {
        params: {
          api_key: '684187a736e15c2ad2d7c0c5485b54ba',
          language: 'pt-BR',
        }
      })
      .then(r => {
        setFilme(r.data)
        setLoading(false)
      })

      .catch(() => {
        console.log('not encontred')
        navigation('/', { replace: true })
        return;
      })
    }
    

    loadDetails()
    
  }, [navigation, id])

  function saveFilm() {
    const myList = localStorage.getItem('@primeflix') 

    let saveFilms = JSON.parse(myList) || [];

    const hasFilm = saveFilms.some((f) => f.id === filme.id )

    if(hasFilm) {
      toast.warn('Este filme já está na lista.')

      return;
    }

    saveFilms.push(filme);
    localStorage.setItem('@primeflix', JSON.stringify(saveFilms))
    toast.success('Filme salvo na lista!')

  }

  if(loading) {
    return(
      <div className='container'> 
      <div className='row'>
        <div className='col'>

        <div className="d-flex align-items-center">
        <strong>Carregando os detalhes...</strong>
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
        <div className='col'>

    <div className='filme-info'>
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`} alt={filme.title} />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <br></br>
      <strong>Avaliação: {parseInt(filme.vote_average)} / 10</strong> <br></br>
      <strong>Status: {filme.status}</strong>

    <div className='col-6'>

    <div className='area-btns mt-4 text-light'>
      <button onClick={saveFilm} type='button' className='btn btn-success mb-2'>Salvar</button> 
      <br></br>
      <button type='button' className='btn btn-info'>
        <a target='blank' rel='external' href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a>
      </button>

    </div>
    </div>
    </div>
    

    </div>
    </div>
    </div>

    
  )
}

export default Filme;