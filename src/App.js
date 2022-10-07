import './App.css';
import Layout from './components/layout';
import {Routes, Route} from 'react-router-dom';
import Contact from './components/contact';
import Services from './components/services';
import Demos from './components/demos';
import Articles from './components/articles';
import Home from './components/Home';
import Footer from './components/footer';

function App() {
  
  return (

      <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Demos />} />  
        <Route path='/articles' element={<Articles />} />     
      </Routes>
      <Footer />
      </div>

  );
}

export default App;
