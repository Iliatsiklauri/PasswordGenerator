import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Password from './components/Password';
import { lowercaseLetters, uppercaseLetters, numbers, symbols } from './data.ts';
import CheckElement from './components/CheckElement.tsx';
import Strength from './components/Strength.tsx';

const App = () => {
  const [value, setValue] = useState(10);
  const [password, setPassword] = useState('');
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [checkedCount, setCheckedCount] = useState(1);

  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  const handleCheckboxToggle = (isChecked: boolean) => {
    const newCheckedCount = isChecked ? checkedCount + 1 : checkedCount - 1;
    setCheckedCount(newCheckedCount);
  };

  const generateRandomPassword = () => {
    const selectedChars = [
      ...(includeLowercase ? lowercaseLetters : []),
      ...(includeUppercase ? uppercaseLetters : []),
      ...(includeNumbers ? numbers : []),
      ...(includeSymbols ? symbols : []),
    ];

    const shuffledArray = selectedChars.sort(() => Math.random() - 0.5);
    setPassword(shuffledArray.slice(0, value).join(''));
  };

  return (
    <div className="bg-gray-900 w-screen h-screen flex items-center justify-center gap-4 flex-col">
      <h1 className="header">Password Generator</h1>
      <Password text={password} />
      <form
        className="forma border-2 border-black flex flex-col items-center justify-between w-[343px] p-3"
        onSubmit={(e) => {
          e.preventDefault();
          generateRandomPassword();
        }}
      >
        <div className="sazomi flex w-full justify-between">
          <h1 className="char">Character length:</h1>
          <h1 className="numberValue">{value}</h1>
        </div>
        <input type="range" max={20} className="range" onChange={getValue} />
        <div className="checkboxes w-full flex flex-col gap-3 mb-4 mt-4">


          <CheckElement
            text={'Include Uppercase Letters'}
            checked={includeUppercase}
            setChecked={(isChecked) => {
              setIncludeUppercase(isChecked);
              handleCheckboxToggle(isChecked);
            }}
          />
          <CheckElement
            text={'Include Lowercase Letters'}
            checked={includeLowercase}
            setChecked={(isChecked) => {
              setIncludeLowercase(isChecked);
              handleCheckboxToggle(isChecked);
            }}
          />
          <CheckElement
            text={'Include Numbers'}
            checked={includeNumbers}
            setChecked={(isChecked) => {
              setIncludeNumbers(isChecked);
              handleCheckboxToggle(isChecked);
            }}
          />
          <CheckElement
            text={'Include Symbols'}
            checked={includeSymbols}
            setChecked={(isChecked) => {
              setIncludeSymbols(isChecked);
              handleCheckboxToggle(isChecked);
            }}
          />
        </div>
        <Strength count={checkedCount} />
        <Button />
      </form>
    </div>
  );
};

export default App;
