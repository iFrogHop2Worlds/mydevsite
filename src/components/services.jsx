import React from 'react'

export default function Services() {
  return (
    <div id='background'>
    <p>under construction</p>
      <ul id='services-ul'>
            <li>
              <section id='services' color='primary' size='sm' onClick={() => {}}>
                  Consultation
              </section>
            </li>
            <li>
              <section id='services' color='primary' size='sm' onClick={() => {}}>
                  Modernize your codebase
              </section>
            </li>
            <li>
              <section id='services' color='primary' size='sm' onClick={() => {}}>
                  Applications/websites
              </section>
            </li>
          </ul>
        <style>{`
        #background {
          background-color: #1e282e;
          color: #ffffff;
          height: 900px;
          max-height: 650px;
          width: 100%;
          padding-top: 20px;
        }
        #services {
          height: 35px;
          width: 160px; 
          padding-left: 10%; 
          padding-right: 10%; 
          line-height: 1.6;
        }
        #services-ul {
          
        }
      `}</style>
    </div>
  )
}
