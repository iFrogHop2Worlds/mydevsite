import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
 import getReq from '../utils/getReq'
export default function Footer() {

    const [faq, setFaq] = useState([]);
    let i = Math.floor(Math.random() * faq.length);
    useEffect(() => {
        getReq("http://138.197.151.61:7500/user-api/get-questions")
        .then((res) => {
            setFaq(res);
        })
        
    }, []);

  return (
    <div>
        <div className='footer-row' id='footer'>
            <div className='footer-col' id='testimonials'>
            <Link to={'/FAQs'}><h3>FAQ's</h3></Link>
            { faq.length > 1 &&
                <>

                    <p>Random question from:  {faq[i].name?faq[i].name: "anonymous"}</p>
                    <p>Q: {faq[i].question?faq[i].question: "error: corrupted data"}</p>
                    <p>A: {faq[i].reply?faq[i].reply: "no reply yet"}</p>
                </>
            }  
                
                
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
                width: 17%;
                padding-left: 16%;
                text-align: left;
                
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
            #footer-li {
                margin-left: -40px;
            }
            #footer-title {
                font-size: 21px;
            }
            #testimonials {
               padding-top: 20px;
              
               
            }
            #socials {
                
            }
            #affiliates {
               
            }


        `}</style>
    </div>
    
  )
}
