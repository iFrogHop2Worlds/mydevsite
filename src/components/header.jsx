import React from 'react';
import history from '../utils/history';
import logo from '../logo.svg';
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
              <button color='primary' size='sm' onClick={() => { history.push('/contact'); window.location.reload(); }}>
                  contact me
              </button>
            </li>
            <li id='nav-li'>
              <button color='primary' size='sm' onClick={() => {history.push('/services'); window.location.reload(); }}>
                  services
              </button>
            </li>
            <li id='nav-li'>
              <button color='primary' size='sm' onClick={() => {history.push('/demos'); window.location.reload(); }}>
                  demos/applications
              </button>
            </li>
            <li id='nav-li'><a href='https://github.com/iFrogHop2Worlds'>
              <button color='warning' size='sm' >
                  github
              </button>
              </a></li>
            <li id='nav-li'>
              <button color='primary' size='sm' onClick={() => {history.push('/articles'); window.location.reload(); }}>
                articles
              </button>
            </li>
          </ul>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
              under construction
          </header>
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
          padding-left: 10px;
          margin-left: 0.5rem;
          line-height: 12px;
        }
        #nav-li:first-child {
          margin-left: auto;
        }
        #logo {
          padding: 25px;
          height: 120px;
          width: 120px;
        }
        #header-background {
          background-image: url("https://images8.alphacoders.com/714/714662.png");
        }
      `}</style>
    </header>
  );
};

export default Header;