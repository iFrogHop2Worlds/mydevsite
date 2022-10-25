import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Contact() {

  const[email, setEmail] = useState("");
  const[name, setName] = useState("");
  const[question, setQuestion] = useState("");
  const [items,  setItems] = useState([]);
  
  const getReq = async () => {
    setItems([]);
    let q =  await axios.get('http://138.197.151.61:7500/projects/all');
    // items.push(q.data);
    setItems(q.data);   
   // console.log(q.data)
}
  const handleFormInput = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const names = target.name;
    if(names === 'name'){
      setName(value);
    } else if (names === "email"){
      setEmail(value);
    } else if (names === "question"){
      setQuestion(value);
    }
  }

  // create a post request submitting form fields
  // later we will create a component for admin panel
  // where we can select question and add them to a new array
  // which our faq component will draw from.
  const _submitQuestion = async (e) => {
    e.preventDefault();
    axios.post(`http://138.197.151.61:7500/user-api/submit-question`, { 
      email: email,
      name: name,
      question: question
    })
    .catch( error => console.log("errpr on handle submmit: " + error));

    setEmail("");
    setName("");
    setQuestion("");
  }
  return (
    <>
    <div className='center-content' id='contact'>
      <div id='email-phone'>
        <p>email: <a href='mailto:bill@maasdao.io'>bill@maasdao.io</a></p>
      </div>  
      <div id='questions'>
        <h4 id='askcontact'>Ask general questions</h4>
        <form>
          <label for="name"><b>Name </b>(optional) </label><br/>
          <input type="text" id="form-field" name="name" size="40" maxlength="39" value={name} onChange={handleFormInput}/><br/>
          <label for="email"><b>Email </b>(optional) </label><br/>
          <input type="text" id="form-field" name="email" size="40" maxlength="39" value={email} onChange={handleFormInput}/><br/>
          <label for="question"><b>Question </b>(required) </label><br/>
          <textarea rows="6" cols="50" id="question" name="question" required maxlength="475" value={question} onChange={handleFormInput}></textarea>
          <br/>
          <button id='form-submit' type="submit" value="Submit" onClick={_submitQuestion}>Submit</button>
        </form> 
        <p id='questions-info'>Your questions may be displayed in a FAQ section.</p>
      </div>
      </div>

      <style>{`
        .center-content {
          display: grid;
          justify-content: center;
          text-align: left;   
        }
        #contact {
          background-color: #1e282e;
          color: #ffffff;
          height: 900px;
          max-height: 650px;
          width: 100%;
          padding-top:50px;
        }
        #questions {
          background-color: #1e282e;
          height: auto;
         
          text-align: left;   
        }

        #email-phone {
          padding-top: 20px;
          
          margin-bottom: -100px;
        }
        #form-submit {
          margin-top: 10px;
        }
        #askcontact {
          color: orange;
          margin-top: -120px;
        }
        #questions-info {
          width: 380px;
          padding-left: 20px;
          padding-left: 20px;
        }
        #form-field {
          width: 410px;
        }
  


        
    `}</style>
    </>
    
    
   
  )
}
