import GreenButton from "../../components/greenButton"
import Footer from "../../components/footer"
import spotfy from "../../assets/imgs/logo.png"
import './styles.css'
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';


function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState ({
    fullname:"",
    email:"",
    password:"",
  })
  const [isDisabled, setIsDisabled] = useState(true)

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
    navigate('/player');
  };

  useEffect(() => {
    if (formData.fullname && formData.email && formData.password) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [formData]);

  return (
    <div className="container register-signin">
      <img id="logo-spotfy" src= {spotfy} alt="Logo spotfy" />
      <h2>Register</h2>
      <p>If you need any support a <a href="">click here</a></p>

      <form>
        <input type ="text" name="fullname" value={formData.fullname} placeholder="full name" onChange={handleChange}/> 
        <input type="email" name="email" value={formData.email} placeholder="Enter email" onChange={handleChange}/>
        <input type="password" name="password" value={formData.password} placeholder="password" onChange={handleChange}/>
      </form>
      <GreenButton label="creat account" isDisabled={isDisabled} touchClick={handleSubmit}/>
      <Footer />
    </div>
  )
}

export default Register