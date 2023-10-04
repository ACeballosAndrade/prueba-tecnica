import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {LandingOne} from './pages/LandingOne';
import {LandingTwo} from './pages/LandingTwo';
import { Home } from './pages/Home';
import NavBar from './components/NavBar'

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/landing-one' element={ <LandingOne/>} />
        <Route path='/landing-two' element={<LandingTwo/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
