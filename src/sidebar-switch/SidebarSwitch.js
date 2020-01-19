import React from "react";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  sidebarSwitchWrap: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 29,
    "&:hover": {
      background: "#E6ECF1",
      cursor: "pointer"
    },
    "&:active": {
      backgroundColor: "#DCDCDC"
    }
  },
  sidebarSwitchIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    fontSize: 20,
    width: 23,
    height: 29,
    marginLeft: 15,
    marginRight: 8
  },
  sidebarSwitchTitle: {
    height: 20,
    fontSize: 14,
    fontWeight: 500,
    color: "#262C33",
    marginRight: 8,
    /* 字符串省略显示... */
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },
  sidebarSwitchButtonWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
    marginRight: 15
  },
  sidebarSwitchButton: {
    fontSize: 15,
    color: "#8E9193FF"
  }
});

function SidebarSwitch(props) {
  const { icon, title, clickSidebarSwitch } = props;
  const classes = useStyles();
  const handleonclickSidebarSwitch = () => {
    clickSidebarSwitch(title);
  };
  return (
    <div
      role={classes.button}
      className={classes.sidebarSwitchWrap}
      onClick={handleonclickSidebarSwitch}
    >
      <div className={classes.sidebarSwitchIcon}>{icon}</div>
      <div className={classes.sidebarSwitchTitle}>{title}</div>
      <div className={classes.sidebarSwitchButtonWrap}>
        <Icon className={classes.sidebarSwitchButton}>{"unfold_more"}</Icon>
      </div>
    </div>
  );
}
export default SidebarSwitch;
