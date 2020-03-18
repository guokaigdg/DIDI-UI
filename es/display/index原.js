import React from "react";
import PropTypes from "prop-types";
import Display from "./display.js";

/**
 * Display
 * @param {icon} 图标显示
 * @param {title} 标题
 * @param {onSelct} 点击之后的方法
 * @returns
 */

function DisplayWrap(props) {
  var dia = props.dia;

  return React.createElement(
    "div",
    null,
    React.createElement(Display, { icon: icon, title: title, clickDisplay: onSelct })
  );
}
DisplayWrap.protoTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  onSelct: PropTypes.func
};
DisplayWrap.defaultProps = {
  icon: "book",
  title: "工作区",
  onSelct: function onSelct() {
    console.log("ok");
  }
};
export default DisplayWrap;