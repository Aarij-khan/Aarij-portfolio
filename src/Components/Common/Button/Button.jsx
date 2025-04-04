import "./Button.css";
import "./responsive.css";

const Button = ({ text, isImg, onClick }) => {
  return (
    <button onClick={onClick}>  
      {text}
      {isImg && <img src="./assets/images/download.png" alt="Download Icon" />}
    </button>
  );
};

export default Button;
