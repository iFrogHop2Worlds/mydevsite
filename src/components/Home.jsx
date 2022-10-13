import React, {useState, useEffect} from 'react'
//import sparkles from '../sparkles1.mp4'


export default function Home() {
    // const [sparkles, setSparkles] = useState([]);

    // useEffect(() => {
    //    fetch('http://127.0.0.1:8080/sparkles1.mp4')
    //       .then((res) => {
    //          console.log(res);
    //          setSparkles(res);
    //       })
    //       .catch((err) => {
    //          console.log(err.message);
    //       });
    // }, []);
  return (
    <>
    <div id='background-home'>
        <div id='content'>
                <h3>Billy Best</h3>
            {/* <img id='home-graphic' src={logo} className="App-logo" alt="logo" /> */}
                <div id='landing-cta'>
                    <p id='headline'>Full stack developer.</p>
                    <p id='tagline'>Traditional web, web3 and closed systems.</p>    
                </div>
            <a href='/services'><button  id='navbtn'>services</button></a> <a href='/contact'><button  id='navbtn'>contact me</button></a>
        </div>
        
        </div>
    <style>{`
        #background-home {
            width: 100%;
            height: 600px;
            background: rgb(0,19,9);
            background: linear-gradient(90deg, rgba(0,19,9,1) 0%, rgba(0,67,80,1) 100%);
            padding-top: 100px;
           
        }
        #content {
            width: 100%;
            height: 50%;
          
            margin-bottom:300px;
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
            border-radius: 10px 100px / 120px;
            outline-style: solid;

        }
        h3 {
            padding-bottom: 30px;
            font-size: 72px;
            font-family: "Trirong", serif;
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
