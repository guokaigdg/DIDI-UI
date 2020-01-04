import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import CX from "classnames";
import "./index.css";

/**
 * 侧边栏组件
 * @param {handleChooseSidebarIcon} 点击侧边栏选项
 * @param {sidebarURL} 配置文件路径
 * @param {} 配置文件路径
 * @param {isChosenButton} 是否选中侧边栏按钮
 * @returns
 */
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenOption: null,
      isChosenButton: false,
      list: [
        [
          "设置",
          "../../public/setting-icon.png", //正常状态
          "../../public/setting-icon-slected.png" //选中状态
        ],
        [
          "设置2",
          "../../public/setting-icon.png", //正常状态
          "../../public/setting-icon-slected.png" //选中状态
        ],
        [
          "下载",
          "../../public/download-icon.png",
          "../../public/download-icon-slected.png"
        ],
        [
          "下载2",
          "../../public/download-icon.png",
          "../../public/download-icon-slected.png"
        ]
      ]
    };
  }
  componentDidMount() {
    axios
      .get(this.props.sidebarURL)
      .then(res => {
        this.setState({
          list: res.data.data.list
        });
      })
      .catch(error => console.log("error"));
  }

  handleChooseSidebarButton(option) {
    // console.log(this.state.list[0][2]);
    this.setState({
      isChosenButton: true,
      chosenOption: option
    });
    this.props.chooseSidebarButton();
  }
  render() {
    return (
      <div>
        {this.state.list.map((item, index) => {
          return (
            <div className="sidebar-button-wrapr">
              <div
                role="button"
                onClick={() => this.handleChooseSidebarButton(item)}
                key={item + index}
              >
                <div>
                  {this.state.chosenOption !== item && (
                    <img
                      className="sidebar-icon"
                      src={this.state.list[index][1]}
                      alt=""
                    />
                  )}
                  {this.state.chosenOption === item && (
                    <img
                      className="sidebar-icon"
                      src={this.state.list[index][2]}
                      alt=""
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
Sidebar.prototypes = {
  sidebarName: PropTypes.string,
  sidebarURL: PropTypes.string,
  chooseSidebarButton: PropTypes.func
};
Sidebar.defaultProps = {
  sidebarName: "",
  chooseSidebarButton: () => {}
};

export default Sidebar;
