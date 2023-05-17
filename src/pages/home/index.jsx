import spotfy from "../../assets/imgs/logo.png"
import './styles.css'

function Home() {
  return (
    <>
      <div className="container">
        <div>
          <img src= {spotfy} alt="Logo spotfy" />
        </div>

        <div>
          <h2>Enjoy listening to music</h2>
        </div>
        <div>
          <p>Spotify is a proprietary Swedish audio streaming and media services provider</p>
        </div>
      </div>
    </>
  
    
  )
}

export default Home