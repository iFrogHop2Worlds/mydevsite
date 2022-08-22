import './App.css';
import Layout from './components/layout';
import {Routes, Route} from 'react-router-dom';
import Contact from './components/contact';
import Services from './components/services';
import Demos from './components/demos';
import Articles from './components/articles';
import Home from './components/Home';

function App() {
  
  return (
    <Layout>
      <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/demos' element={<Demos />} />  
        <Route path='/articles' element={<Articles />} />     
      </Routes>
      </div>
    </Layout>
  );
}

export default App;
