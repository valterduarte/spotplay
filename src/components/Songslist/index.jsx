import playersongs from '../../assets/imgs/button-play.jpg'
import heart from '../../assets/imgs/Heart.png'
import './style.css';

function SongsList(){
  return (
    <div>
      <div id="info-songs">
        <div id="playsong">
          <img src={playersongs} alt="play-player-songs" />
        </div>
        <div id="title-subtitle">
          <h4>As It Was</h4>
          <p>Harry Styles</p>
        </div>
        <span>5:33</span>
        <img id='heart' src={heart} alt="heart-player-songs" />
      </div>
    </div>
  )
}

export default SongsList

