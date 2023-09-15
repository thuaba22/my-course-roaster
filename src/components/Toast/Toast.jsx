import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Toast = ({ message, duration = 3000, keyProp }) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);
  if (!visible) {
    return null;
  }
  return (
    <div key={keyProp} className="toast-container">
      <div className="toast">
        <p className="toast-message">{message}</p>
      </div>
    </div>
  );
};
Toast.propTypes = {
  message: PropTypes.string.isRequired,
  duration: PropTypes.number,
  keyProp: PropTypes.any,
};
export default Toast;
