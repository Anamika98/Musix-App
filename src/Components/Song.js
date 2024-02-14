import React, {useRef} from 'react';
import { useDataLayerValue } from '../Context/DataLayer';

function Song() {
const [{currentTrack, setAudio}, dispatch] = useDataLayerValue();
let song = new Audio(setAudio);
song.src = setAudio;
song.id = currentTrack.name;
return song;
}

export default Song;


