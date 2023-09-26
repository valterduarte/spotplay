import GreenButton from "../../components/greenButton"
import spotfy from "../../assets/imgs/logo.png"
import './styles.css'

function Signin() {
  return (
      <div>
        <div className="container register-signin">
          <img id="logo-spotfy" src= {spotfy} alt="Logo spotfy" />
          <h2>Sign In</h2>
          <p>If you need any support a <a href="">click here</a></p>

          <form> 
            <input type="enter username or email" name="enter username or email" placeholder="enter username or email" />
            <input type="password" name="password" placeholder="password" />
          </form>

          <p id="recovery-signin" >Recovery password</p>

          <GreenButton label="Sign In" />
        </div>
      </div>
  )
}

export default Signin