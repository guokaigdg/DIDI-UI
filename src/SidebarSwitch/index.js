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
  const { icon, title, onSelct } = props;
  return (
    <div>
      <SidebarSwitch icon={icon} title={title} clickSidebarSwitch={onSelct} />
    </div>
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
  onSelct: () => {
    console.log("ok");
  }
};
export default SidebarSwitchWrap;
