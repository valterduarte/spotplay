import spotfy from "../../assets/imgs/logo.png"
import './style.css'
import Carrosselsongs from "../../components/Carrosselsongs"
import Songslist from '../../components/Songslist'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Player() {
  const [token, setToken] = useState('');
  const [tracks, setTracks] = useState([]);

    // esse useefect pega os dados
  useEffect(() => {
    async function fetchToken() {
      const clientId = "68e57a12f2bd44f48da49c4cfbd01c25";
      const clientSecret = "e327edb3ff2c4b528a807b1f7f060858";

      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
      }).catch(err => console.error("Token API Error:", err));

      const data = await response.json();
      console.log(data.access_token)
      setToken(data.access_token);
    }
    fetchToken()
  }, []);

  // esse useefect pega as musicas
  useEffect(() => {
    async function getTracks() {
      const response = await fetch("https://api.spotify.com/v1/search?q=artist%3ASabrina%20Carpenter&type=track", {
        method: "GET",
        headers: { "Authorization": `Bearer ${token}`},
      }).catch(err => console.error("Get Tracks Error:", err));

      const data = await response.json();
      
      console.log(data.tracks.items)
      setTracks(data.tracks.items);
    }

    if (token !== '') getTracks();
  }, [token]);
  
  return (
    <div className="container" id="player">
      <div className="wrapper-logo-menu">
        <img id="player-logo-spotfy" src={spotfy} alt="Logo spotfy" /> 
      </div>

      <h3>News</h3>
        <div id="songbox">
          {tracks.slice(0, 3).map((track) => (
            <Link to={`/nowplaying`} key={track.id}>
              <Carrosselsongs
                artist={track.artists[0].name}
                trackName={track.name}
                banner={track.album.images.length > 0 ? track.album.images[1].url : ''}
              />
            </Link>
          ))}
        </div>
      
      <h3>Playlist</h3>
      <div id="playlist">
        {tracks.slice(0, 10).map((track) => <Songslist trackName={track.name} artist={track.artists[0].name} trackDuration={track.duration_ms} key={track.id} />)}
      </div>
    </div> 
  )
}

export default Player
