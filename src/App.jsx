import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CheckBox from "./components/CheckBox";
import usePasswordGenerator from "./hooks/UsePasswordGenerator";
import PasswordStrengthIndicator from "./components/StrengthChecker";

function App() {
  const [passwordLength, setPasswordLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);

  const [copied, setCopied] = useState(false);

  console.log(checkboxData);

  const handleCheckboxData = (index) => {
    const copyData = [...checkboxData];
    copyData[index].state = !copyData[index].state;
    setCheckboxData(copyData);
  };

  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    let setInterval = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(setInterval);
  };

  return (
    <div className="appContainer">
      <div className="mainContainer">
        {password && (
          <div className="passwordContainer">
            <span>{password}</span>
            <button onClick={handleCopy} className="btn">
              {copied ? "copied" : "copy"}
            </button>
          </div>
        )}
        <div className="charlength">
          <span>
            <label>Character Length</label>
            <label>{passwordLength}</label>
          </span>
          <input
            type="range"
            min="0"
            max="20"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
          />
        </div>
        <div className="checkboxes">
          {checkboxData.map((checkbox, index) => {
            return (
              <CheckBox
                key={index}
                title={checkbox.title}
                onChange={() => handleCheckboxData(index)}
                state={checkbox.state}
              />
            );
          })}
        </div>
        {password && <PasswordStrengthIndicator password={password} />}
        {errorMessage && <div className="errorMessage">{errorMessage}</div>}
        <button
          className="btn"
          onClick={() => generatePassword(checkboxData, passwordLength)}
        >
          GENERATE PASSWORD
        </button>
      </div>
    </div>
  );
}

export default App;
