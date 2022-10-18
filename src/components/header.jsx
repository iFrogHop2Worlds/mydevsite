import React from 'react';
import history from '../utils/history';
import Hamburger from './hamburger';

const Header = () => {

  return (
    <>

      <div class="topnav" id='header-background' >
   
        <div className='navigation' id='myLinks'>  
              <a href='http://billsdev.space/#'>
              <button id='navbtn' color='primary' size='sm' onClick={() => { history.push('/');}}>
                  Home
              </button>
              </a>

              <a href='http://billsdev.space/#about-me'>
                <button id='navbtn' color='primary' size='sm'>About me</button>
              </a>

              <a href='http://billsdev.space/#projects'>
                <button id='navbtn' color='primary' size='sm'>Work</button>
              </a>
              <a href="https://github.com/iFrogHop2Worlds" target="_blank" rel="noopener noreferrer">
              <button id='navbtn' color='warning' size='sm' >
                  Github
              </button>
              </a>
              <button id='navbtn' color='primary' size='sm' onClick={() => {history.push('/resume'); window.location.reload(); }}>
                Resume
              </button>
            
        </div>

        <Hamburger />
      </div>
      <style>{`
        #myLinks {
          border-bottom: 1px solid #00ff6e;
          display: flex;
          justify-content: center;
        }
  

        #navbtn {
          margin: 5px;
          background-color: #001c0c;
          color: white;
          font-size: 16px;
          opacity: 0.8;
          border: 1px solid #ff8000;
          width: 100px;
          
        }
        #navbtn:hover {opacity: 1; color: #00ff6e;}

        #header-background {
          background-color: black;
          background-image: url("https://as2.ftcdn.net/v2/jpg/01/21/94/09/1000_F_121940968_O9M6zOz1EZAOQuzGTfn8aYBbhaIAVNjj.jpg");
          bCkground-size: 10%, 10%;
          position: fixed;
          top: 0;
          width: 100%;
          z-index:1;
        }

        @media only screen and (max-width: 800px) {
          #myLinks {
            display: none;

        }
        }

      `}</style>
    </>
    
  );
};

export default Header;