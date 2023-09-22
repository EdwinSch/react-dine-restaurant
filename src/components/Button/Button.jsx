const Button = ({ variant, type, label }) => {
  return (
    <button className={variant} type={type}>
      {label}
    </button>
  );
};

export default Button;
