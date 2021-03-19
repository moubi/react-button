import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Button.scss";

export default function Button({
  children,
  disabled = false,
  color,
  size,
  onClick,
}) {
  const handleClick = () => {
    if (!disabled) {
      if (typeof onClick === "function") {
        onClick();
      }
    }
  };

  return (
    <button
      className={classNames("Button", {
        [color]: color,
        [size]: size,
      })}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["small", "large"]),
};
