import React from 'react'
import ProjectForm from './project-form';
import ArticleForm from './article-form';


const ManageSiteContent = (props) => {


let projectIndex = -1;
  return (
    <>
        <div id="add-content" hidden={props.mode}>
                        <div className="row-container">
                            <div className="col-container">                      
                                <div hidden={props.showProject} id="project-container">
                                    <h3>Add projects</h3>
                                    <ProjectForm
                                        _handleInputsChange={props._handleInputsChange}
                                        _handleSubmmit={props._handleAddProjectSubmmit}    
                                        proTitle={props.proTitle}
                                        proDesc={props.proDesc}
                                        proRepo={props.proRepo}
                                        proDemo={props.proDemo}                 
                                    />
                                </div>

                                <div hidden={props.showArticle} id="article-container">
                                    <h3>Add articles</h3>
                                    <ArticleForm
                                        _handleInputsChange={props._handleInputsChange}
                                        _handleSubmmit={props._handleAddProjectSubmmit}    
                                        proTitle={props.proTitle}
                                        proDesc={props.proDesc}
                                    />
                                </div>
                            </div>
                                
                            </div>
                    </div>
                    

                    <div hidden={ props.mode===true?false:true} id="edit-content">
                        <div className="row-container">                         
                            <div className="col-container">
                                <div hidden={props.showProject} id="project-container">
                                <h3>Edit project</h3>
                                    <ProjectForm
                                        _handleInputsChange={props._handleInputsChange}
                                        _handleSubmmit={props._handleEditProjectSubmmit} 
                                        _handleDelete={props._handleDelete}   
                                        proTitle={props.proTitle}
                                        proDesc={props.proDesc}
                                        proRepo={props.proRepo}
                                        proDemo={props.proDemo}                 
                                    />
                                    
                                </div>
                            <div hidden={props.showArticle} id="article-container">
                                <h3>Edit articles</h3>
                                <ArticleForm
                                    _handleInputsChange={props._handleInputsChange}
                                    _handleSubmmit={props._handleAddProjectSubmmit}    
                                    proTitle={props.proTitle}
                                    proDesc={props.proDesc}
                                />
                            </div>  
                            </div>

                            <div className="col-container">
                                <h3>All projects</h3>
                                <div className="row" id="project-gallery">
                                    {props.items.map(project => {
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
    </>
  )
}

export default ManageSiteContent;