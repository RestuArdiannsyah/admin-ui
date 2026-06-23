import React from "react";

const Button = (props) => {
  const { children, type = "submit", variant = "primary" } = props;

  const baseClasses = "h-12 rounded-md text-sm w-full cursor-pointer hover:scale-105";
  const variantClasses = {
    primary: "bg-primary text-white",
    secondary: "bg-gray-05 text-gray-02",
  };

  const finalCalsses = `${baseClasses} ${variantClasses[variant] || variantClasses.primary}`;

  return (
    <>
      <button className={finalCalsses} type={type}>
        {children}
      </button>
    </>
  );
};

export default Button;
