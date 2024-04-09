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

function NowPlayimg(){
  return (
   <div>
      <div className="container" id="now-playing">
        <h1>
            Now playing
        </h1>
            <img id='hero-image' src={hero} alt="hero-image" />
          <div className="title-like">
            <p id='title-song'>Bad Guy</p>
            <p id="subtitle">Billie Eilish</p>
            <img id='heart-like' src={heart} alt="heart-like " /> 
          </div>
          <div className="time-line">
            <img src={line1} alt="" />
            <img src={circle} alt="" />
            <img src={line2} alt="" />
          </div>
          <div className="button-nowplaying">
            <img src={repeate} alt="" srcset="" />
            <img src={previous} alt="" srcset="" />
            <img src={buttonnowplaying} alt="" srcset="" />
            <img src={next} alt="" srcset="" />
            <img src={Shuffle} alt="" srcset="" />

          </div>
      </div>
   </div>
  )
}


export default NowPlayimg 

