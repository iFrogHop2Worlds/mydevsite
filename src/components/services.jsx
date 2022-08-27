import React from 'react'

export default function Services() {
  return (
    <div>
      <ul id='services-ul'>
            <li>
              <section id='services' color='primary' size='sm' onClick={() => {}}>
                  Consultation
              </section>
            </li>
            <li>
              <section id='services' color='primary' size='sm' onClick={() => {}}>
                  Modnernize your codebase (upgrade depenedencies)
              </section>
            </li>
            <li>
              <section id='services' color='primary' size='sm' onClick={() => {}}>
                  Applications/websites
              </section>
            </li>
          </ul>
          <style>{`
        #services {
          height: 35px;
          width: 160px; 
          padding: 10%; 
          line-height: 1.6;
        }
        #services-ul {
          padding-bottom: 20px;
        }
    `}</style>
    </div>
  )
}
