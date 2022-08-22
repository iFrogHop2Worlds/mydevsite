import React from 'react'
import Footer from './footer'

export default function Home() {
  return (
    <div id='background-home'>
        <div >
            <h3 id='headline'>Solving your problems is what I do</h3>
            <button>services</button> <button>contact me</button>
        </div>
        

    <style>{`
        #background-home {
            background-image: url("https://i.redd.it/p9hjj8zscxo51.jpg");
            height: 900px;
            max-height: 550px;
            width: 100%;
            
        }
        #headline {
            padding-top: 220px;
            color: #00fff2;
            font-size: 30px;
            text-shadow: -1px -1px 0 #008079, 1px -1px 0 #008079, -1px 3px 0 #008079, 1px 1px 0 #008079;
        }

    `}</style>
    <Footer />
    </div>
  )
}
