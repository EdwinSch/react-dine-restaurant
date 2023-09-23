import { Link } from "react-router-dom";

const Button = ({ variant, type, label, page }) => {
  return (
    <Link to={page}>
      <button className={variant} type={type}>
        {label}
      </button>
    </Link>
  );
};

export default Button;
