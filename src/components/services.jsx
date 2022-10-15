import React from 'react'

export default function Services() {
  return (
    <div id='background'>
 
    <div id='service-header-text'>
    <p>Traditional web and web3/blockchain services. Whether you want to build a new application, upgrade your existing one, utilize the blockchain or have your apps, dApps and smart contracts audited. I got you covered!</p>
    <div id='service-cta'>
      <a href='/services'><button  id='navbtn'>Book now</button></a> <a href='/contact'><button  id='navbtn'>inquire form</button></a>
    </div>
    </div>

    <div className='center-content'>
    <div class="row">
      <div class="column">
        <h4>Websites / Applications</h4>
        <p>Get a custom website or application purpose built for your needs.</p>
      </div>
      <div class="column">
        <h4>Update Codebase</h4>
        <p>Have an old application and want to update the dependencies but are worried about breaking things? I will update and refactor your code as required to ensure a smooth process.</p>
      </div>
      <div class="column">
        <h4>Security Audit</h4>
        <p>penetration testing and vulnerabilitiy report.</p>
      </div>
      <div class="column">
        <h4>Consultation</h4>
        <p>Bring me your problems and we'll find a solution together.</p>
      </div>
    </div> 
    </div>




        <style>{`
        #background {
          height: auto;
          background-color: #1e282e;
          color: #ffffff;
          padding-top: 120px;  
          font-family: 'Poppins', sans-serif;

        }
        .center-content {
          display: grid;
          justify-content: center;
        }

        .column {
          float: left;
          width: 300px;
          padding: 10px;
          text-align: left;

        }
        .row {
         
        }

        /* Clear floats after the columns */
        .row:after {
          content: "";
          display: table;
          clear: both;
        }
        #service-header-text {
          padding-left: 16%;
          padding-right: 16%;
          padding-bottom: 75px;
          padding-top: 3%;
          font-size: 21px;
      
        }
        h4 {
          text-align: center;
          font-size: 21px;
          font-family: 'Roboto Mono', monospace;
          border-bottom: 3px solid #00ff6e;
          width: 300px;
        }
        #service-cta {
          padding-top: 100px;  
          font-family: 'Poppins', sans-serif;
        }

        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&family=Roboto+Mono:wght@100&display=swap');
      `}</style>
    </div>
  )
}
