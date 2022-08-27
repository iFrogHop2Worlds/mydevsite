import React from 'react';
import history from '../utils/history';
import BillyBestLogo from '../BillyBestLogo1.png'

const Header = () => {

  return (
    <header>
      
      <nav>
        <div id='header-background'>
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
              <button id='navbtn' color='primary' size='sm' onClick={() => {history.push('/demos'); window.location.reload(); }}>
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
        </div>
      </nav>

      <style>{`
        nav {
          border-bottom: 1px solid #ba0707;
        }
        #nav-ul {
          display: flex;
          list-style: none;
        }
        #nav-li {
          margin-right: 0.35%;
          margin-left: 0.35%;
        }
        #nav-li:first-child {

        }
        #navbtn {
          background-color: #86fce5;
          font-size: 21px;
          border-radius: 42px;
          opacity: 0.8;
          
        }
        #navbtn:hover {opacity: 1}
        #logo {
          padding-left: 75px;
          height: 212px;
          width: 300x;
        }
        #header-background {
          height: 300px;
          background-image: url("https://images2.imgbox.com/89/bd/PQYOUvLe_o.png");
        }
      `}</style>
    </header>
  );
};

export default Header;