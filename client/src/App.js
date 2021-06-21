import React from 'react';
import VideoPlayer from './components/videoPlayer';
import Options from './components/options';
import Notifications from './components/notifications';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  text: {
    color: 'white',
    padding: '15px',
    textShadow: '0 0 5px black'
  }
}));

const App = () => {

  const classes = useStyles();

  return(
    <div className={classes.wrapper}>
      <Typography className={classes.text} variant="h3" align="center">Video Chat</Typography>
      <VideoPlayer/>
      <Options>
        <Notifications/>
      </Options>
    </div>
  );
};

export default App;