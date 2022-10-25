import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function ProjectSingle() {

    const location = useLocation()
    const { name } = location.state
    const [projectQuery, setProjectQuery] = useState({})

    useEffect(() => {
        const getReq = async () => {
            let q =  await axios.get(`http://{process.env.REACT_APP_BASE_URL}:7500/projects/get`, { params: { title: name } })
            setProjectQuery(q.data[0])
        }
        getReq()
      }, [name]);

  return (
    <>
        <div id='background' className='name'>
        <div id='preview-header'>
            <h2>{name}</h2>
                     
             {/* <image src={projectContents.image}></image> */}

             <p>{projectQuery.description ? projectQuery.description : "No description available"}</p>

      
            <a href={projectQuery.repository}>{projectQuery.repository? projectQuery.repository: 'No repository'}</a>

             <br></br><br></br>

            
        </div>
        { projectQuery.demo != "none"  &&   
            <>
            <p>Demo</p>     
            <iframe id='preview-frame' title='preview' src={projectQuery.demo} width="1200" height="500"></iframe>
            </>
        } 
        { projectQuery.demo === "none"  &&   
            <p>demo comming soon</p>       
        } 
       
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

