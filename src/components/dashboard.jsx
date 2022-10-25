import React, { useState, useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../utils/auth.service";
import axios from 'axios';
import ProjectForm from "./dashboard/project-form";
import ArticleForm from "./dashboard/article-form";
import getReq from "../utils/getReq"

//todo create project/article gallery and add update method to api
const Dashboard = (props) => {
    const [refresh, setRefresh] = useState(0);
    const [ proId, setProId] = useState("")
    const [proTitle, setProTitle] = useState("");
    const [proDesc, setProDesc] = useState("");
    const [proRepo, setProRepo] = useState("");
    const [proDemo, setProDemo] = useState("");
    const [redirect, setRedirect] = useState(null);
    const [userReady, setUserReady] = useState(false);
    const [currentUser, setCurrentUser] = useState({username: ""});
    const [mode, setMode] = useState(false);
    const [showProject, setShowProject] = useState(false); 
    const [showArticle, setShowArticle] = useState(true);
    const [items,  setItems] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [myResponse, setMyResonse] = useState("");
    const [showReplyBox, setShowReplyBox] = useState(new Map());
    
    const inputRef = React.useRef('');



    let projectIndex = -1;
    let btn1Index = -1;
    let btn2Index = -1;
    let questionsIndex = 0;

    const _refreshElement = () => {
        setRefresh(Math.random(1, 10))
    }

    useEffect(() => {
        console.log("hi admin")
        let user = AuthService.getCurrentUser()
        setCurrentUser(user);
        if (currentUser === null ) setRedirect({ redirect: "/" });
        if(currentUser) setUserReady(true);
        
      }, []);
 
    useEffect(() => {
            getReq("http://138.197.151.61:7500/projects/all")
            .then((res) => {
                setItems(res);
                console.log(res)
            })
            getReq("http://138.197.151.61:7500/user-api/get-questions")
            .then((res) => {
                setQuestions(res);
                console.log(res)
            })

           
        }, []);
    
    useEffect(() => {
       
        for(let i =0; i != questions.length; i++) {
            if(showReplyBox.length == questions.length) {return 0;}
            showReplyBox.set(i, true);
        };
        setShowReplyBox(showReplyBox);
     
        const projects = document.getElementsByClassName("col-card");
        const questionz_delete = document.getElementsByClassName("qbutton2");
        const questionz_reply = document.getElementsByClassName("qbutton1");
        const mngQuestionBtns = document.getElementsByClassName("mngbtn");

        const projectPressed = e => {
          let id = e.target.id; 
          setProId(items[id])
          setProTitle(items[id].title);
          setProDesc(items[id].description);
          setProRepo(items[id].repository);
          setProDemo(items[id].demo);
          console.log(items[id])
        }

        const questionDelPressed = e => {
            let id = e.target.id;
            console.log("id = " + id)
            axios.put(`http://138.197.151.61:7500/user-api/faq/delete`,  {id: questions[id]._id} )
            .catch( error => console.log("errpr on handle submmit: " + error))

        }
       
        const questionRepPressed = async (e) => {
            let id = e.target.id; 
            console.log(inputRef)       
            let reqObj = {
                id: questions[id]._id,
                response: myResponse
            }
            axios.put("http://138.197.151.61:7500/user-api/faq/reply", reqObj)
                .catch( e => {console.log(e)})
            console.log(questions[id]);
            setMyResonse("")
        }
       
        const manageQuestionPressed = e => {
            
            let id = e.target.id;
            console.log("id = " + Number(id - 1))
            // console.log(showReplyBox.get( Number(id - 1)))
            if(showReplyBox.get( Number(id - 1)) == false){    
                showReplyBox.set( Number(id - 1), true);
                setShowReplyBox(showReplyBox); 
               
            } else if(showReplyBox.get( Number(id - 1)) == true){            
                showReplyBox.set( Number(id - 1), false);
                setShowReplyBox(showReplyBox);

            }   
            
            console.log(showReplyBox) 
           
        }
        
        for (let project of projects) {
          project.addEventListener("click", projectPressed);
        } 

        for (let r of questionz_reply) {
            r.addEventListener("click", questionRepPressed);
        } 

        for (let d of questionz_delete) {
            d.addEventListener("click", questionDelPressed);
        } 
        for (let q of mngQuestionBtns) {
            q.addEventListener("click", manageQuestionPressed);
        } 
       
    },[items, myResponse, questions, refresh, showReplyBox])

    const _handleInputsChange = (event, text) => {
        event.preventDefault();

    
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
        }  else if (name == "myResponse"){
            setMyResonse(inputRef.current.value);
            console.log(inputRef.current.value)
        }
    }

    const _handleAddProjectSubmmit = async event => {
        event.preventDefault();
        axios.post(`http://138.197.151.61:7500/projects/post`, { 
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
        await getReq(); 
    }

    const _handleEditProjectSubmmit  = async (event) => {
        event.preventDefault();
        await axios.put(`http://138.197.151.61:7500/projects/update`, { 
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
        await getReq();
    }

    const _handleDelete  = async (event) => {
        event.preventDefault();
        axios.put(`http://138.197.151.61:7500/projects/delete`,  proId )
        .catch( error => console.log("errpr on handle submmit: " + error))

        setProTitle('');
        setProDesc('');  
        setProRepo('');
        setProDemo(''); 
        await getReq();
    }

    const _toggleMode = () => {
        if(mode === true){
            setMode(false);
            getReq();
        }
  
        if(mode === false){
            setMode(true);
            getReq();
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
            <a href="#manage-questions"><button>manage questions</button></a>

            {(currentUser === null) ? 
                <>
                    <p>Not logged in as admin</p>
                    <a href="/login"><button id="login">Login</button></a>
                </>:
            
                (currentUser.username === process.env.REACT_APP_ADMIN) ?  
                <><a href="/login"><button id="logout" onClick={logOut}>Logout</button></a>
                <div id="add-content" hidden={mode}>
                    <div className="row-container">
                        <div className="col-container">                      
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
                            
                        </div>
                    </div>
                    

                    <div hidden={ mode===true?false:true} id="edit-content">

                        <div className="row-container">                         
                            <div className="col-container">
                                <div hidden={showProject} id="project-container">
                                <h3>Edit project</h3>
                                    <ProjectForm
                                        _handleInputsChange={_handleInputsChange}
                                        _handleSubmmit={_handleEditProjectSubmmit} 
                                        _handleDelete={_handleDelete}   
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

                            <div className="col-container">
                                <h3>All projects</h3>
                                <div className="row" id="project-gallery">
                                    {items.map(project => {
                                        return(
                                            <>                                         
                                            <div className="col-card" id="project-card" >
                                                <p id={projectIndex+=1}>{project.title}</p>
                                            </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="manage-questions"  key={refresh}> 
                    <h3 >manage questions</h3>
                        <div className="row">
                            {questions.map(user => {
                              
                                return(
                                <>                                         
                                    <div className="col-card-question">
                                    <p className="userquestion" id={questionsIndex+=1}>{user.question}</p>
                                  
                                    <div hidden={showReplyBox.get(questionsIndex - 1)}>
                                        <label for="myResponse">response:</label><br />
                                        <textarea type="text" id="myResponse" name="myResponse" value={myResponse} onChange={_handleInputsChange} ref={inputRef}/>
                                        <button id={btn1Index+=1} className="qbutton1 qbutton">submit</button> 
                                        <button id={btn2Index+=1} className="qbutton2 qbutton">delete</button>
                                    </div>
                                        <button id={questionsIndex} className="mngbtn" onClick={_refreshElement}>manage</button>
                                    </div>
                                </>
                            )
                            })}
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
                    height: auto;
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
                    padding-bottom: 1px;
                    height: auto;
                    width: 100%;
                    
                }
                .form-field {
                    width: 350px;
                }
                textarea {
                    height: 120px;
                    width: 350px;
                }


                .col-container {
                    float: left;
                    width: auto;
                    height: auto;
                    padding: 4%;
                    text-align: center;
                    display: grid;


                }
                .row-container {
                   width: 100%;
                   height: auto;
                }
                .row-container:after {
                    content: "";
                    display: table;
                    clear: both;
                }
                .col-card {
                    float: left;
                    width: 24%;
                    margin: 5px;
                }
                .row {
                }
                /* Clear floats after image containers */
                .row::after {
                content: "";
                clear: both;
                display: table; 
                }
                .col-card-question {
                    float: left;
                    width: 25%;
                    margin: 5px;
                    height: auto;
                    margin-left: 6.5%;
                    background-color: beige;
                    color: black;

                                
                }

                #project-container {
                    text-align: left;  
                }
                #article-container {
                    text-align: left;
                }
                .form-title {
                    text-align:center; 
                     
                }
                #project-gallery {
                    width: 700px;
                }
                #project-card {
                    width: 220px;
                    height: 50px;
                    background-color: white;
                    color: black;
                }
                #edit-content {
                   padding-left: 6%;
                 
                }
                #add-content {
                   padding-left: 6%;
                 
                }
                #manage-questions {
                    height: auto;
                    width: auto;

                }
                .userquestion {
                    width: 100%; 
                    height: 30%;
    
                }
                .qbutton {
                    margin-left: 5%;
                    margin-right: 5%;
                    width: 300px;
                    height: 50px;     
                }
                #center-box {
                    padding-top: 100px;
                   height: 100px;
                    display:flex;
                    align-items: flex-end;
                }

            `}</style>
        </>
    )
}

export default Dashboard