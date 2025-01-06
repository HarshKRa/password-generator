import React from "react";
import "../App.css";

const PasswordStrengthIndicator = ({ password = "" }) => {
  let lengt = password.length;
  const getPasswordStrength = () => {
    if (lengt < 1) return "";
    else if (lengt < 4) return "Very Weak";
    else if (lengt < 8) return "Poor";
    else if (lengt < 12) return "Poor";
    else if (lengt < 12) return "Medium";
    else if (lengt < 16) return "Strong";
    else return "Very Strong";
  };

  const passwordStrength = getPasswordStrength();
  if (!passwordStrength) return <React.Fragment />;

  return (
    <div className="password-strength">
      Strength : <span style={{ fontWeight: "bold" }}>{passwordStrength}</span>
    </div>
  );
};

export default PasswordStrengthIndicator;
