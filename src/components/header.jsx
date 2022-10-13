import React from 'react';
import history from '../utils/history';
import BillyBestLogo from '../BillyBestLogo1.png'


const Header = () => {

  return (
    <header>

      <div id='header-background'>
      
        <nav>
        
          <ul id='nav-ul'>
            <li id='nav-li'>
              <button id='navbtn' color='primary' size='sm' onClick={() => { history.push('/'); window.location.reload(); }}>
                  Home
              </button>
            </li>
            <li id='nav-li'>
              <button id='navbtn' color='primary' size='sm' onClick={() => {history.push('/services'); window.location.reload(); }}>
                  About me
              </button>
            </li>
            <li id='nav-li'>
              <button id='navbtn' color='primary' size='sm' onClick={() => {history.push('/projects'); window.location.reload(); }}>
                  Projects
              </button>
            </li>
            <li id='nav-li'><a href='https://github.com/iFrogHop2Worlds'>
              <button id='navbtn' color='warning' size='sm' >
                  Github
              </button>
              </a></li>
            <li id='nav-li'>
              <button id='navbtn' color='primary' size='sm' onClick={() => {history.push('/articles'); window.location.reload(); }}>
                Resume
              </button>
            </li>
          </ul>   
        </nav>
      </div>
      <style>{`

        nav {
          border-bottom: 1px solid #00ff6e;
          top:0;
          display: flex;
          justify-content: center;
        }
        #nav-ul {
          display: flex;
          list-style: none;
          justify-content: center;
          padding: 0;
          margin: 0;
          width: 20px;
         
        }
        #nav-li {

        }

        #navbtn {
          margin: 5px;
          background-color: #001c0c;
          color: white;
          font-size: 16px;
          opacity: 0.8;
          border: 1px solid #00ff6e;
          width: 100px;
          
        }
        #navbtn:hover {opacity: 1; color: #00ff6e;}

        #header-background {
          background-color: black;

        }

      `}</style>
    </header>
  );
};

export default Header;