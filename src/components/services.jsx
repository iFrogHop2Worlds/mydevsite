import React from 'react'
import Footer from './footer'


export default function Services() {
  return (
    <div id='background'>

      <ul id='services-ul'>
            <li id='services'>
              <section color='primary' size='sm' onClick={() => {}}>
                  Consultation
              </section>
            </li>
            <li id='services'>
              <section color='primary' size='sm' onClick={() => {}}>
                  Modernize your codebase
              </section>
            </li>
            <li id='services'>
              <section color='primary' size='sm' onClick={() => {}}>
                  Applications/websites
              </section>
            </li>
            <li id='services'>
              <section color='primary' size='sm' onClick={() => {}}>
                  Application security
              </section>
            </li>
          </ul>
   
        <style>{`
        #background {
          height: 600px;
          background-color: #1e282e;
          color: #ffffff;
          padding-top: 120px;
          
        
        }
        #services {
          height: 300px;
       
          line-height: 1.6;
          
        }
        #services-ul {

        }
        li {

        }
      `}</style>
    </div>
  )
}
