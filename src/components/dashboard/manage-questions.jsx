import React from 'react'

const ManageQuestions = (props) => {
let questionsIndex = 0;
let btn1Index = -1;
let btn2Index = -1;
  return (
    <>
         <div id="manage-questions"  key={props.refresh}> 
                    <h3 >manage questions</h3>
                        <div className="row">
                            {props.questions.map(user => {
                              
                                return(
                                <>                                         
                                    <div className="col-card-question">
                                    <p className="userquestion" id={questionsIndex+=1}>{user.question}</p>
                                  
                                    <div hidden={props.showReplyBox.get(questionsIndex - 1)}>
                                        <label for="myResponse">response:</label><br />
                                        <textarea type="text" id="myResponse" name="myResponse" value={props.myResponse} onChange={props._handleInputsChange} ref={props.inputRef}/>
                                        <button id={btn1Index+=1} className="qbutton1 qbutton">submit</button> 
                                        <button id={btn2Index+=1} className="qbutton2 qbutton">delete</button>
                                    </div>
                                        <button id={questionsIndex} className="mngbtn" onClick={props._refreshElement}>manage</button>
                                    </div>
                                </>
                            )
                            })}
                        </div>    
                    </div>
    </>
  )
}

export default ManageQuestions;