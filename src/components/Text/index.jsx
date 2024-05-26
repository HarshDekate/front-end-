import React from "react";

const sizeClasses = {
  txtMontserratRomanBold18: "font-bold font-montserrat",
  txtPoppinsBold18: "font-bold font-poppins",
  txtMontserratRomanSemiBold18WhiteA700: "font-montserrat font-semibold",
  txtMontserratBold32: "font-bold font-montserrat",
  txtMontserratRomanBold24: "font-bold font-montserrat",
  txtMontserratRomanBold32: "font-bold font-montserrat",
  txtOpenSansRomanRegular16: "font-normal font-opensans",
  txtLatoBlack32: "font-black font-lato",
  txtInterSemiBold16: "font-inter font-semibold",
  txtOpenSansRomanRegular24Black90003: "font-normal font-opensans",
  txtInterBold24: "font-bold font-inter",
  txtOpenSansRomanRegular16Gray600: "font-normal font-opensans",
  txtMontserratRomanMedium48: "font-medium font-montserrat",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtMontserratRomanExtraBold32: "font-extrabold font-montserrat",
  txtOpenSansRomanRegular14: "font-normal font-opensans",
  txtOpenSansRomanRegular24: "font-normal font-opensans",
  txtMontserratRomanMedium16: "font-medium font-montserrat",
  txtMontserratRomanMedium16Black900: "font-medium font-montserrat",
  txtMontserratRomanSemiBold18: "font-montserrat font-semibold",
  txtInterRegular16: "font-inter font-normal",
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
