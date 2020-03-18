import React, { useState } from "react";
import * as PropTypes from "prop-types";
import { BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, LayoutContainerTB6px } from "../index";
import { ChangeIconMenuRoute } from "./ChangeIconMenuRoute";
import { ChangeIconMenuLink } from "./ChangeIconMenuLink";
import data from "./data";

/**
 * Display
 * @param {chooseImage}  上传照片方法
 * @param {onChooseEmoji}  上传emoji方法
 * @returns
 */

const useStyles = makeStyles({
  Wrap: {
    width: 446,
    height: 356,
    background: "rgba(63,68,71,1)",
    boxShadow: " 0 2 4 0 rgba(0,0,0,0.3)",
    borderRadius: "2 2 2 2",
    zIndex: 2
  },
  contentWrap: {
    display: "flex",
    flexDirection: "column"
  },

  RouteWrap: {
    width: 446,
    height: 303,
    backgroundColor: "green"
  }
});
function ChangeIconMenu(props: { onChooseEmoji: any; chooseImage: any }) {
  //todo
  const { onChooseEmoji, chooseImage } = props;
  const classes = useStyles();
  const [emojiIcon, setEmojiIcon] = useState("");

  const handleClickEmoji = (result: string) => {
    setEmojiIcon(result);
    onChooseEmoji(result);
  };
  //随机匹配算法
  const handleRandomemoji = () => {
    const count = [217, 82, 62, 40, 153, 118, 167, 258];
    let randomType = Math.floor(Math.random() * 8);
    let randomIcon = Math.floor(Math.random() * (count[randomType] + 1));
    let randomResult = data[0].categories[randomType].emojis[randomIcon];
    setEmojiIcon(randomResult);
    onChooseEmoji(emojiIcon);
  };
  const handleClearemoji = () => {
    onChooseEmoji("");
  };
  return (
    <div className={classes.Wrap}>
      <LayoutContainerTB6px>
        <Router>
          <div className={classes.contentWrap}>
            <ChangeIconMenuLink
              clickButton1={handleRandomemoji}
              clickButton2={handleClearemoji}
            />
            <Divider />
            <ChangeIconMenuRoute
              chooseImage={chooseImage}
              onClickEmoji={handleClickEmoji}
            />
          </div>
        </Router>
      </LayoutContainerTB6px>
    </div>
  );
}

ChangeIconMenu.protoTypes = {
  chooseImage: PropTypes.func,
  onClickEmoji: PropTypes.func
};
ChangeIconMenu.defaultProps = {
  chooseImage: () => {
    alert("上传照片功能正在开发中, 稍后推出");
  },
  onChooseEmoji: (result: any) => {
    console.log(result);
  }
};

export { ChangeIconMenu };
