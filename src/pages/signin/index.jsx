import GreenButton from "../../components/greenButton"
import spotfy from "../../assets/imgs/logo.png"

function Signin() {
  return (
      <div>
        <div className="container">
          <img src= {spotfy} alt="Logo spotfy" />
          <h2>Sign In</h2>
          <p>If you need any support a <a href="">click here</a></p>
          <GreenButton label="Sign In" />
        </div>
      </div>
  )
}

export default Signin