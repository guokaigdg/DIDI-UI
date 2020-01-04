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
  var disPlayList = props.disPlayList,
      onSelct = props.onSelct;

  return React.createElement(
    "div",
    null,
    React.createElement(Display, { list: disPlayList, clickDisplay: onSelct })
  );
}
DisplayWrap.protoTypes = {
  disPlayList: PropTypes.object,
  onSelct: PropTypes.func
};
DisplayWrap.defaultProps = {
  disPlayList: [{ icon: "book", title: "工作区" }],
  onSelct: function onSelct() {
    console.log("ok");
  }
};
export default DisplayWrap;