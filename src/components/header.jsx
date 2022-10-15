import React from 'react';
import history from '../utils/history';


const Header = () => {

  return (
    <>
      <div id='header-background'>
        <nav>  
          <ul id='nav-ul'>
            <li id='nav-li'>
              <a href='http://localhost:3000/#'>
              <button id='navbtn' color='primary' size='sm' onClick={() => { history.push('/');}}>
                  Home
              </button>
              </a>
            </li>
            <li id='nav-li'>
              <a href='http://localhost:3000/#about-me'>
                <button id='navbtn' color='primary' size='sm'>About me</button>
              </a>
            </li>
            <li id='nav-li'>
            <a href='http://localhost:3000/#projects'>
                <button id='navbtn' color='primary' size='sm'>Work</button>
              </a>
            </li>
            <li id='nav-li'><a href="https://github.com/iFrogHop2Worlds" target="_blank" rel="noopener noreferrer">
              <button id='navbtn' color='warning' size='sm' >
                  Github
              </button>
              </a></li>
            <li id='nav-li'>
              <button id='navbtn' color='primary' size='sm' onClick={() => {history.push('/resume'); window.location.reload(); }}>
                Resume
              </button>
            </li>
          </ul>   
        </nav>
      </div>
      <style>{`
        nav {
          border-bottom: 1px solid #00ff6e;
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
          position: fixed;
          top: 0;
          width: 100%;
          z-index:1;
        }

      `}</style>
    </>
    
  );
};

export default Header;