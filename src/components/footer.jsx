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
                margin-top: 230px;
                background-color: #000000;
                height: 300px;
                max-height: 200px;
                width: 100%;  
                color: #faffff;
            }
            ul {
                display: flex;
                list-style: none;
                padding-top: 21px;
            }
            li {
                line-height: 12px;
                margin-right: 11%;
                margin-left: 11%;
            }
        `}</style>
    </div>
    
  )
}
