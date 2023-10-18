import './styles.css';

function GreenButton({ label, touchClick, isDisabled=false }) {
  function onClick() {
    touchClick();
  }

  return (
    <button disabled={isDisabled} onClick={onClick} className="btn-register">
      {label}
    </button>
  )
}

export default GreenButton