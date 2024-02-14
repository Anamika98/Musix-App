import React, {useState, useEffect, useRef} from 'react'
import './SongRow.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useDataLayerValue } from '../Context/DataLayer';
import Song from './Song';

function SongRow({ album }) {
  const [{setAudioRef, currentTrack, setAudio}, dispatch] = useDataLayerValue();

  const handleClick = (track) => {
    dispatch({
      type: 'IS_PLAYING',
      isPlaying: true
    })
    if(currentTrack?.name !== track.name) {
      dispatch({
        type: 'SET_AUDIO',
        setAudio: track.preview_url
      })  
    dispatch({
      type: 'SET_CURRENT_TRACK',
      currentTrack: track
    })
  }
  console.log('inside songRow');
    setAudioRef.current && setAudioRef.current.play();
  }

  const formatDate = (a) => {
    let date = new Date(a);
    let todayDate = new Date();
    let differenceInTime = todayDate.getTime() - date.getTime();
    let days = Math.round(differenceInTime / (1000 * 3600 * 24))
    switch (days) {
      case 0:
        return 'today'
      case 1:
        return '1 day ago'
      case 2:
        return '2 days ago'
      case 3:
        return '3 days ago'
      case 4:
        return '4 days ago'
      case 5:
        return '5 days ago'
      case 6:
        return '6 days ago'
      case 7: case 8: case 9: case 10: case 11: case 12: case 13:
        return '1 week ago'
      case 14: case 15: case 16: case 17: case 18: case 19: case 20:
        return '2 week ago'
      case 21: case 22: case 23: case 24: case 25: case 26: case 27:
        return '3 week ago'
      default:
        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();
        if (dd < 10) { dd = '0' + dd }
        if (mm < 10) { mm = '0' + mm };
        return dd + '/' + mm + '/' + yyyy
    }
  }

  const formatTime = (time) => {
    let a = time / (1000 * 60);
    let b = a.toFixed(2);
    return b.replace('.', ':')
  }

  return (
    <TableContainer className='tableContainer'>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><p className='song_info'>#</p></TableCell>
            <TableCell><p className='song_info'>Title</p></TableCell>
            <TableCell><p className='song_info'>Album</p></TableCell>
            <TableCell><p className='song_info'>Date Added</p></TableCell>
            <TableCell><p className='song_info'>Time</p></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {album?.map((item, key) => (
            <TableRow key={key+1} className='songRow' onClick={() => handleClick(item.track)} sx={{ border: 'hidden' }}>
              <TableCell><p className='song_info'>{key + 1}</p></TableCell>
              <TableCell>
                <div className='songTitle'>
                  <img className='songRow_image' src={item.track.album.images[0].url} alt='track_image' />
                  <div className='songRow_info'>
                    <h1>{item.track.name}</h1>
                    <p>{item.track.artists.map(item => item.name).join(',')}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell><p className='song_infoAlbum'>{item.track.album.name}</p></TableCell>
              <TableCell><p className='song_info'>{formatDate(item.added_at)}</p></TableCell>
              <TableCell><p className='song_info'>{formatTime(item.track.duration_ms)}</p></TableCell>
            </TableRow>
          ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default SongRow