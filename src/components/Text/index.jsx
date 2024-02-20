import React from "react";

const sizeClasses = {
  txtInterBold14WhiteA700: "font-bold font-inter",
  txtInterMedium14Gray90001: "font-inter font-medium",
  txtInterBold18: "font-bold font-inter",
  txtInterBold14Gray50: "font-bold font-inter",
  txtInterMedium14Gray50: "font-inter font-medium",
  txtInterRegular14Bluegray500: "font-inter font-normal",
  txtInterBold14: "font-bold font-inter",
  txtInterBold18Gray90001: "font-bold font-inter",
  txtInterBold32Gray900: "font-bold font-inter",
  txtInterBold16: "font-bold font-inter",
  txtInterBold28: "font-bold font-inter",
  txtInterMedium16: "font-inter font-medium",
  txtInterBold32: "font-bold font-inter",
  txtInterBold22: "font-bold font-inter",
  txtInterMedium14: "font-inter font-medium",
  txtInterBlack36: "font-black font-inter",
  txtInterBold14Gray90001: "font-bold font-inter",
  txtInterRegular16Gray90001: "font-inter font-normal",
  txtInterMedium16Gray900: "font-inter font-medium",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular16Gray900: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
