import playersongs from '../../assets/imgs/ButtonPlay.jpg'
import heart from '../../assets/imgs/Heart.png'
import './style.css';

function SongsList({trackName, artist, trackDuration}){
  return (
    <div>
      <div id="info-songs">
        <div id="playsong">
          <img src={playersongs} alt="play-player-songs" />
        </div>
        <div id="title-subtitle">
          <h4> {trackName} </h4>
          <p> {artist} </p>
        </div>
        <span> {trackDuration} </span>
        <img id='heart' src={heart} alt="heart-player-songs" />
      </div>
    </div>
  )
}

export default SongsList

