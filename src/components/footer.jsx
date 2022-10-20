import React from 'react'

export default function Footer() {
  return (
    <div>
        <div className='footer-row' id='footer'>

            <div className='footer-col' id='testimonials'>
                <p> Testimonial 1: dummy text.....</p>
            </div>
            <div className='footer-col' id='space'>

            </div>

            <div className='footer-col' id='affiliates'>
            <h5 id='footer-title'>Affiliates</h5>
            <p> Maasdao</p>
            </div>

            <div className='footer-col' id='socials'>
                <h5 id='footer-title'>Socials</h5>
                <ul id='footer-ul'>
                    <li id='footer-li' ><a href='https://github.com/'>Github</a></li>
                    <li id='footer-li'><a>Email</a></li>
                    <li id='footer-li'><a>Youtube</a></li>
                </ul>
                
                
                
            </div>

        </div> 
        <style>{`
            #footer {
                background-color: #000000;
                height: 900px;
                width: 100%;  
                color: #faffff;
                padding-top:20px; 
            }
            .footer-col {
                float: left;
                width: 300px;
                padding: 10px;
                text-align: right;
            }
            .footer-row {
            width: 100%;
            }

            /* Clear floats after the columns */
            .footer-row:after {
            content: "";
            display: table;
            clear: both;
            }

            #footer-ul {
                list-style: none;
            }
            #footer-title {
                font-size: 21px;
            }


        `}</style>
    </div>
    
  )
}
