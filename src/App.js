import './App.css';
import {Routes, Route} from 'react-router-dom';
import Contact from './components/contact';
import Services from './components/services';
import Demos from './components/demos';
import Resume from './components/resume';
import Home from './components/Home';
import Header from './components/header';
import Footer from './components/footer';
import ProjectSingle from './components/project-single';
import Dashboard from './components/dashboard';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Profile from './components/auth/profile';

function App() {
  
  return (

      <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Demos />} />  
        <Route path='/resume' element={<Resume />} /> 
        <Route path='/product-single' element={<ProjectSingle />} />    
        <Route path='/dashboard' element={<Dashboard />} />  
        <Route path='/login' element={<Login />} />    
        <Route path='/register' element={<Register />} /> 
        <Route path='/profile' element={<Profile />} /> 
      </Routes>
      <Footer />
      </div>

  );
}

export default App;
