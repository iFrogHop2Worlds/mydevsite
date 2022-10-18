import React, { useState } from 'react'
import history from '../utils/history'

const Hamburger = () => {
    const [showBurger, setShowBurger] = useState(false)

    const toggleBurger = () => {
        setShowBurger(!showBurger);
    }

    return (
        <>
            <div className='navigation'>
                <ul>
                    <li>
                        <a href='http://billsdev.space/#'>
                            <button id='navbtn' color='primary' size='sm' onClick={() => { history.push('/');}}>
                                Home
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href='http://billsdev.space/#about-me'>
                            <button id='navbtn' color='primary' size='sm'>About me</button>
                        </a>
                    </li>
                    <li>
                        <a href='http://billsdev.space/#projects'>
                            <button id='navbtn' color='primary' size='sm'>Work</button>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/iFrogHop2Worlds" target="_blank" rel="noopener noreferrer">
                            <button id='navbtn' color='warning' size='sm' >Github</button>
                        </a>
                    </li>
                    <li>
                    <button id='navbtn' color='primary' size='sm' onClick={() => {history.push('/resume'); window.location.reload(); }}>
                        Resume
                    </button>
                    </li>
                </ul>
            </div>
            <div className='hamburger' onClick={toggleBurger}>
                <div className='burger burger1'></div>
                <div className='burger burger2'></div>
                <div className='burger burger3'></div>
            </div>
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&family=Roboto+Mono:wght@100&display=swap');
        .hamburger {
            display: none;
        }

        .burger {
            background-color: white;
            width: 2rem;
            height: 0.25rem;
            border: 1px solid #00ff6e;
            transformation-origin: 1px;
            transition: all 0.3s linear;
        }
        .navigation ul{
            display: none;
            
        }
        

        @media only screen and (max-width: 800px) {
            .hamburger {
                display: fixed;
                width: 2rem;
                height: 2rem;
                padding-left: 5px;
                padding-top: 5px;
                display: flex;
                justify-content: space-around;
                flex-flow: column nowrap;
                z-index: 10;
            }

            .navigation ul{
            display: ${showBurger ? 'inline' : 'none'};
            background-color: #1e282e;
            border: 1px solid #00ff6e;
            color: white;
            height: 150px;
            width: 120px;
            margin-top: 38px;
            margin-left: -35px;
            padding-top: 10px;
            padding-bottom: 35px;
            position: fixed;
            text-align: left;
            list-style: none;
            left: 0
            
        }
        

        }

        `}</style>
        </>
    )
}

export default Hamburger