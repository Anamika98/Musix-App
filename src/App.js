import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './Components/Login';
import { getTokenFromUrl } from './Environment/spotify';
import Player from './Components/Player';
import { useDataLayerValue } from './Context/DataLayer';
import SpotifyWebApi from 'spotify-web-api-js';//SpotifyWebApi is a wrapper which helps us in connecting to the spotify developer page and also helps in communicating with api easily.
                                                                
const spotify = new SpotifyWebApi(); //creates instance of API which allow communicate back and forth with spotify.

function App() {
  const [{user, token, playlists, discover_weekly}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    console.log(hash.access_token)
    // window.location.hash = '';
    const _token = hash.access_token;
    if(_token) {
    dispatch({
      type: 'SET_TOKEN',
      token: _token
    });
    spotify.setAccessToken(_token)                  // Giving access token (KEY) to the spotify developer app
     spotify.getMe().then(user => {                 //It will connect react to our spotify account and get us all the user details with which we have logged in the developer spotify website.
      dispatch({
        type: 'SET_USER',
        user: user
      });
    });
     spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: 'SET_PLAYLISTS',
        playlists: playlists
      })
    });
     spotify.getPlaylist('37i9dQZF1DWWfZHTa5oacf').then(response => {
      dispatch({
        type: 'SET_DISCOVER_WEEKLY',
        discover_weekly: response
      })
    });
    }
  }, []);

  // console.log('USER', user);
  // console.log('Token', token);
  // console.log('playlist', playlists);
  // console.log('discover_weekly', discover_weekly);

  return (
    <div className="app">
      {
        token ?
        <Player spotify={spotify}/> : <Login/>
      }
    </div>
  );
}

export default App;
