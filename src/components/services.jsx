import React from 'react'

export default function Services() {
  return (
    <div id='background'>
     <div class="row">
      <div class="column">Websites/Applications</div>
      <div class="column">Update Codebase</div>
      <div class="column">Security Audit</div>
      <div class="column">Consultation</div>
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
