import './styles.css';
import google from '../../assets/imgs/google.png';
import apple from '../../assets/imgs/apple.png';

export default function Footer() {
  return (
    <div id="footer-divisor">
      <p id="footer-or">Or</p>
      <div id="footer-img">
        <img src={google} alt="google" />
        <img src={apple} alt="apple" />
      </div>
      <p id="text-footer">
        Do you have an account?
        <a href="sign In">sign In</a>
      </p>
    </div>
  );
}
