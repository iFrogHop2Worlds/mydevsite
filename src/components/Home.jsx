import React from 'react'
import Footer from './footer'

export default function Home() {
  return (
    <div id='background-home'>
        <div >
            <p id='headline'>Solving your problems is what I do</p>
            <button>services</button> <button>contact me</button>
        </div>
        

    <style>{`
        #background-home {
            background-image: url("https://free4kwallpapers.com/uploads/originals/2020/10/22/ethereal-peace-k-wallpaper.jpg");
            height: 900px;
            max-height: 550px;
            width: 100%;
            
        }
        #headline {
            padding-top: 220px;
            color: #ff4d00;
            font-size: 30px;
            text-shadow: -1px -1px 0 #008079, 1px -1px 0 #008079, -1px 1px 0 #008079, 1px 1px 0 #008079;
        }

    `}</style>
    <Footer />
    </div>
  )
}
