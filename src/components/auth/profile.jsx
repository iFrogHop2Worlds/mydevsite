import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../../utils/auth.service";

export default function Profile () {

  const [redirect, setRedirect] = useState(null);
  const [userReady, setUserReady] = useState(false);
  const [currentUser, setCurrentUser] = useState({username: ""})
  
  useEffect(() => {
    console.log("hi")
    let user = AuthService.getCurrentUser()
    setCurrentUser(user);
    if (!currentUser) setRedirect({ redirect: "/" });
    if(currentUser) setUserReady(true);
    
  }, []);

    if (redirect) {
      return <Navigate to={redirect} />
    }
    console.log(currentUser)
    return (
      <>
          <div className="profile-container">
            {(currentUser.username === "3xDG@nimda") ?
            <div>
            <header className="jumbotron">
              <h3>
                <strong>{currentUser.username}</strong> Profile
              </h3>
            </header>
            <p>
              <strong>Token:</strong>{" "}
              {currentUser.accessToken.substring(0, 20)} ...{" "}
              {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
            </p>
            <p>
              <strong>Id:</strong>{" "}
              {currentUser.id}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              {currentUser.email}
            </p>
            <strong>Authorities:</strong>
            <ul>
              {currentUser.roles &&
                currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
            </ul>
          </div>: <h2>Not logged in</h2>}
          </div>

      <style>{`
      * {
        font-family: sans-serif !important;
        outline: none;
      }
      .container {
        max-width: auto;
      }
    `}</style>
      </>
     
    );
  
}
