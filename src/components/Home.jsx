import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



export default function Home() {
    const [items,  setItems] = useState([]);
    const [projectQuery, setProjectQuery] = useState([{}]);

    const responsive = {
        400: { items: 1 },
        668: { items: 2 },
        1024: { items: 3 },
        1500: { items: 5 }
    };
    const getReq = async () => {
        let q =  await axios.get('http://localhost:7500/projects/all');
        const constructItem = (_name, _dataValue) => {
            items.push(
                <Link to={'/product-single'} state={{ name: `${_name}` }}><div className={"item_"+_dataValue +" item center-content"} data-value={_dataValue}><p className='item_title'>{_name}</p></div></Link>
            );
            setItems(items);
        }

        if(items.length < q.data.length-1)
        for(let i = 0; i < q.data.length; i++){  
            setItems([]);
            constructItem(q.data[i].title, i+1);         
            console.log(items)
        }
        setProjectQuery(q.data)
    }

    useEffect(() => {
        getReq() 
    }, []);
 

    return (
        <>
        <div id='background-home'>
            <div id='content'>
                {/* <button onClick={constructItem}>test</button> */}
                <h3 id='home-title'>Billy Best</h3>
                <p id='headline'> A full stack developer.</p>
                <p id='tagline'>Traditional web, web3 and closed systems.</p>    
                <a href='/services'><button  id='navbtn'>services</button></a> <a href='/contact'><button  id='navbtn'>contact me</button></a>

             
                <div id='projects' className='center-content'>
                    <h4 id='projects-title'>Work</h4>   
                </div>
                <p id='tagline'>Projects I built or participated on</p>     
                <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                    autoPlayInterval={3500}
                    autoPlayDirection="ltr"
                    autoPlay={true}
                    infinite={true}
                    mouseTrackingEnabled={true}
            
                />
              
                <div id='about-me' className='center-content'>
                    <h4 id='about-me-title'>About me</h4>
                </div>
                <div className='center-content'>
                    <div id='about-me-img' src=''></div>
                </div>
           
                <p className='col-text'>
                I have been programming for 5 years and doing so professionally for 2+. A master of innovation. My power is problem solving and creating unique solutions designed for you. I harness my past experiences and couple them with some developer wizardry to provide thoughtful well-designed programs and websites with security in mind.  
                </p>
                <p className='col-text'>
                Technology drives the process. I embrace and use whatever tools are necessary for the job. I know no limits.  I specialize in the MERN stack but often I’ll be working in c++, solidity, python, java. With MERN I can create any UI/UX for a personalized and effortless experience. Depending on your needs ill switch flavors of react to make sure you don’t lose any SEO opportunities and keep performance top notch. Speed is everything. 
                </p>
                <p className='col-text'>
                I have a unique background. Primarily working in commercial construction from age 18 to 25 I am familiar with problem solving, planning and being proactive in coordinated efforts amongst many teams. I understand well the process and how important each person’s role is and that considering this deeply effects how well you yourself can perform in your own role. I bring this with me into software development. Always considering the person before me and after me. Whether it be a fellow developer or a user.    
                </p>
                <p className='col-text'>
                I am a full stack developer and I can plan, design, build and deploy any solution myself. I build websites, applications, internal tooling, you name it you got it. I like pushing the limit and experimenting. You can often find me in the ether working on future systems.    
                </p>
           
            </div>
            <a href="#" class="top"> &#8593;</a>
            <div id='bottom-spacer'></div>
        </div>
        
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&family=Roboto+Mono:wght@100&display=swap');
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
                color: #fbff12;
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
                width: 500px;
                opacity: 0.75;
                line-height: 32px;
                border-radius: 10px 100px / 120px;
                outline-style: solid;
                margin-top:10px;

            }
            .col-text {
                padding-left: 37%;
                padding-right: 35%;
                line-height: 1.2;
                text-align: left;
                color: white;
                font-family: 'Roboto Mono', monospace;
            }

            #home-title {
                font-size: 92px;
                font-family: 'Roboto Mono', monospace;
                color: white;
                text-shadow: -1px -1px 0 #000000, 2px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;
                margin: 0px;
                padding-top: 15%;
              
            }

            .center-content {
                display: flex;
                justify-content: center;  
            }
            #about-me-title {
                padding-top: 125px;
                width: auto;
                font-size: 32px;
                font-family: 'Roboto Mono', monospace;
                color: white;
                text-shadow: -1px -1px 0 #000000, 2px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;
                border-bottom: 5px solid #00ff6e;
            }
            #about-me-img {
                height: 300px;
                width: 300px;
                margin-bottom: 25px;
                background-image: url("https://avatars.githubusercontent.com/u/34861777?v=4");
                display: flex;
                justify-content: center;  
                border-radius: 50%;
                border: 1px solid #00ff6e;
                transition: transform .5s ease-in-out; /* Animation */
                
            }
            #about-me-img:hover {
                transform: scale(1.2) rotate(360deg); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
               
            }

            #projects-title {
                padding-top: 125px;
                width: auto;
                font-size: 32px;
                font-family: 'Roboto Mono', monospace;
                color: white;
                text-shadow: -1px -1px 0 #000000, 2px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;
                border-bottom: 5px solid #00ff6e;
            }

            .alice-carousel__wrapper {  
                margin-left: 0.2%;              
            }
            .alice-carousel__next-btn-item {  
               padding-right: 99%;
            }
            li.alice-carousel__stage-item {
                
            }
            .item {
                height: 300px;
                width: 98%;
               
                background-size: cover;   
               
            
            }
            .item_title {
                color: #00ff6e;
                background-color: black;
                text-shadow: -1px -1px 0 #000000, 2px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;
                font-size: 20px;
                position: absolute;
                bottom: 0;
                text-align: center;
                width: 80%;
                border: 1px solid #ff8000;
              
            }
            .item_1 {
                background-image: url('https://images2.imgbox.com/23/db/SDnbJzVB_o.png');
            }
            .item_2 {
                background-image: url('https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/001/871/600/datas/medium.png');
            }
            .item_3 {
                background-image: url('https://blogs.lse.ac.uk/lsereviewofbooks/files/2012/06/ElinorOstrom.jpg');
            }
            .item_4 {
                background-image: url('https://i.pinimg.com/736x/3e/3c/3b/3e3c3bc6edec72b47fd03d562d455b13.jpg');
            }
            .item_5 {
                background-image: url('https://images2.imgbox.com/b6/8f/Wot37ur8_o.png');
            }
            .item_6 {
                background-image: url('https://images2.imgbox.com/49/9e/HEcDI9Wf_o.png');
            }
            .item_7 {
                background-image: url('https://images2.imgbox.com/9e/f3/OqXaKeX3_o.png');
            }
            .item_8 {
                background-image: url('https://images2.imgbox.com/8c/4c/J4r0vedG_o.png');
            }
            .item_9 {
                background-image: url('https://www.lawrenceprospera.org/images/quintana/Page_Under_Construction.jpg');
            }
            .item_10 {
                background-image: url('https://www.lawrenceprospera.org/images/quintana/Page_Under_Construction.jpg');
            }
            .item_11 {
                background-image: url('https://images2.imgbox.com/1b/c4/5mZSJ1Yw_o.png');
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

            @media only screen and (max-width: 600px) {
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


            
            }
            #bottom-spacer {
                height: 100px;
            }

        `}</style>
    </>     
  )
}
