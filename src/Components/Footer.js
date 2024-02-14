import React, {useRef, useEffect, useState} from 'react'
import './Footer.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid, Slider } from '@mui/material';
import { useDataLayerValue } from '../Context/DataLayer';
import Song from './Song';

function Footer() {
  const [{isPlaying, currentTrack}, dispatch] = useDataLayerValue();
  const [track, setTrack] = useState(currentTrack?.preview_url);

  const audioElement = useRef();

  useEffect(() => {
    setTrack(currentTrack?.preview_url)
    dispatch({
      type: 'AUDIO_REF',
      setAudioRef: audioElement
    })
  }, [currentTrack])

  const playHandler = () => {
    console.log('INSIDE pLAY');
    dispatch({
      type: 'IS_PLAYING',
      isPlaying: true
    })
    audioElement.current.play();
  }

  const pauseHandler = () => {
    console.log('INSIDE PAUSE');
    dispatch({
      type: 'IS_PLAYING',
      isPlaying: false
    })
    audioElement.current.pause();
  }

  return (
    <div className='footer'>
       <div className='footer_left'>
        <img src={currentTrack?.album?.images?.[0].url} alt='' className='footer_logo'></img>
        <div className='song_info'>
           <h4>{currentTrack?.name}</h4>
           <p>{currentTrack?.artists.map(item => item.name).join(',')}</p>
        </div>
        </div>
        <div className='footer_middle'>
           <ShuffleIcon className='footer_green'/>
           <SkipPreviousIcon className='footer_icon'/>
           <audio ref={audioElement} src={track}/>
           { isPlaying ?  <PauseCircleOutlineIcon fontSize='large' className='footer_icon' onClick={pauseHandler}/> :
           <PlayCircleOutlineIcon fontSize='large' className='footer_icon' onClick={playHandler}/>
            }
           <SkipNextIcon className='footer_icon'/>
           <RepeatIcon className='footer_green'/>
        </div>
        <div className='footer_right'>
            <Grid container spacing={2}>
                <Grid item>
                <PlaylistPlayIcon />
                </Grid>
                <Grid item>
                <VolumeDownIcon />
                </Grid>
                <Grid item xs>
                <Slider aria-labelledby='volume_down_slider' />
                </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default Footer