import React, {useContext} from 'react';
import {SocketContext} from '../socketContext';

const Notifications = () => {
  const {answerCall, call, callAccepted} = useContext(SocketContext);
    return(
      <>
        {call.isReceivingCall && !callAccepted && (
          <div className="ntfn" style={{display: 'flex', justifyContent: 'center'}}>
            <h1>{call.name} is calling... </h1>
            <button onClick={answerCall}>
              <i className="fas fa-phone-alt"></i>
            </button>
          </div>
        )}
      </>
    );
  };
  
  export default Notifications;