import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { SplitLine, LayoutContainerTB6px } from "../index";
import { ChangeIconMenuRoute } from "./ChangeIconMenuRoute";
import { ChangeIconMenuLink } from "./ChangeIconMenuLink";
import { Emoji } from "emoji-mart";
import data from "./data";

const useStyles = makeStyles({
  Wrap: {
    width: 446,
    height: 356,
    background: "rgba(63,68,71,1)",
    boxShadow: " 0 2 4 0 rgba(0,0,0,0.3)",
    borderRadius: "2 0 2 2"
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
function ChangeIconMenu() {
  const classes = useStyles();
  const [emojiIcon, setEmojiIcon] = useState("");
  useEffect(() => {
    // console.log("🙆‍♂️");
  });

  const handleClickEmoji = result => {
    setEmojiIcon(result);
    console.log(result);
  };
  const handleRandomemoji = () => {
    const count = [217, 82, 62, 40, 153, 118, 167, 258];
    let randomType = parseInt(Math.random() * 8);
    let randomIcon = parseInt(Math.random() * (count[randomType] + 1));
    let randomResult = data[0].categories[randomType].emojis[randomIcon];
    console.log(randomType);
    console.log(randomIcon);
    setEmojiIcon(randomResult);
  };
  const handleClearemoji = () => {
    setEmojiIcon(" ");
  };
  return (
    <div>
      <div>
        结果:
        <div style={{ width: 100, height: 40 }}>
          <Emoji emoji={emojiIcon} size={28} />
        </div>
        名字:{emojiIcon}
      </div>
      <div className={classes.Wrap}>
        <LayoutContainerTB6px>
          <Router>
            <div className={classes.contentWrap}>
              <ChangeIconMenuLink
                clickButton1={handleRandomemoji}
                clickButton2={handleClearemoji}
              />
              <SplitLine />
              <ChangeIconMenuRoute
                chooseImage={() => {
                  alert("你选择了一个图片");
                }}
                onClickEmoji={handleClickEmoji}
              />
            </div>
          </Router>
        </LayoutContainerTB6px>
      </div>
    </div>
  );
}

//传入emoji
//出入随机事件
//传入移除事件
//传入选择了摸个emoji事件
//出传入上传照片事件

export { ChangeIconMenu };
