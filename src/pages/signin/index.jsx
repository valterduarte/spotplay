import GreenButton from '../../components/greenButton';
import spotfy from '../../assets/imgs/logo.png';
import './styles.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const localStorageDataLogin = localStorage.getItem('objFormData');
    const localStorageDataLoginObject = JSON.parse(localStorageDataLogin);

    if (
      formData.email === localStorageDataLoginObject.email
      && formData.password === localStorageDataLoginObject.password
    ) {
      navigate('/player');
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    if (formData.email && formData.password) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formData]);

  return (
    <div>
      <div className="container register-signin">
        <img id="logo-spotfy" src={spotfy} alt="Logo spotfy" />
        <h2>Sign In</h2>
        <p>
          If you need any support a
          <a href="">click here</a>
        </p>

        <form>
          <input type="text" name="email" placeholder="enter email" onChange={handleChange} />
          <input type="password" name="password" placeholder="password" onChange={handleChange} />
        </form>

        {isVisible && <p id="login-ou-senha-inválido">Login ou Senha inválidos</p>}
        <p id="recovery-signin">Recovery password</p>

        <GreenButton label="Sign In" isDisabled={isDisabled} touchClick={handleSubmit} />
      </div>
    </div>
  );
}

export default Signin;
