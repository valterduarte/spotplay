import spotfy from "../../assets/imgs/logo.png"
import './style.css'
import Carrosselsongs from "../../components/Carrosselsongs"
import Songslist from '../../components/Songslist'

function Player() {
  return (
      <div className="container" id="player">
        <div className="wrapper-logo-menu">
          <img id="player-logo-spotfy" src={spotfy} alt="Logo spotfy" /> 
          <nav>...</nav>
        </div>

        <h3>News</h3>
        <div id="songbox">
          <Carrosselsongs/>
          <Carrosselsongs/>
          <Carrosselsongs/>
        </div>

        <h3>Playlist</h3>
        <div id="playlist">
          <Songslist/>
          <Songslist/>
        </div>
      </div> 
  )
}

export default Player
