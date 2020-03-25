import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Icon from "@material-ui/core/Icon";
// import uuid from "uuid";
import { makeStyles } from "@material-ui/styles";

/**
 * @description 面包屑
 *+-------------------------------------------+
 *| ◀️ ▶️  🐻 IT技术 / 🍔React / 🍉React-hook
 *+-------------------------------------------+
 * @param {titleList}    数据对象,包括 icon, title, url, components
 * @returns
 */
const useStyles = makeStyles({
  topbar: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 66,
    paddingLeft: 28
  },
  buttonWrap: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 24,
    flexShrink: 0,
    width: 55,
    marginRight: 23,
    lineHeight: 66
  },
  goback: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 24,
    height: 24,
    borderRadius: 2.5,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#F7F6F3",
      cursor: "pointer"
    },
    "&:active": {
      backgroundColor: "#DAD9D7"
    }
  },
  goforword: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 24,
    height: 24,
    borderRadius: 2.5,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#F7F6F3",
      cursor: "pointer"
    },
    "&:active": {
      backgroundColor: "#DAD9D7"
    }
  },
  arrowIcon: {
    width: 20,
    height: 20,
    color: "#A6AAAB",
    fontSize: 20
  },
  breadcrumbWrap: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 66
  },
  breadcrumbLink: {
    paddingLeft: 4,
    paddingRight: 4,
    textDecoration: "none",
    "&:hover": {
      height: 24,
      borderRadius: 3,
      backgroundColor: "#F7F6F3",
      cursor: "pointer"
    },
    "&:active": {
      backgroundColor: "#DAD9D7"
    }
  },
  icon: {
    width: 21,
    height: 26,
    fontSize: 16,
    paddingRight: 3,
    flexShrink: 0
  },
  title: {
    height: 20,
    width: 5,
    fontSize: 14,
    fontWeight: 400,
    borderRadius: 2.5,
    color: "#868581",
    lineHeight: 22
  },

  backslash: {
    height: 20,
    paddingRight: 5,
    paddingLeft: 5,
    textAlign: "center",
    fontSize: 14,
    fontWeight: 400,
    color: "#8E9294",
    lineHeight: 20
  },
  content: {
    position: "absolute",
    top: 50,
    left: 100
  }
});

function Breadcrumb(props: { titleList: any }) {
  const { titleList } = props;
  const classes = useStyles();
  let history = useHistory();
  return (
    <div className={classes.topbar}>
      <div className={classes.buttonWrap}>
        <div
          className={classes.goback}
          onClick={() => {
            history.goBack();
          }}
        >
          <Icon className={classes.arrowIcon}>{"arrow_back"}</Icon>
        </div>
        <div
          className={classes.goforword}
          onClick={() => {
            history.goForward();
          }}
        >
          <Icon className={classes.arrowIcon}>{"arrow_forward"}</Icon>
        </div>
      </div>
      <div className={classes.breadcrumbWrap}>
        {titleList.map((item: any, index: number) => (
          <div key={index}>
            <Link to={item.url} className={classes.breadcrumbLink}>
              <span className={classes.icon}>{item.icon}</span>
              {item.title.length <= 29 && (
                <span className={classes.title}>{item.title} </span>
              )}
              {item.title.length > 29 && (
                <span className={classes.title}>
                  {`${item.title.slice(0, 29)}...`}
                </span>
              )}
            </Link>
            {index !== titleList.length - 1 && (
              <span className={classes.backslash}>/</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Breadcrumb;
