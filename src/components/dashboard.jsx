import React, {useState} from 'react'
import axios from 'axios';


const Dashboard = () => {

    const [proTitle, setProTitle] = useState("");
    const [proDesc, setProDesc] = useState("");
    const [proRepo, setProRepo] = useState("");
    const [proDemo, setProDemo] = useState("");

    const _handleInputsChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        if(name == 'title'){
            setProTitle(value); 
        } else if (name == "desc"){
            setProDesc(value);   
        } else if (name == "repo-link"){
            setProRepo(value);
        } else if (name == "preview-link"){
            setProDemo(value);  
        } 
    }

    const _handleSubmmit = event => {
        event.preventDefault();
        axios.post(`http://localhost:7500/projects/post`, { 
            title: proTitle,
            description: proDesc,
            repository: proRepo,
            demo: proDemo 
        })
        .catch( error => console.log("errpr on handle submmit: " + error))

        setProTitle('');
        setProDesc('');  
        setProRepo('');
        setProDemo(''); 
    }



    return (
        <>
            <div id='background'>
                <form id='projects-form'>
                    <label for="title">Project name:</label><br/>
                    <input className='form-field' type="text" id="title" name="title" value={proTitle} onChange={_handleInputsChange}/><br/>

                    <label for="desc">Enter a description:</label><br/>
                    <textarea  type="text" id="desc" name="desc" value={proDesc} onChange={_handleInputsChange}/><br/>

                    <label for="repo-link">Code repository link:</label><br/>
                    <input className='form-field' type="text" id="repo-link" name="repo-link" value={proRepo} onChange={_handleInputsChange}/><br/>

                    <label for="preview-link">Preview link:</label><br/>
                    <input className='form-field' type="text" id="preview-link" name="preview-link" value={proDemo}  onChange={_handleInputsChange}/><br/>

                    <br/>
                    <button onClick={_handleSubmmit}>Submit</button>
                </form> 
            </div>
            

            <style>{`

                #background {
                    background-color: #1e282e;
                    color: #ffffff;
                    height: 850px;
                    width: auto;
                    padding-top: 20px;

                }
                #projects-form {
                    padding-top: 50px;
                    padding-bottom: 1px;
                    height: auto;
                    width: 100%;
                }
                .form-field {
                    width: 300px;
                }
                textarea {
                    width: 300px;
                }

            `}</style>
        </>
    )
}

export default Dashboard