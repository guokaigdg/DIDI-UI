import React from "react";
import { Route, Switch } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  viewWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 400,
    height: 231,
    marginLeft: 22,
    marginTop: 21,
    // marginBottom: 51,
    backgroundColor: "pink"
  },
  search: {
    width: 400,
    height: 30,
    background: "rgba(36,40,42,1)",
    borderRadius: 2,
    border: "1px solid rgba(32,32,34,1)",
    backgroundColor: "#202022FF"
  },
  recentEmoji: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: 400,
    height: 64,
    marginTop: 23,
    backgroundColor: "blue"
  },
  emojiPackage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: 400,
    height: 64,
    marginTop: 21,
    backgroundColor: "red"
  },
  title: {
    width: 24,
    height: 17,
    fontSize: 12,
    // font-family:PingFangSC-Medium,PingFang SC;
    fontWeight: 500,
    color: "rgba(184,186,186,1)"
  },
  recentIcon: {
    height: 30,
    backgroundColor: "green"
  },
  emojiIcon: {
    height: 67,
    backgroundColor: "green"
  }
});

function EmojiIcon() {
  const classes = useStyles();
  return (
    <div className={classes.viewWrap}>
      <div className={classes.search}>
        <span>🍉</span>
      </div>
      <div className={classes.recentEmoji}>
        <span className={classes.title}>最近</span>
        <div className={classes.recentIcon}></div>
      </div>
      <div className={classes.emojiPackage}>
        <span className={classes.title}>人物</span>
        <div className={classes.emojiIcon}></div>
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
