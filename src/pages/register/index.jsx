import GreenButton from "../../components/greenButton"
import Footer from "../../components/footer"
import spotfy from "../../assets/imgs/logo.png"
import './styles.css'
import { useState } from "react"

function Register() {

  const [formData, setFormData] = useState ({
    fullname:"",
    email:"",
    password:"",
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = () => {
    const objFormData = JSON.stringify(formData)
    localStorage.setItem('objFormData', objFormData);
  };

  return (
    <div id="register" className="container">
      <img id="Logo-spotfy" src= {spotfy} alt="Logo spotfy" />
      <h2>Register</h2>
      <p>If you need any support a <a href="">click here</a></p>

      <form>
        <input type ="full name" name="fullname" value={formData.fullname} placeholder="full name" onChange={handleChange}/> 
        <input type="Enter email" name="email" value={formData.email} placeholder="Enter email" onChange={handleChange}/>
        <input type="password" name="password" value={formData.password} placeholder="password" onChange={handleChange}/>
      </form>
      <GreenButton label="creat account" touchClick={handleSubmit} />
      <Footer />
    </div>
  )
}

export default Register