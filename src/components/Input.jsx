import React from "react";
import PropTypes from "prop-types";

function Input({ id, label, type }) {
  return (
    <label htmlFor={id}>
      {label}:
      {type === "number" ? (
        <input
          type={type}
          step="0.0000000001"
          name={id}
          id={id}
          className="border-[1px] border-slate-400 rounded-md"
        />
      ) : (
        <input
          type={type}
          name={id}
          id={id}
          className="border-[1px] border-slate-400 rounded-md"
        />
      )}
    </label>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string
};

Input.defaultProps = {
  type: "text"
};

export default Input;
