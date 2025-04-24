import React, { useState } from 'react';
import playersongs from '../../assets/imgs/ButtonPlay.jpg';
import heart from '../../assets/imgs/Heart.png';
import './style.css';
import { Link } from 'react-router-dom';
import heartRedImg from '../../assets/imgs/heartRredImg.jpg';

function SongsList({ trackName, artist, trackDuration }) {
  const [isHeartRed, setIsHeartRed] = useState(false);

  const toggleHeartColor = () => {
    setIsHeartRed(!isHeartRed);
  };

  return (
    <div>
      <div id="info-songs">
        <div id="playsong">
          <Link to="/nowplaying">
            <img src={playersongs} alt="play-player-songs" />
          </Link>
        </div>
        <div id="title-subtitle">
          <h4>{trackName}</h4>
          <p>{artist}</p>
        </div>
        <span>{trackDuration}</span>
        <img
          id="heart"
          onClick={toggleHeartColor}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') toggleHeartColor();
          }}
          src={isHeartRed ? heartRedImg : heart}
          alt="heart-player-songs"
        />
      </div>
    </div>
  );
}

export default SongsList;
