import React from "react";
import PropTypes from "prop-types";
import Display from "./display.js";

/**
 * Display
 * @param {icon} 图标
 * @param {title} 标题
 * @param {onSelect} 点击标题返回标题吗名字的方法
 * @returns
 */

function DisplayWrap(props) {
  var disPlayList = props.disPlayList,
      onSelect = props.onSelect;

  var handleonCelct = function handleonCelct(titleName) {
    onSelect(titleName);
  };
  return React.createElement(
    "div",
    null,
    React.createElement(Display, { list: disPlayList, onclickDisplay: handleonCelct })
  );
}
DisplayWrap.protoTypes = {
  disPlayList: PropTypes.object,
  onSelect: PropTypes.func
};
DisplayWrap.defaultProps = {
  disPlayList: [{ icon: "book", title: "工作区" }],
  onSelect: function onSelect() {}
};
export { DisplayWrap };