import { useNavigate } from "react-router-dom";
import './styles.css';

function GreenButton({ label }) {
  const navigate = useNavigate();

  function onClick() {
    navigate(`/register`);
  }

  return (
    <button onClick={onClick} className="btn-register">
      {label}
    </button>
  )
}

export default GreenButton