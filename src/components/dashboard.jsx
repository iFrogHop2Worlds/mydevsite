import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../utils/auth.service";
import axios from 'axios';
import ProjectForm from "./dashboard/project-form";
import ArticleForm from "./dashboard/article-form";

//todo create project/article gallery and add update method to api
const Dashboard = (props) => {

    const [proTitle, setProTitle] = useState("");
    const [proDesc, setProDesc] = useState("");
    const [proRepo, setProRepo] = useState("");
    const [proDemo, setProDemo] = useState("");
    const [redirect, setRedirect] = useState(null);
    const [userReady, setUserReady] = useState(false);
    const [currentUser, setCurrentUser] = useState({username: ""});
    const [mode, setMode] = useState(false);
    const [showProject, setShowProject] = useState(false); // default view will be projects for now. 
    const [showArticle, setShowArticle] = useState(true)
    
    useEffect(() => {
      console.log("hi")
      let user = AuthService.getCurrentUser()
      setCurrentUser(user);
      if (currentUser === null ) setRedirect({ redirect: "/" });
      if(currentUser) setUserReady(true);
     
    }, []);

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

    const _handleAddProjectSubmmit = event => {
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

    const _handleEditProjectSubmmit  = async (event) => {
        event.preventDefault();
        await axios.put(`http://localhost:7500/projects/update`, { 
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

    

    const _toggleMode = () => {
        if(mode === true){
            setMode(false);
        }
  
        if(mode === false){
            setMode(true);
        }
     
    }
    const _toggleArticle = () => {
        if(showProject === false){
            setShowProject(true);
        } 
 
        if(showArticle === true){
            setShowArticle(false);
        }    
    }

    const _toggleProject = () => {
        if(showArticle === false){
            setShowArticle(true);
        }    
 
        if(showProject === true){
            setShowProject(false);
        }    
    }

    const logOut = () => {
        AuthService.logout();
        setMode(false);
        setShowProject(false);
        setShowArticle(false);
        setCurrentUser(undefined);
      }

    return (
        <>
            <div id='background'>
            <h2>Admin Panel</h2> 
            <button className='btn-animate btn-admin btn' onClick={_toggleMode}>toggle mode</button> 
            { mode === false &&
                <>
                <button onClick={_toggleProject} className='btn-animate btn-admin btn'>add project</button>
                <button onClick={_toggleArticle} className='btn-animate btn-admin btn'>add article</button>
                </>
            }  
            { mode === true &&
                <>
                <button onClick={_toggleProject} className='btn-animate btn-admin btn'>edit projects</button>
                <button onClick={_toggleArticle} className='btn-animate btn-admin btn'>edit articles</button>
                </>
            }  
          

            {(currentUser === null) ? 
                <>
                    <p>Not logged in as admin</p>
                    <a href="/login"><button id="login">Login</button></a>
                </>:
            
                (currentUser.username === process.env.REACT_APP_ADMIN) ?  
                <><a href="/login"><button id="logout" onClick={logOut}>Logout</button></a>
                    <div id="add-content" hidden={mode}>
                        <div hidden={showProject} id="project-container">
                            <h3>Add projects</h3>
                            <ProjectForm
                                _handleInputsChange={_handleInputsChange}
                                 _handleSubmmit={_handleAddProjectSubmmit}    
                                proTitle={proTitle}
                                proDesc={proDesc}
                                proRepo={proRepo}
                                proDemo={proDemo}                 
                            />
                         </div>

                        <div hidden={showArticle} id="article-container">
                            <h3>Add articles</h3>
                            <ArticleForm
                                _handleInputsChange={_handleInputsChange}
                                _handleSubmmit={_handleAddProjectSubmmit}    
                                proTitle={proTitle}
                                proDesc={proDesc}
                            />
                        </div>
                    </div>
                    <div hidden={ mode===true?false:true} id="edit-content">
                        <div hidden={showProject} id="project-container">
                            <h3>Edit projects</h3>
                            <ProjectForm
                                _handleInputsChange={_handleInputsChange}
                                _handleSubmmit={_handleEditProjectSubmmit}    
                                proTitle={proTitle}
                                proDesc={proDesc}
                                proRepo={proRepo}
                                proDemo={proDemo}                 
                            />
                        </div>

                         <div hidden={showArticle} id="article-container">
                            <h3>Edit articles</h3>
                            <ArticleForm
                                _handleInputsChange={_handleInputsChange}
                                _handleSubmmit={_handleAddProjectSubmmit}    
                                proTitle={proTitle}
                                proDesc={proDesc}
                            />
                        </div>    
                    </div>
                </>: 
                <>
                    <p>Not logged in as admin</p>
                    <a href="/login"><button id="login">Login</button></a>
                </>
            }
            </div>
            

            <style>{`

                #background {
                    background-color: #1e282e;
                    color: #ffffff;
                    height: 700px;
                    width: auto;
                    padding-top: 20px;

                }
                #logout { 
                    float: right;
                    margin-right: 5px;
                    margin-top: -52px;
                }
                #login{
                    float: right;
                    margin-right: 5px;
                    margin-top: -136px;
                }
                .btn-admin {
                    margin: 5px;
                   
                }
                form {
                    padding-top: 50px;
                    padding-bottom: 1px;
                    height: auto;
                    width: 100%;
                    
                }
                .form-field {
                    width: 500px;
                }
                textarea {
                    height: 120px;
                    width: 500px;
                }


            `}</style>
        </>
    )
}

export default Dashboard