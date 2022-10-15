import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function ProjectSingle() {

    const location = useLocation()
    const { name } = location.state

    const projectObj = [
        {        
            image: "img url",
            text: "this is a description... dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
            repo: "http://repo",
            preview: "http://thesquidsquadnft.art"
        },

    ]

    /**
     * I think I will make a get request to mongodb to get which ever post 
     * link state specifies. The response from this request will replace the dummy post object above
     */

  return (
    <>
        <div id='background' className='name'>
    

        {projectObj.map(projectContents => {
 
            return (
                <>             
                    <div id='preview-header'>
                        <h2>{name}</h2>
                        
                        <image src={projectContents.image}></image>

                        <p>{projectContents.text}</p>

                        <a href={projectContents.repo}>REPO LINK</a>

                        <br></br><br></br>

                        <p>preview</p>
                    </div>

                  
                    <iframe id='preview-frame' title='preview' src={projectContents.preview} width="1200" height="500"></iframe>
            
                            
                </>  
            ); 
        })} 
        </div>

    <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&family=Roboto+Mono:wght@100&display=swap');
        #background {
            height: auto;
            padding-bottom: 1px;
            background-color: #1e282e;
            color: #ffffff;
            padding-top: 120px;  
            font-family: 'Roboto Mono', monospace;

        }

        #preview-header {
            width: auto;
            height: auto;
            background-color: #212940;
            margin-left: 10.5%;
            margin-right: 10.5%;
            padding-left: 22%;
            padding-right: 22%;
            color: white;
            border: 1px solid #00ff6e;
        }

        #preview-frame {
            border: 1px solid #00ff6e;
        }
        h2 {
            font-family: 'Poppins', sans-serif;
            
        }

       

    `}</style>
    </>
  )
}

