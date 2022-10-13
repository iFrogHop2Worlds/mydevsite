import React from 'react'

export default function Footer() {
  return (
    <div>
        <div id='footer'>
            <ul>
                <li>testimonials
                    <p> </p>
                    <li>Person1: easy to work with, quality work...</li>
                </li>
                <li>Affiliates
                    <p> </p>
                    <li>maasdao</li>
                </li>
                <li>socials
                    <p> </p>
                    <li>github</li>
                    <li>email</li>
                    <li>twitter</li>
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
            ul {
                display: flex;
                list-style: none;
                padding-top: 21px;
            }
            li {
                width: 330px;
                line-height: 12px;
                padding-right: 6%;
                padding-left: 6%;
            }
        `}</style>
    </div>
    
  )
}
