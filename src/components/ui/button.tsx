import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/destination");
  };

  return (
    <button className="button" onClick={handleClick}>
      <p>EXPLORE </p>
    </button>
  );
};

export default Button;
