import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CheckBox from "./components/CheckBox";

function App() {
  const [passwordLength, setPasswordLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);

  console.log(checkboxData);

  const handleCheckboxData = (index) => {
    const copyData = [...checkboxData];
    copyData[index].state = !copyData[index].state;
    setCheckboxData(copyData);
  };
  return (
    <div className="appContainer">
      <div className="mainContainer">
        <div className="passwordContainer">
          <span>#!Ggw%6</span>
          <button className="btn">Copy</button>
        </div>
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
        <button className="btn">GENERATE PASSWORD</button>
      </div>
    </div>
  );
}

export default App;
