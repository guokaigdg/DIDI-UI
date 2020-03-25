import * as React from "react";
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    height: 25,
    fontSize: 14,
    fontWeight: 500,
    marginTop: 8,
    color: "rgba(231,232,232,1)",
    textDecoration: "none",
    borderRadius: 3,
    "&:hover": {
      backgroundColor: "rgba(70,76,80,1)"
    },
    "&:active": {
      backgroundColor: "rgba(63,68,71,1)"
    }
  },
  imageFont: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 63,
    height: 25,
    fontSize: 14,
    fontWeight: 500,
    marginTop: 8,
    color: "rgba(231,232,232,1)",
    textDecoration: "none",
    borderRadius: 3,
    "&:hover": {
      backgroundColor: "rgba(70,76,80,1)"
    },
    "&:active": {
      backgroundColor: "rgba(63,68,71,1)"
    }
  },
  emojiHint: {
    position: "absolute",
    width: 28,
    height: 2,
    marginTop: 38,
    backgroundColor: "#EEEFEEFF"
  },
  imageHint: {
    position: "absolute",
    width: 56,
    height: 2,
    marginTop: 38,
    backgroundColor: "#EEEFEEFF"
  },
  buttonLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    height: 25,
    fontSize: 14,
    fontWeight: 400,
    borderRadius: 3,
    color: "rgba(231,232,232,1)",
    marginLeft: 210,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(70,76,80,1)"
    },
    "&:active": {
      backgroundColor: "rgba(63,68,71,1)"
    }
  },
  buttonRight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    height: 25,
    fontSize: 14,
    fontWeight: 400,
    borderRadius: 3,
    color: "rgba(231,232,232,1)",
    marginLeft: 15,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(70,76,80,1)"
    },
    "&:active": {
      backgroundColor: "rgba(63,68,71,1)"
    }
  }
});
function ChangeIconMenuLink(props: { clickButton1: any; clickButton2: any }) {
  //todo
  const { clickButton1, clickButton2 } = props;
  const classes = useStyles();
  let location = useLocation();
  let pathname = location.pathname;

  return (
    <div className={classes.Wrap}>
      <div className={classes.emojiWrap}>
        <Link className={classes.emojiFont} to="./">
          表情
        </Link>
        {pathname === "/" && <span className={classes.emojiHint} />}
      </div>
      <div className={classes.imageWrap}>
        <Link className={classes.imageFont} to="./image">
          上传图片
        </Link>
        {pathname === "/image" && <span className={classes.imageHint} />}
      </div>
      <div className={classes.buttonLeft} onClick={clickButton1}>
        随机
      </div>

      <div className={classes.buttonRight} onClick={clickButton2}>
        移除
      </div>
    </div>
  );
}
export { ChangeIconMenuLink };
