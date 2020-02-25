import React from "react";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import CX from "classnames";

const useStyles = makeStyles({
  itemLeft: {
    flexShrink: 0,
    height: 29,
    width: 2,
    backgroundColor: "#E6ECF1"
  },

  contentOutline: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 225,
    height: 29
  },
  icon: {
    display: "flex",
    alignItems: "center",
    marginLeft: 22,
    width: 16,
    height: 16
  },

  title: {
    marginLeft: 7,
    height: 17,
    fontSize: 12,
    fontWeight: 500,
    color: "#9DAAB6"
  },

  itemWrap: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 225,
    height: 29,
    cursor: "pointer",
    textDecoration: "none",

    "&:hover": {
      backgroundColor: "#E6ECF1"
    }
  },
  itemIcon: {
    position: "absolute",
    width: 2,
    height: 29,
    background: "#A44EED"
  },

  fontH1Default: {
    marginLeft: 23,
    fontSize: 12,
    fontWeight: 500,
    color: "#7C8893",
    /* 字符串省略显示... */
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },

  fontH1Choosen: {
    color: "#A755ED"
  },

  fontH2Default: {
    marginLeft: 40,
    fontSize: 12,
    fontWeight: 500,
    color: "#7C8893",
    /* 字符串省略显示... */
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },

  fontH2Choosen: {
    color: "#A755ED"
  }
});

function StickyBlockBox(props) {
  const { list } = props;
  let location = useLocation();
  let newHref = location.hash;
  console.log(newHref);

  const classes = useStyles();
  return (
    <div>
      {list && (
        <div className={classes.contentOutline}>
          <div className={classes.itemLeft}></div>
          <span className={classes.icon}>
            <FormatAlignLeftIcon style={{ fontSize: 16 }} />
          </span>
          <span className={classes.title}>内容大纲</span>
        </div>
      )}
      {list.map((item, index) => (
        <Link to={item.href} className={classes.itemWrap} key={index + item}>
          <div className={classes.itemLeft}></div>
          {item.href === newHref && <span className={classes.itemIcon} />}
          {item.type === "H1" && (
            <span
              className={CX({
                [classes.fontH1Default]: true,
                [classes.fontH1Choosen]: item.href === newHref
              })}
            >
              {item.name}
            </span>
          )}
          {item.type === "H2" && (
            <div
              className={CX({
                [classes.fontH2Default]: true,
                [classes.fontH2Choosen]: item.href === newHref
              })}
            >
              {item.name}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}
export default StickyBlockBox;
