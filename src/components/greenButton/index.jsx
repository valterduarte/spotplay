import './styles.css';

function GreenButton({ label, touchClick }) {
  function onClick() {
    touchClick();
  }

  return (
    <button onClick={onClick} className="btn-register">
      {label}
    </button>
  )
}

export default GreenButton