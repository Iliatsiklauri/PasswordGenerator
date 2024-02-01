import './button.css';
const Button = () => {
  return (
    <div className="btn">
      <button
        className="flex items-center justify-center gap-3 border-2 border-black"
        type="submit"
      >
        Generate
        <img src="public\Shape (3).png" alt="" />
      </button>
    </div>
  );
};

export default Button;
