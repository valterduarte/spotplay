import { Link } from 'react-router-dom';
import GreenButton from '../../components/greenButton';
import spotfy from '../../assets/imgs/logo.png';
import './styles.css';

function Home() {
  return (
    <div id="home" className="container">
      <img src={spotfy} alt="Logo spotfy" />
      <h2>Enjoy listening to music</h2>
      <p>Spotify is a proprietary Swedish audio streaming and media services provider</p>

      <div id="container-button">
        <div className="button-register-home">
          <Link to="/Register">
            <GreenButton label="Register" />
          </Link>
        </div>

        <Link to="/signin">
          <strong>Sign In</strong>
        </Link>
      </div>
    </div>
  );
}

export default Home;
