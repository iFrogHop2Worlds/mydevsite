import React from 'react';
import history from '../utils/history';
import BillyBestLogo from '../BillyBestLogo1.png'
// import { magic } from '../lib/magic';
// import { UserContext } from '../lib/UserContext';


const Header = () => {
//   const [user, setUser] = useContext(UserContext);

//   const logout = () => {
//     magic.user.logout().then(() => {
//       setUser({ user: null });
//       history.push('/');
//     });
//     console.log("logout button fired")
//   };

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
                  demos
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
          
          border-bottom: 1px solid #f0f0f0;
        }
        #nav-ul {
          display: flex;
          list-style: none;
        }
        #nav-li {
          line-height: 12px;
          margin-right: 1%;
          margin-left: 1%;
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
          height: 200px;
          width: 300x;
        }
        #header-background {
          height: 280px;
          background-image: url("https://images2.imgbox.com/89/bd/PQYOUvLe_o.png");
        }
      `}</style>
    </header>
  );
};

export default Header;