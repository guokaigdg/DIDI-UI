import React from "react";
import PropTypes from "prop-types";
import SidebarSwitch from "./SidebarSwitch.js";

/**
 * 侧边导航栏切换
 * @param {icon} 图标emoji
 * @param {title} 导航栏标题
 * @param {onSelect} 点击方法
 * @returns
 */

function SidebarSwitchWrap(props) {
  const { icon, title, onSelect } = props;
  const handleonSelect = result => {
    onSelect(result);
  };
  return (
    <div>
      <SidebarSwitch
        icon={icon}
        title={title}
        clickSidebarSwitch={handleonSelect}
      />
    </div>
  );
}
SidebarSwitchWrap.protoTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  onSelect: PropTypes.func
};
SidebarSwitchWrap.defaultProps = {
  icon: "👽️",
  title: "我的工作区",
  onSelect: () => {
    console.log("ok");
  }
};
export { SidebarSwitchWrap };
