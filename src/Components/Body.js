import React from 'react'
import './Body.css';
import Header from './Header';
import { useDataLayerValue } from '../Context/DataLayer';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';


function Body({spotify}) {
    const [{discover_weekly}, dispatch] = useDataLayerValue();
  return (
    <div className='body'>
        <Header spotify={spotify}/>
        <div className='body_info'>
           <img src={discover_weekly?.images?.[0].url} alt='discover_weekly_image'/>
            <div className='body_infoText'>
                <strong> bv</strong>
                <h2>{discover_weekly?.name}</h2>
                <p>{discover_weekly?.description}</p>
            </div> 
            </div>
            <div className='body_songs'>
                <div className='body_icons'>
                    <PlayCircleFilledIcon className='body_shuffle'/>
                    <FavoriteIcon fontSize='large'/>
                    <MoreHorizIcon />
                </div>
                {/* {discover_weekly?.tracks?.items.map(item => (
                    <SongRow track={item.track}/>
                ))} */}
                <SongRow album={discover_weekly?.tracks?.items}/>
            </div>
        </div>
  )
}

export default Body