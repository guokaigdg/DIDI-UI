import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import "emoji-mart/css/emoji-mart.css";
import { Emoji } from "emoji-mart";
import data from "./messenger";
// import data from "../../public/apple";

const useStyles = makeStyles({
  viewWrap: {
    display: "flex",
    flexDirection: "column",
    width: 400,
    height: 288,
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
  cancelIcon: {
    marginLeft: 57,
    fontSize: 16,
    color: "#CACCCE",
    cursor: "pointer"
  },
  searchInput: {
    width: 287,
    height: 20,
    fontSize: 14,
    marginLeft: 5,
    // font-family:PingFangSC-Medium,PingFang SC;
    fontWeight: 500,
    color: "rgba(231,232,232,1)",
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
  emojiWrap: {
    width: 417,
    height: 150,
    flexWrap: "wrap",
    height: 260,
    overflow: "auto",
    overflowX: "hidden",
    "&::-webkit-scrollbar": {
      width: 6
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(184,186,186,1)",
      borderRadius: 2
    }
  },
  recentEmoji: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    width: 400,
    // height: 65,
    marginTop: 23,
    marginBottom: 14
    // backgroundColor: "blue"
  },
  emojiPackage: {
    display: "flex",
    flexDirection: "column",
    width: 417,
    // height: 147,
    marginTop: 9
    // backgroundColor: "red"
  },
  title: {
    height: 17,
    fontSize: 12,
    // font-family:PingFangSC-Medium,PingFang SC;
    fontWeight: 500,
    color: "rgba(184,186,186,1)"
    // backgroundColor: "red"
  },
  recentIconWrap: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 417,
    // height: 30,
    marginTop: 17
    // marginBottom: 17,
    // backgroundColor: "blue"
  },
  emojiIcon: {
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    fontSize: 26,
    marginRight: 4,
    marginBottom: 7,
    height: 30,
    width: 30,
    cursor: "pointer"
    // backgroundColor: "red"
  },
  emojiIconWrap: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    // backgroundColor: "pink",
    marginTop: 9
  },
  uploadImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 30,
    marginLeft: 50,
    marginTop: 25,
    background: "rgba(0,158,202,1)",
    borderRadius: 5,
    cursor: "pointer"
    // border: "1px solid rgba(32,32,34,1)"
  },
  uploadImageFont: {
    fontSize: 14,
    fontWeight: 500,
    color: "#E7E8E8FF"
  }
});

function EmojiIcon(props) {
  const { onClickEmoji } = props;
  // const people = data[0].categories[0].emojis;
  // const nature = data[0].categories[1].emojis;
  // const food = data[0].categories[2].emojis;
  // const activity = data[0].categories[3].emojis;
  // const places = data[0].categories[4].emojis;
  // const objects = data[0].categories[5].emojis;
  // const symbols = data[0].categories[6].emojis;
  // const flags = data[0].categories[7].emojis;
  useEffect(() => {
    // console.log(data[0].categories[0].emojis);
    // console.log(data);
  });
  const [value, setValue] = useState("");
  const handleValue = e => {
    setValue(e.target.value);
  };
  const handleClearValue = () => {
    setValue("");
  };
  // const handleOnClickEmoji = () => {
  //   onClickEmoji("ccc");
  // };
  const classes = useStyles();
  return (
    <div className={classes.viewWrap}>
      <div className={classes.search}>
        <Icon className={classes.searchIcon}>search</Icon>
        <input
          placeholder="快速查找"
          className={classes.searchInput}
          onChange={handleValue}
          value={value}
        ></input>
        {value !== "" && (
          <Icon className={classes.cancelIcon} onClick={handleClearValue}>
            cancel
          </Icon>
        )}
      </div>
      <div className={classes.emojiWrap}>
        {value === "" && (
          <div className={classes.recentEmoji}>
            <span className={classes.title}>最近</span>
            <div className={classes.recentIconWrap}>
              <span
                className={classes.emojiIcon}
                onClick={() => {
                  alert("你选择了一个emoji");
                }}
              >
                🍉
              </span>
              <span className={classes.emojiIcon}> 👽</span>
              <span className={classes.emojiIcon}> 🍓</span>
              <span className={classes.emojiIcon}> 🍟</span>
              <span className={classes.emojiIcon}> 🍔 </span>
              <span className={classes.emojiIcon}> 🍥</span>
              <span className={classes.emojiIcon}> 📲</span>
              <span className={classes.emojiIcon}> 🇨🇳</span>
              <span className={classes.emojiIcon}> 🇺🇸</span>
              <span className={classes.emojiIcon}> 📲</span>
              <span className={classes.emojiIcon}> 🇨🇳</span>
              <span className={classes.emojiIcon}> 🇺🇸</span>
              <span className={classes.emojiIcon}> 🇺🇸</span>
            </div>
          </div>
        )}
        {value === "" &&
          ["人物", "自然", "食物", "活动", "地点", "物体", "符号", "旗帜"].map(
            (item, indexType) => (
              <div key={indexType} className={classes.emojiPackage}>
                <span className={classes.title}>{item}</span>
                <div className={classes.emojiIconWrap}>
                  {data[0].categories[indexType].emojis.map((item, index) => (
                    <div
                      className={classes.emojiIcon}
                      key={index + item}
                      onClick={() => {
                        onClickEmoji(
                          data[0].categories[indexType].emojis[index]
                        );
                      }}
                      // alert(data[0].categories[indexType].emojis[index]);
                    >
                      <Emoji
                        // onClick={emoji => {
                        //   console.log(JSON.stringify(emoji));
                        // }}
                        emoji={item}
                        size={28}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
}
function UploadImage(props) {
  const { onClickUploadImage } = props;
  const classes = useStyles();
  return (
    <div className={classes.viewWrap}>
      <div className={classes.uploadImage}>
        <span className={classes.uploadImageFont} onClick={onClickUploadImage}>
          选择一个图片
        </span>
      </div>
    </div>
  );
}
function ChangeIconMenuRoute(props) {
  const { chooseImage, onClickEmoji } = props;

  const classes = useStyles();

  return (
    <div>
      <Switch>
        <Route exact path="/emoji">
          <EmojiIcon onClickEmoji={onClickEmoji} />
        </Route>
        <Route exact path="/image">
          <UploadImage onClickUploadImage={chooseImage} />
        </Route>
      </Switch>
    </div>
  );
}
export default ChangeIconMenuRoute;
