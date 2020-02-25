import React, { useState } from "react";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  displayWrap: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 29,

    "&:hover": {
      background: "#E6E9F1",
      cursor: "pointer"
    },
    "&:active": {
      backgroundColor: "#DAD9D7"
    }
  },

  displayIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: 20,
    height: 20,
    marginLeft: 24,
    marginRight: 7
  },
  materialIcons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  displayTitle: {
    height: 20,
    fontSize: 14,
    marginRight: 24,
    fontWeight: 500,
    color: "#262C33",
    /* 字符串省略显示... */
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }
});

function Display(props) {
  const { list, onclickDisplay } = props;
  const classes = useStyles();
  return (
    <div>
      {list.map((item, index) => (
        <div
          className={classes.displayWrap}
          key={index}
          onClick={() => onclickDisplay(item.href)}
        >
          <div className={classes.displayIcon}>
            <div className={classes.materialIcons}>
              <Icon style={{ fontSize: 16 }}>{item.icon}</Icon>
            </div>
          </div>
          <span className={classes.displayTitle}>{item.title}</span>
        </div>
      ))}
    </div>
  );
}
export default Display;
