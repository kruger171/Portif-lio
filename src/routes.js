import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Filme from './pages/Filme';
import Erro from './pages/Erro'
import Header from './components/Header';
import Favs from './pages/Favs';

function RoutesApp(){
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/filme/:id" element={ <Filme/> } />
        <Route path='/favoritos' element={ <Favs />}></Route>
        <Route path='*' element={<Erro />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;