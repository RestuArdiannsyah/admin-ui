import React from "react";

const LabeledInput = (props) => {
  const { label, id, ...rest } = props;

  return (
    <>
      <label htmlFor={id} className="block text-sm mb-2">
        {label}
      </label>
      <input id={id} {...rest} />
    </>
  );
};

export default LabeledInput;
