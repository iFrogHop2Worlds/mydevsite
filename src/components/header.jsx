import React from 'react';
import history from '../utils/history';
import BillyBestLogo from '../BillyBestLogo1.png'


const Header = () => {

  return (
    <header>

      <div id='header-background'>
      
        <nav>
          <a href='/'><img id="logo" src={BillyBestLogo} alt="Logo-home"></img></a>
          <ul id='nav-ul'>
            <li id='nav-li'>
              <button id='navbtn' color='primary' size='sm' onClick={() => { history.push('/contact'); window.location.reload(); }}>
                  contact
              </button>
            </li>
            <li id='nav-li'>
              <button id='navbtn' color='primary' size='sm' onClick={() => {history.push('/services'); window.location.reload(); }}>
                  services
              </button>
            </li>
            <li id='nav-li'>
              <button id='navbtn' color='primary' size='sm' onClick={() => {history.push('/projects'); window.location.reload(); }}>
                  projects
              </button>
            </li>
            <li id='nav-li'><a href='https://github.com/iFrogHop2Worlds'>
              <button id='navbtn' color='warning' size='sm' >
                  github
              </button>
              </a></li>
            <li id='nav-li'>
              <button id='navbtn' color='primary' size='sm' onClick={() => {history.push('/articles'); window.location.reload(); }}>
                articles
              </button>
            </li>
          </ul>   
        </nav>
      </div>
      <style>{`

        nav {
          border-bottom: 2px solid #ba0707;
          top:0;
        }
        #nav-ul {
          display: flex;
          list-style: none;
         
        }
        #nav-li {
          margin-right: 0.15%;
          margin-left: 0.15%;
        }

        #navbtn {
          background-color: #86fce5;
          font-size: 21px;
          opacity: 0.8;
          
        }
        #navbtn:hover {opacity: 1}
        #logo {
          display: flex;
          justify-content: center;
          padding-left: 75px;
          height: 212px;
          width: 300x;
          ;
        }
        #header-background {
          background-color: black;
          background-repeat: no-repeat; 
          background-size: cover;  
        }

      `}</style>
    </header>
  );
};

export default Header;