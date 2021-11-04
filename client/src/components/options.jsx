import React, { useContext, useState } from 'react';
import { Button, TextField} from '@material-ui/core';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import {SocketContext} from '../socketContext';

const Options = ({children}) => {
  const {me, callAccepted,  name, setName, callEnded, leaveCall, callUser} = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  const callOption = () => {
    document.querySelector('.option' || 'endbtn').classList.toggle('visible')
  }

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
                    {console.log(me)}
                    <CopyToClipboard text={me} >
                      <Button className="invite">
                        <i className="fas fa-share-alt"></i>
                        <span>Invite</span>
                      </Button>
                    </CopyToClipboard>
                  </div>
                  <div>
                    <h6>Make a call</h6>
                    <TextField label="ID to call" id="call-id" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth/>
                    <Button className="call-person" onClick={() => callUser(idToCall)}>
                      <i className="fas fa-phone"></i>
                      <span>Call</span>
                    </Button>
                  </div>
              </form>
              {children}
            </div>
          </div>
        )} 
      </> 
    );
  };
  
  export default Options;