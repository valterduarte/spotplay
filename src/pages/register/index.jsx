import GreenButton from "../../components/greenButton"
import spotfy from "../../assets/imgs/logo.png"
import './styles.css'

function Register() {
  return (
    <div className="container">
      <img src= {spotfy} alt="Logo spotfy" />
      <h2>Register</h2>
      <p>If you need any support a <a href="">click here</a></p>
      <GreenButton label="creat account" />
    </div>
  )
}

export default Register