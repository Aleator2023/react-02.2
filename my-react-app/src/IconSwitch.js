
export const IconSwitch = ({ icon, onSwitch }) => {
    return (
      <button onClick={onSwitch} className="icon-button">
        <span className="material-icons">{icon}</span>
      </button>
    );
  };
  