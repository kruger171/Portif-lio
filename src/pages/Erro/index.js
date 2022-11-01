import { Link } from 'react-router-dom';
import './erro.css'
function Erro() {
    return(
        <div>
             <h1 className='text-danger  p-5'>Error not found (Pagina não encontrada).</h1>
             <Link to='/' className='a-home'>Home</Link>

        </div> 
    )
}

export default Erro;