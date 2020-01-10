import React from "react";
import { Route, Switch } from "react-router-dom";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  viewWrap: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    width: 400,
    height: 231,
    marginLeft: 22,
    marginTop: 21
    // marginBottom: 51,
    // backgroundColor: "pink"
  },
  search: {
    display: "flex",
    alignItems: "center",
    width: 400,
    height: 30,
    background: "rgba(36,40,42,1)",
    borderRadius: 2,
    border: "1px solid rgba(32,32,34,1)"
  },
  searchIcon: {
    marginLeft: 9,
    fontSize: 16,
    color: "#CACCCE"
  },
  searchInput: {
    width: 287,
    height: 20,
    fontSize: 14,
    marginLeft: 5,
    // font-family:PingFangSC-Medium,PingFang SC;
    fontWeight: 500,
    color: "rgba(118,121,122,1)",
    //去掉边框以及阴影
    background: "rgba(36,40,42,1)",
    outlineColor: "invert",
    outlineStyle: "none ",
    outlineWidth: 0,
    border: "none",
    boxShadow: "none",
    borderStyle: "none",
    textShadow: "none"
  },

  recentEmoji: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    width: 400,
    height: 65,
    marginTop: 23
    // backgroundColor: "blue"
  },
  emojiPackage: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    width: 408,
    height: 64,
    marginTop: 21
    // backgroundColor: "red"
  },
  title: {
    width: 24,
    height: 17,
    fontSize: 12,
    // font-family:PingFangSC-Medium,PingFang SC;
    fontWeight: 500,
    color: "rgba(184,186,186,1)",
    marginBottom: 9
    // backgroundColor: "red"
  },
  recentIconWrap: {
    display: "flex",
    // alignItems: "center",
    height: 30,
    marginTop: 8
    // backgroundColor: "blue"
  },
  emojiIcon: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    flexShrink: 0,
    fontSize: 26,
    marginRight: 4,
    marginBottom: 7,
    height: 30,
    width: 30,
    cursor: "pointer"
    // backgroundColor: "pink"
  },
  emojiIconWrap: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    height: 67
    // backgroundColor: "green"
  }
});

function EmojiIcon() {
  const classes = useStyles();
  return (
    <div className={classes.viewWrap}>
      <div className={classes.search}>
        <Icon className={classes.searchIcon}>search</Icon>
        <input placeholder="快速查找" className={classes.searchInput}></input>
      </div>
      <div className={classes.recentEmoji}>
        <span className={classes.title}>最近</span>
        <div className={classes.recentIconWrap}>
          <span
            className={classes.emojiIcon}
            onClick={() => {
              alert("系选择了一个emoji");
            }}
          >
            🍉
          </span>
          <span className={classes.emojiIcon}> 👽</span>

          <span className={classes.emojiIcon}> 🍓</span>
          <span className={classes.emojiIcon}> 🍟</span>
          <span className={classes.emojiIcon}> 🍔 </span>
          <span className={classes.emojiIcon}> 🍥</span>
        </div>
      </div>
      <div className={classes.emojiPackage}>
        <span className={classes.title}>人物</span>
        <div className={classes.emojiIconWrap}>
          <span className={classes.emojiIcon}> 📲</span>
          <span className={classes.emojiIcon}> 🇨🇳</span>
          <span className={classes.emojiIcon}> 🇺🇸</span>
          <span className={classes.emojiIcon}> 🚀</span>
          <span className={classes.emojiIcon}> ⌛️</span>
          <span className={classes.emojiIcon}> 🐔 </span>
          <span className={classes.emojiIcon}> 🦄</span>
          <span className={classes.emojiIcon}> 🐢</span>
          <span className={classes.emojiIcon}> 🐡 </span>
          <span className={classes.emojiIcon}> 🐶</span>
          <span className={classes.emojiIcon}> 🐹 </span>
          <span className={classes.emojiIcon}> 🐰</span>
          <span className={classes.emojiIcon}> 🦊</span>
          <span className={classes.emojiIcon}> 😂</span>
          <span className={classes.emojiIcon}> 🤖</span>
          {/* <span className={classes.emojiIcon}> 🇺🇸</span> */}
          <span className={classes.emojiIcon}> 👑</span>
          <span className={classes.emojiIcon}> 🙏🏻</span>
          <span className={classes.emojiIcon}> 🍓</span>
          <span className={classes.emojiIcon}> 🚌</span>
          <span className={classes.emojiIcon}> 📲</span>
          <span className={classes.emojiIcon}> 👑</span>
          <span className={classes.emojiIcon}> 🙏🏻</span>
          <span className={classes.emojiIcon}> 🇨🇳</span>
          <span className={classes.emojiIcon}> 🇺🇸</span>
        </div>
      </div>
    </div>
  );
}
function ImageIcon() {
  return (
    <div>
      <span>图片</span>
    </div>
  );
}
function ChangeIconMenuRoute() {
  const classes = useStyles();
  return (
    <div>
      <Switch>
        <Route exact path="/emoji">
          <EmojiIcon />
        </Route>
        <Route exact path="/image">
          <ImageIcon />
        </Route>
      </Switch>
    </div>
  );
}
export default ChangeIconMenuRoute;
