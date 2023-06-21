import GreenButton from "../../components/greenButton"
import Footer from "../../components/footer"
import spotfy from "../../assets/imgs/logo.png"
import './styles.css'

function Register() {
  return (
    <div id="register" className="container">
      <img src= {spotfy} alt="Logo spotfy" />
      <h2>Register</h2>
      <p>If you need any support a <a href="">click here</a></p>

      <form>
        <input type="full name" name="full name" placeholder="full name"/>
        <input type="Enter email" placeholder="Enter email" />
        <input type="password" placeholder="password"/>
      </form>
      <GreenButton label="creat account" />
      <Footer />
    </div>
  )
}

export default Register