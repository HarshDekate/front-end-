import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[28px]", circle: "rounded-[50%]" };
const variants = {
  outline: {
    black_900: "border border-black-900 border-solid text-black-900",
    light_blue_A700: "border-2 border-light_blue-A700 border-solid",
  },
  fill: {
    light_blue_A700: "bg-light_blue-A700 text-white-A700",
    white_A700: "bg-white-A700",
    gray_100: "bg-gray-100",
  },
};
const sizes = { xs: "p-2", sm: "p-[13px]", md: "p-[19px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "black_900",
    "light_blue_A700",
    "white_A700",
    "gray_100",
  ]),
};

export { Button };
