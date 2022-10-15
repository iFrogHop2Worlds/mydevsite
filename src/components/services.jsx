import React from 'react'

export default function Services() {
  return (
    <div id='background'>
     <div class="row">
      <div class="column">
        <h4>Websites/Applications</h4>
        <p>Get a custom website or application purpose built for your needs</p>
      </div>
      <div class="column">
        <h4>Update Codebase</h4>
        <p>Have an old application and want to update those dependencies but worried about breaking things? I got you. I will update and refactor your code as required to ensure a smooth transition</p>
      </div>
      <div class="column">
        <h4>Security Audit</h4>
        <p>penetration testing and report</p>
      </div>
      <div class="column">
        <h4>Consultation</h4>
        <p>come to me with your problems and we'll figure something out.</p>
      </div>
    </div> 


        <style>{`
        #background {
          height: 600px;
          background-color: #1e282e;
          color: #ffffff;
          padding-top: 120px;  
        }
        .column {
          float: left;
          width: 350px;
          padding: 10px;
          
        }

        /* Clear floats after the columns */
        .row:after {
          content: "";
          display: table;
          clear: both;
        }
      `}</style>
    </div>
  )
}
