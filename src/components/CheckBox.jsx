import React from "react";

const CheckBox = ({ title, state, onChange }) => {
  return (
    <div>
      <input
        type="checkbox"
        name=""
        id=""
        onChange={onChange}
        checked={state}
      />
      <span>{title}</span>
    </div>
  );
};

export default CheckBox;
