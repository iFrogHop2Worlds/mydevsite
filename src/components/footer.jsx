import React from 'react'

export default function Footer() {
  return (
    <div>
        <div id='footer'>
            <ul id='footer-ul'>
                <li id='footer-li'>testimonials
                    <p> </p>
                    <li id='footer-li'>Person1: easy to work with, quality work...</li>
                </li>
                <li id='footer-li'>Affiliates
                    <p> </p>
                    <li id='footer-li'>maasdao</li>
                </li>
                <li id='footer-li'>socials
                    <p> </p>
                    <li id='footer-li'>github</li>
                    <li id='footer-li'>email</li>
                    <li id='footer-li'>twitter</li>
                </li>
            </ul>
        </div> 
        <style>{`
            #footer {
                background-color: #000000;
                height: 300px;
                width: 100%;  
                color: #faffff;
                padding-top:20px;
     
           
            
            }
            #footer-ul {
                display: flex;
                list-style: none;
                padding-top: 21px;
            }
           #footer-li {
                width: 330px;
                line-height: 12px;
                padding-right: 6%;
                padding-left: 6%;
            }
        `}</style>
    </div>
    
  )
}
