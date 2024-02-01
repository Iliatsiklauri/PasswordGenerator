import './check.css';
import React from 'react';

type CheckElementProps = {
  text: string;
  checked: boolean;
  setChecked: (checked: boolean) => void;
};

const CheckElement: React.FC<CheckElementProps> = ({ text, checked, setChecked }) => {
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="wrappper flex items-center">
      <input
        className="checkbox"
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <p className="ml-2">{text}</p>
    </div>
  );
};

export default CheckElement;
