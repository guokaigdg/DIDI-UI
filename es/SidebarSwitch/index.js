import React from "react";
import PropTypes from "prop-types";
import SidebarSwitch from "./SidebarSwitch.js";

/**
 * 导航栏切换
 * @param {icon} 图标emoji
 * @param {title} 导航栏标题
 * @param {onSelct} 点击之后的方法
 * @returns
 */

function SidebarSwitchWrap(props) {
  var icon = props.icon,
      title = props.title,
      onSelct = props.onSelct;

  return React.createElement(
    "div",
    null,
    React.createElement(SidebarSwitch, { icon: icon, title: title, clickSidebarSwitch: onSelct })
  );
}
SidebarSwitchWrap.protoTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  onSelct: PropTypes.func
};
SidebarSwitchWrap.defaultProps = {
  icon: "👽️",
  title: "我的工作区",
  onSelct: function onSelct() {
    console.log("ok");
  }
};
export default SidebarSwitchWrap;