import React from 'react'
import logo from '../spinner.png';
export default function Home() {
  return (
    <div id='background-home'>
        <div>
            <img id='home-graphic' src={logo} className="App-logo" alt="logo" />
                <div id='landing-cta'>
                    <p id='headline'>Creating custom solutions to serve your needs is what I do</p>
                    <p id='tagline'>traditional web, web3, closed systems</p>    
                </div>
            <button>services</button> <button>contact me</button>
        </div>
        

    <style>{`
        #background-home {
            background-image: url("https://free4kwallpapers.com/uploads/originals/2020/10/22/ethereal-peace-k-wallpaper.jpg");
            height: 900px;
            max-height: 650px;
            width: 100%;
            
        }
        #headline {
            padding-top: 20px;
            color: #fff878;
            font-size: 30px;
            text-shadow: -1px -1px 0 #0a2ef7, 1px -1px 0 #0a2ef7, -1px 1px 0 #0a2ef7, 1px 1px 0 #0a2ef7;
        }
        #tagline {
            font-size: 16px;
            color: #ffffff;
        }
        #landing-cta { 
            background-color: #2e2e28;
            margin-left: 30%;
            margin-right: 30%;
            margin-top: 120px;
            opacity: 0.75;
            line-height: 32px;
            max-height: 200px;
            border-radius: 42px;
        }
        #home-graphic {
            margin-top: 220px;
        }

    `}</style>
    </div>
  )
}
