import React from 'react';
import VideoPlayer from './components/videoPlayer';
import Options from './components/options';
import Notifications from './components/notifications';

const App = () => {

  return(
    <>
      <VideoPlayer/>
      <Notifications/>
      <Options/>
    </>
  );
};

export default App;