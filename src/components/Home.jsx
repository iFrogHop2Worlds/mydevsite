import React from 'react'
import logo from '../spinner.png';
import sparkles from '../sparkles1.mp4'


export default function Home() {
  return (
    <>
    <div id='background-home'>
        <video loop autoPlay>
            <source
            src={sparkles}
            type="video/mp4"
            />
            Your browser does not support the video tag.
        </video>
        <div id='content'>
                <h3>Billy Best</h3>
            {/* <img id='home-graphic' src={logo} className="App-logo" alt="logo" /> */}
                <div id='landing-cta'>
                    <p id='headline'>Custom code solutions to serve your needs.</p>
                    <p id='tagline'>traditional web, web3, closed systems.</p>    
                </div>
            <a href='/services'><button>services</button></a> <a href='/contact'><button>contact me</button></a>
        </div>
        
        </div>
    <style>{`
        #background-home {
            width: 100%;
            height: 100%;
           
        }
        #content {
            width: 100%;
            height: 50%;
            bottom: 0;
            position: fixed;
            margin-bottom:300px;
        }
        video {
            position: fixed;
            right: 0;
            bottom: 0;
            min-width: 100%;
            min-height: auto%;
            
        }
        #headline {
            padding-top: 20px;
            color: #ffe100;
            font-size: 30px;
            text-shadow: -1px -1px 0 #000000, 2px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;
        }
        #tagline {
            font-size: 16px;
            color: #ffffff;
        }
        #landing-cta { 
            background-color: #2e2e28;
            margin-left: 30%;
            margin-right: 30%;
            margin-top: 100px;
            opacity: 0.75;
            line-height: 32px;
            max-height: 200px;
            border-radius: 42px;
            outline-style: solid;
        }
        h3 {
            margin-top: 120px;
            font-size: 42px;
            font-family: Helvetica;
            color: white;
            text-shadow: -1px -1px 0 #000000, 2px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;
        }
        @media only screen and (max-width: 900px) {
            #headline {
            padding-top: 40px;
            }
            #tagline {
                margin-top: 55px;
            }
            button {
                margin-top: 100px;
            }
        }

    `}</style>
    </>     
  )
}
