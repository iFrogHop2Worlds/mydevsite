import React, { useState } from 'react'

export default function Contact() {

  const[email, setEmail] = useState("");
  const[name, setName] = useState("");
  const[question, setQuestion] = useState("");

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
  return (
    <div id='contact'>
      <div id='email-phone'>
        <p>email: <a href='mailto:bill@maasdao.io'>bill@maasdao.io</a></p>
      </div>  
      <div id='questions'>
        <h4 id='askcontact'>Ask general questions</h4>
        <form>
          <label for="name"><b>Name </b>(optional) </label><br/>
          <input type="text" id="name" name="name" size="40" maxlength="39" onChange={handleFormInput}/><br/>
          <label for="email"><b>Email </b>(optional) </label><br/>
          <input type="text" id="email" name="email" size="40" maxlength="39" onChange={handleFormInput}/><br/>
          <label for="question"><b>Question </b>(required) </label><br/>
          <textarea rows="6" cols="80" id="question" name="question" required maxlength="475" onChange={handleFormInput}></textarea>
          <br/>
          <input id='form-submit' type="submit" value="Submit"/>
        </form> 
        <p id='questions-info'>Your questions may be displayed in a FAQ section. Your name or email will never be shared.</p>
      </div>
      <style>{`
        #contact {
          background-color: #1e282e;
          color: #ffffff;
          height: 900px;
          max-height: 650px;
          width: 100%;
          padding-top:100px;
        }
        #questions {
          background-color: #1e282e;
          height: 350px;
          padding-top: 40px;
          text-align: center;   
        }
        #email-phone {
          padding-top: 20px;
        }
        #form-submit {
          margin-top: 10px;
        }
        #askcontact {
          color: orange;
        }
        
    `}</style>
    </div>
  )
}
