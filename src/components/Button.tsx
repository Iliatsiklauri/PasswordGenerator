import './button.css';
const Button = () => {
  return (
    <div className="btn">
      <button
        className="btn flex items-center justify-center gap-3 border-2 border-black"
        type="submit"
      >
        <p className="generate">Generate</p>
        <img src="Shape (3).png" alt="" />
      </button>
    </div>
  );
};

export default Button;
