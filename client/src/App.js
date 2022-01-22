import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import VideoPlayer from './components/videoPlayer';
import Options from './components/options';
import Notifications from './components/notifications';
import {SocketContext} from './socketContext';
require('dotenv').config()

const App = () => {

  const {callUser, name, setName, callAccepted, leaveCall} = useContext(SocketContext);

  return(
    <>
      <Router>
        <Routes>
          <Route path="/:socketId" element={<Connect/>}/>
        </Routes>
      </Router>
      <VideoPlayer/>
      <Notifications/>
      <Options/>
    </>
  )
  
  function Connect(){

    let { socketId } = useParams()

    const redirCall = () => {
      callUser(socketId)
      document.querySelector('#calling').innerHTML = 'Calling...'
      const redirPhone = document.querySelector('.fa-phone')
      document.querySelector('#redir-input').style.display = 'none'
      document.querySelector('.redir-box-cls').style.display = 'none' 
      document.querySelector('.redir-cancel').style.display = 'unset'
      if(redirPhone){
        redirPhone.classList.replace('fa-phone','fa-phone-volume')
      }
    }

    const cancelCall = () => {
      leaveCall()
      closeBox()
    }

    const closeBox = () => {
      window.location.href = '/'
    }

    return (
      <>
      {!callAccepted ? 
        <div className="redir">
          <input id="redir-input" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} autoFocus/>
          <button title="make call" className="redir-call" onClick={() => redirCall()}>
            <i className="fas fa-phone"></i>
            <span id="calling">Call</span>
          </button>
          <button title="cancel call" className="redir-cancel" onClick={()=>cancelCall()}>
            <i className="fas fa-phone-slash"></i>
            <span id="cancel">Cancel</span>
          </button>
          <button title="go to main" className="redir-box-cls" onClick={()=>closeBox()}>
            <i className="fas fa-window-close"></i>
          </button>
        </div>
      : null}
      </>
    )
  }

};

export default App;
