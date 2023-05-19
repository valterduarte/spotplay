import Register from "../../components/register"
import spotfy from "../../assets/imgs/logo.png"
import './styles.css'

function Home() {
  return (
    <div className="container">
      <img src= {spotfy} alt="Logo spotfy" />
      <h2>Enjoy listening to music</h2>
      <p>Spotify is a proprietary Swedish audio streaming and media services provider</p>
      <div id="container-button">
        <Register />
        <a href="">
          <strong>Sign In</strong>
        </a>
      </div>
    </div>
  )
}

export default Home