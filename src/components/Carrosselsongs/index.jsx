import retangulo8 from "../../assets/imgs/banner-carrossel.png"
import './style.css';

function Carrosselsongs({ banner, artist, trackName }){
  return (
    <div id="wrapper-song">
      <img src={banner} alt="banner-carrossel" />
      <div className="title-like"></div>
      <p id='title-song'> {trackName} </p>
      <p id="subtitle"> {artist} </p>
    </div>
  )
}

export default Carrosselsongs
  