import React, {useContext} from 'react';
import {SocketContext} from '../socketContext';

const VideoPlayer = () => {
    const {callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext(SocketContext);

    //Mute Audio
    const muteAudio = () => {
      const btn = document.querySelector('.aud')
      const muteIndtr = document.querySelector('.audio-indtr')
      if(muteIndtr){
        if(muteIndtr.innerHTML==="Audio is disabled"){
          muteIndtr.innerHTML = ' '
        }else{
          muteIndtr.innerHTML = "Audio is disabled"
        }
      }
      myVideo.current.srcObject.getAudioTracks()[0].enabled = !(myVideo.current.srcObject.getAudioTracks()[0].enabled)
      btn.classList.toggle('fa-microphone-slash')
    }

    //-----------------mute incoming audio--------------------------------------------------
    // const muteUserAudio = () => {
    //   const btn = document.querySelector('.user-aud')
    //   userVideo.current.srcObject.getAudioTracks()[0].enabled = !(userVideo.current.srcObject.getAudioTracks()[0].enabled)
    //   btn.classList.toggle('fa-microphone-slash')
    // }
    //-----------------------------------------------------------------------------------

    //Disable Video
    const disableVideo = () => {
      const btn = document.querySelector('.vid')
      const muteIndtr = document.querySelector('.mute-indtr')
      if(muteIndtr){
        if(muteIndtr.innerHTML==="Video is disabled"){
          muteIndtr.innerHTML = ' '
        }else{
          muteIndtr.innerHTML = "Video is disabled"
        }
      }
      myVideo.current.srcObject.getVideoTracks()[0].enabled = !(myVideo.current.srcObject.getVideoTracks()[0].enabled)
      btn.classList.toggle('fa-video-slash')
    }

    //--------------mute incoming video----------------------------------------------------
    // const disableUserVideo = () => {
    //   const btn = document.querySelector('.user-vid')
    //   userVideo.current.srcObject.getVideoTracks()[0].enabled = !(userVideo.current.srcObject.getVideoTracks()[0].enabled)
    //   btn.classList.toggle('fa-video-slash')
    // }
    //-------------------------------------------------------------------------------------

    //--------camera flip--------------------------------------------------------------
    // const supports = navigator.mediaDevices.getSupportedConstraints();
    // if (!supports['facingMode']) {
    //   alert('This browser does not support facingMode! Hence Camera flip maynot work');
    // }

    // const options = {
    //   audio: false,
    //   video: {
    //       facingMode: 'user', // Or 'environment'
    //   },
    // };

    // // Stop the tracks
    // const tracks = stream.getTracks();
    // tracks.forEach(track => track.stop());

    // // Provide new options
    // stream = await navigator.mediaDevices.getUserMedia(options);

    // // Add this stream to the video object
    // videoElm.srcObject = null;
    // videoElm.srcObject = stream;
    // videoElm.play();
  //--------------------------------------------------------------------------------------

    return(
      <div className="grid">
        {stream && !callAccepted ? (
          <div className="vid-container">
            <h5>You</h5>
            <video playsInline muted ref={myVideo} autoPlay/> 
            <div className="btns">
              <button onClick={()=>muteAudio()} className="mute audio-btn" title="Mute audio">
                <i className="fas fa-microphone aud"></i>
              </button>
              <button  onClick={()=>disableVideo()} className="mute video-btn" title="Disable video">
                <i className="fas fa-video vid"></i>
              </button>
            </div>
          </div>
        ) : 
          <div className="vid-preview">
            <h5>You</h5>
            <video playsInline muted ref={myVideo} autoPlay/> 
            <div className="audio-indtr"></div>
            <div className="mute-indtr"></div>
          </div> 
        }
        {callAccepted && !callEnded && (
          <div className="vid-container">
            <h5>{call.name || 'Name'}</h5>
            <video playsInline ref={userVideo} autoPlay/>
            <div className="btns">
              <button onClick={()=>muteAudio()} className="mute audio-btn" title="Mute audio">
                <i className="fas fa-microphone aud"></i>
              </button>
              <button  onClick={()=>disableVideo()} className="mute video-btn" title="Disable video">
                <i className="fas fa-video vid"></i>
              </button>
            </div>
          </div>
        )} 
      </div>
    );
  };
  
  export default VideoPlayer;