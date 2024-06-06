import hero from "../../assets/imgs/Hero - Image.png" ;
import heart from "../../assets/imgs/like-heart.png";
import line1 from "../../assets/imgs/Line1.png" 
import line2 from "../../assets/imgs/Line2.png"
import circle from "../../assets/imgs/circle.png"
import repeate from "../../assets/imgs/repeate.png"
import previous from "../../assets/imgs/previous.png" 
import buttonnowplaying from "../../assets/imgs/buttonnowplaying.png"
import next from "../../assets/imgs/next.png"
import Shuffle from "../../assets/imgs/Shuffle.png"
import './style.css';

function NowPlaying(){
  return (
   <div>
      <div className="container" id="now-playing">
        <h1>
            Now playing
        </h1>
            <img id='hero-image' src={hero} alt="hero-image" />
          <div id="title-like">
            <div id="title-subtitle">
              <p id='title-song'>Bad Guy</p>
              <p id="subtitle">Billie Eilish</p>
            </div>  
              <img id='heart-like' src={heart} alt="heart-like " /> 
          </div>
          
          <div id="time-line">
            <img id="line1" src={line1} alt="" />
            <img src={circle} alt="" />
            <img id="line2" src={line2} alt="" />
          </div>

          <div id="time-track">
            <p>2;25</p> 
            <p>4:02</p> 
          </div>

          <div id="button-nowplaying">
            <img src={repeate} alt="" srcset="" />
            <img src={previous} alt="" srcset="" />
            <img id="btn-play" src={buttonnowplaying} alt="" srcset="" />
            <img src={next} alt="" srcset="" />
            <img src={Shuffle} alt="" srcset="" />
          </div>
      </div>
   </div>
  )
}


export default NowPlaying 

