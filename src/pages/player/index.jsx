import spotfy from "../../assets/imgs/logo.png"
import './style.css'
import Retagulo8 from "../../components/retangulo-8"

function Player() {
  return (
    <div>
        <div className="container register-signin">
          <div className="wrapper-logo-menu">
            <img id="player-logo-spotfy" src= {spotfy} alt="Logo spotfy" /> 
            <nav>...</nav>
          </div>

          <div id="news">
            <p>News</p>
          </div>

          <Retagulo8/>
        
        </div>

    </div>  
  )
}

export default Player