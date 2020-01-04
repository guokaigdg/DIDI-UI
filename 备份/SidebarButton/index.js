import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

/**
 * 侧边栏按钮组件
 * @param {sidebarUrlDefault} 正常图标地址url
 * @param {sidebarUrlSlected} 选中图标地址url
 * @param {chooseSidebarButton} 按钮点击事件
 * @param {isChosenButton} 是否选中侧边栏按钮
 * @returns
 */
class SidebarButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // handleChooseSidebarButton(name) {
  //   this.props.chooseSidebarButton(name);
  // }
  render() {
    return (
      <div
        role="button"
        className="sidebar-button-wrapr"
        onClick={() => this.props.chooseSidebarButton(this.props.name)}
      >
        {this.props.ischooseButton === true && (
          <img
            className="sidebar-icon"
            src={this.props.sidebarUrlSlected}
            alt=""
          />
        )}
        {this.props.ischooseButton === false && (
          <img
            className="sidebar-icon"
            src={this.props.sidebarUrlDefault}
            alt=""
          />
        )}
      </div>
    );
  }
}
SidebarButton.prototypes = {
  name: PropTypes.string,
  sidebarUrlSlected: PropTypes.string,
  sidebarUrlDefault: PropTypes.string,
  chooseSidebarButton: PropTypes.func,
  ischooseButton: PropTypes.bool
};
SidebarButton.defaultProps = {
  clickButtonFlag: null,
  ischooseButton: false
};
export default SidebarButton;
