import React, { Component } from "react";
import axios from "axios";
import SidebarButton from "../SidebarButton/index";
import "./index.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenOption: null,
      id: null,
      list: []
    };
  }
  componentDidMount() {
    axios
      .get("../../public/data.json")
      .then(res => {
        this.setState({
          list: res.data.data.list
        });
      })
      .catch(error => console.log("error"));
  }

  handleClick(name) {
    this.setState({
      chosenOption: name
    });
  }
  render() {
    return (
      <div>
        {this.state.list.map((item, index) => {
          return (
            <SidebarButton
              ischooseButton={
                this.state.chosenOption === item.name ? true : false
              }
              chooseSidebarButton={name => this.handleClick(name)}
              name={item.name}
              sidebarUrlDefault={item.urldefault}
              sidebarUrlSlected={item.urlselected}
              key={item + index}
            />
          );
        })}
      </div>
    );
  }
}

export default Sidebar;
