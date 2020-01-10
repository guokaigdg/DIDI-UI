import React from "react";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  Wrap: {
    display: "flex",
    alignItems: "center",
    width: 446,
    height: 40
  },
  emojiWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 40,
    width: 28,
    marginLeft: 23
  },
  imageWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 40,
    width: 56,
    marginLeft: 24
  },
  emojiFont: {
    width: 28,
    height: 20,
    fontSize: 14,
    // fontFamily:"PingFangSC-Medium","PingFang SC",
    fontWeight: 500,
    marginTop: 8,
    color: "rgba(231,232,232,1)",
    textDecoration: "none"
  },
  imageFont: {
    width: 56,
    height: 20,
    fontSize: 14,
    // fontFamily:PingFangSC-Medium,PingFang SC;
    fontWeight: 500,
    marginTop: 8,
    color: "rgba(231,232,232,1)",
    textDecoration: "none"
  },
  emojiHint: {
    width: 28,
    height: 2,
    marginTop: 10,
    backgroundColor: "#EEEFEEFF"
  },
  imageHint: {
    width: 56,
    height: 2,
    marginTop: 10,
    backgroundColor: "#EEEFEEFF"
  },
  buttonLeft: {
    width: 28,
    height: 20,
    fontSize: 14,
    // font-family:PingFangSC-Regular,PingFang SC;
    fontWeight: 400,
    color: "rgba(231,232,232,1)",
    marginLeft: 210,
    cursor: "pointer"
  },
  buttonRight: {
    width: 28,
    height: 20,
    fontSize: 14,
    // font-family:PingFangSC-Regular,PingFang SC;
    fontWeight: 400,
    color: "rgba(231,232,232,1)",
    marginLeft: 24,
    cursor: "pointer"
  }
});
function ChangeIconMenuLink(props) {
  const { clickButton1, clickButton2 } = props;
  const classes = useStyles();
  let location = useLocation();
  let pathname = location.pathname;
  console.log(pathname);

  return (
    <div className={classes.Wrap}>
      <div className={classes.emojiWrap}>
        <Link className={classes.emojiFont} to="./emoji">
          表情
        </Link>
        {pathname === "/emoji" && <span className={classes.emojiHint} />}
      </div>
      <div className={classes.imageWrap}>
        <Link className={classes.imageFont} to="./image">
          上传图片
        </Link>
        {pathname === "/image" && <span className={classes.imageHint} />}
      </div>
      <div className={classes.buttonLeft} onClick={clickButton1}>
        按钮
      </div>

      <div className={classes.buttonRight} onClick={clickButton2}>
        按钮
      </div>
    </div>
  );
}
export default ChangeIconMenuLink;
