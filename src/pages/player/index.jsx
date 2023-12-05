import spotfy from "../../assets/imgs/logo.png"
import './style.css'
import Retagulo8 from "../../components/retangulo-8"

function Player() {
  return (
      <div className="container" id="player">
        <div className="wrapper-logo-menu">
          <img id="player-logo-spotfy" src= {spotfy} alt="Logo spotfy" /> 
          <nav>...</nav>
        </div>

        <h3>News</h3>

        <div id="songbox">
          <Retagulo8/>
          <Retagulo8/>
          <Retagulo8/>
        </div>

        <div id="playlist">
          <p>Playlist</p>
        </div>
      </div> 
  )
}

export default Player