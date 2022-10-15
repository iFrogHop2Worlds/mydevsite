import React from 'react'
import { useLocation } from 'react-router-dom'

export default function ProjectSingle() {

    const location = useLocation()
    const { from } = location.state
    if(!null){
      console.log(from)
    }
  return (
    <>
        <div id='background' className='from'><p>{from}</p></div>

    <style>{`
        #background {
            height: 450px;
            padding-bottom: 1px;
            background-color: #1e282e;
            color: #ffffff;
            padding-top: 120px;  
            font-family: 'Poppins', sans-serif;

        }
        .from {

        }
    `}</style>
    </>
  )
}

