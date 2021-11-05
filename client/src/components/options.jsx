import React, { useContext, useState } from 'react';
import { Button, TextField} from '@material-ui/core';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {SocketContext} from '../socketContext';
require('dotenv').config()

const Options = () => {
  const {me, callAccepted,  name, setName, callEnded, leaveCall, callUser} = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  const setState = () => {
    document.querySelector('#share').innerHTML = 'Link Copied!'
    const copied = document.querySelector('.fa-share-alt')
    if(copied){
      copied.classList.replace('fa-share-alt','fa-clipboard-check')
    }
  }

  const callOption = () => {
    document.querySelector('.option' || 'endbtn').classList.toggle('visible')
  }

  const call = () => {
    callUser(idToCall)
    document.querySelector('#calling1').innerHTML = 'Calling...'
    const phone = document.querySelector('.fa-phone')
    if(phone){
      phone.classList.replace('fa-phone','fa-phone-volume')
    }
  }

  const appUrl = process.env.REACT_APP_F_URL || 'http://localhost:3000/'

    return(
      <>
        <div className="call">
          <button title="Call Option" onClick={()=>callOption()}>
            <i className="fas fa-phone-square"></i>
          </button>
        </div>
        {callAccepted && !callEnded ? (
          <div className="option endbtn">
            <Button className="end-call" onClick={leaveCall}>
              <i className="fas fa-phone-slash"></i>
              <span>Hang Up</span>
            </Button>
          </div>
        ) : (
          <div className="option">
            <div className="setting-container">
              <form noValidate autoComplete="off">
                  <div>
                    <h6>Account Info</h6>
                    <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth/>
                    <CopyToClipboard text={appUrl+me} onCopy={() => setState()} >
                      <Button className="invite">
                        <i className="fas fa-share-alt"></i>
                        <span id="share">Invite</span>
                      </Button>
                    </CopyToClipboard>
                  </div>
                  <div>
                    <h6>Make a call</h6>
                    <TextField label="ID to call" id="call-id" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth/>
                    <Button className="call-person" onClick={() => call()}>
                      <i className="fas fa-phone"></i>
                      <span id="calling1">Call</span>
                    </Button>
                  </div>
              </form>
            </div>
          </div>
        )} 
      </> 
    );
  };
  
  export default Options;