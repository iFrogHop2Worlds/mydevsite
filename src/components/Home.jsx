import React, {useState, useEffect} from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
//import sparkles from '../sparkles1.mp4'


export default function Home() {
    const responsive = {
        400: { items: 1 },
        668: { items: 2 },
        1024: { items: 3 },
        1500: { items: 5 }
    };
    const items = [
        <div className="item" data-value="1">1</div>,
        <div className="item" data-value="2">2</div>,
        <div className="item" data-value="3">3</div>,
        <div className="item" data-value="4">4</div>,
        <div className="item" data-value="5">5</div>,
      ];

    return (
        <>
        <div id='background-home'>
            <div id='content'>
            <h3>Billy Best</h3>
                <div id='landing-cta'>  
                    <p id='headline'> A full stack developer.</p>
                    <p id='tagline'>Traditional web, web3 and closed systems.</p>    
                </div>
                <a href='/services'><button  id='navbtn'>services</button></a> <a href='/contact'><button  id='navbtn'>contact me</button></a>

             
                <div id='projects' className='center-content'>
                    <h4 id='projects-title'>Work</h4>   
                </div>
                <p id='tagline'>Projects I built or participated on</p>     
                <AliceCarousel
                    className='center-content'
                    mouseTracking
                    items={items}
                    responsive={responsive}
                    controlsStrategy="alternate"
                />
              
              <div id='about-me' className='center-content'>
                    <h4 id='about-me-title'>About me</h4>
                </div>
                <p className='col-text'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare eleifend tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. In ut nunc at mi bibendum elementum. Sed turpis nunc, efficitur semper diam et, vulputate malesuada lorem. Sed sed diam vehicula, hendrerit urna ut, faucibus urna. Integer molestie augue eu magna pharetra elementum. Integer egestas lorem est, eget rhoncus sem rutrum sed. Etiam condimentum massa in imperdiet congue. Praesent bibendum commodo erat, dignissim volutpat nunc vestibulum a.
    Aenean aliquam neque at augue lacinia auctor. Curabitur tempor dictum ante nec vulputate. Duis quis erat tristique odio finibus ornare. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris commodo ultricies metus. Vivamus aliquam neque ligula, ac pellentesque nulla feugiat vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a diam eleifend, volutpat mi accumsan, viverra elit. Integer erat enim, sagittis nec elementum vitae, malesuada at magna. Nam ac tellus vitae metus pulvinar rhoncus in vitae dolor. Pellentesque rutrum tellus sit amet cursus vestibulum. Suspendisse non efficitur risus. Suspendisse eget placerat enim. Integer consectetur bibendum leo, sit amet dapibus ex imperdiet eu. Suspendisse gravida condimentum luctus.
    Pellentesque viverra tellus ut ex faucibus fermentum. Etiam bibendum mauris libero, at faucibus augue pellentesque ut. Quisque arcu diam, congue vitae magna ac, aliquet aliquam nibh. Etiam nisi diam, aliquam ut finibus at, ultrices non nisi. Nullam posuere facilisis augue ac ornare. Suspendisse dignissim arcu et malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec enim ante, ullamcorper sit amet tortor sit amet, auctor tempor risus. Duis ligula erat, dignissim a risus at, viverra ullamcorper massa. 
                </p>
           
            </div>
            <a href="#" class="top">Back to Top &#8593;</a>
        </div>
        
        <style>{`
            #background-home {
                width: auto;
                height: auto;
                background: rgb(0,19,9);
                background: linear-gradient(90deg, rgba(0,19,9,1) 0%, rgba(0,67,80,1) 100%);
                padding-top: 100px;
                padding-bottom: 1px;
                
            
            }

            #content {
                width: 100%;
                height: 100%;  
            }
    
            #headline {
                padding-top: 20px;
                color: #eaff00;
                font-size: 30px;
                text-shadow: -1px -1px 0 #000000, 2px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;
            }

            #tagline {
                font-size: 16px;
                font-family: 'Roboto Mono', monospace;
                color: #00ff6e;
                padding-bottom: 10px;
            }

            #landing-cta { 
                background-color: #2e2e28;
                margin-left: 30%;
                margin-right: 30%;
              
                opacity: 0.75;
                line-height: 32px;
                border-radius: 10px 100px / 120px;
                outline-style: solid;

            }
            .col-text {
                padding-left: 30%;
                padding-right: 30%;
                padding-bottom: 75px;
                color: white;
                font-family: 'Roboto Mono', monospace;
            }

            h3 {
                font-size: 92px;
                font-family: 'Roboto Mono', monospace;
                color: white;
                text-shadow: -1px -1px 0 #000000, 2px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;
                margin: -12px;
                padding-top: 15%;
              
            }

            .center-content {
                display: flex;
                justify-content: center;  
            }
            #about-me-title {
                padding-top: 125px;
                width: 150px;
                font-size: 32px;
                font-family: 'Roboto Mono', monospace;
                color: white;
                text-shadow: -1px -1px 0 #000000, 2px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;
                border-bottom: 5px solid #00ff6e;
            }

            #projects-title {
                padding-top: 125px;
                width: 150px;
                font-size: 32px;
                font-family: 'Roboto Mono', monospace;
                color: white;
                text-shadow: -1px -1px 0 #000000, 2px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;
                border-bottom: 5px solid #00ff6e;
            }

            .alice-carousel__next-btn-item {  
               padding-right: 99%;
            }
            .item {

                background-image: url('https://www.lawrenceprospera.org/images/quintana/Page_Under_Construction.jpg');
                height: 300px;
                width: 300px;
            }
            .alice-carousel {
                padding-left: 35px;
            }

            .top {
                --offset: 50px; 
                margin-left: 90%;
               
                position: sticky;
                bottom: 20px;      
                margin-right:10px; 
              
                margin-top: calc(145vh + var(--offset));
                
                /* visual styling */
                text-decoration: none;
                padding: 10px;
                font-family: sans-serif;
                color: #fff;
                background: #000;
                border-radius: 100px;
                white-space: nowrap;
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
                .col-text {
                padding-left: 10%;
                padding-right: 10%;
            
            }


        `}</style>
    </>     
  )
}
