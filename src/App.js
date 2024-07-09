import logo from './logo.svg';
import './App.css';
import Module from './Module';
import Etudiant from './Etudiant';
import Data from './Data';

import Contact from './Contact';
import Home from './Home';
import About from './About';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './Navbar';
function App() {
  return (
    //JSX 
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
     </BrowserRouter>
      
     <h1> Hello React</h1>
     <Module />
     <Etudiant/>
     <Data />

    </div>
  )
}

export default App;
