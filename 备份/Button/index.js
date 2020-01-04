import React, { Component } from "react";
import PropTypes from "prop-types";
import CX from "classnames";
import "./index.css";

class Button extends Component {
  render() {
    const { children, disabled, ...props } = this.props;
    return (
      <span
        className={CX({
          btn: true,
          "btn-disabled": disabled === true
        })}
        {...props}
      >
        <span className="btn-content">{children}</span>
      </span>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};
Button.defaultProps = {
  children: "Button",
  onClick: () => {
    return null;
  },
  disabled: false
};

export default Button;
