import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { ShowEmoji } from "../show-emoji";
import { emojiIndex } from "emoji-mart";
import Icon from "@material-ui/core/Icon";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "emoji-mart/css/emoji-mart.css";

import data from "./data";

const useStyles = makeStyles({
  viewWrap: {
    display: "flex",
    flexDirection: "column",
    width: 400,
    height: 288,
    marginLeft: 22,
    marginTop: 21
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
    width: 400,
    marginTop: 23,
    marginBottom: 14
  },
  emojiPackage: {
    display: "flex",
    flexDirection: "column",
    width: 417,
    marginTop: 9
  },
  title: {
    height: 17,
    fontSize: 12,
    fontWeight: 500,
    color: "rgba(184,186,186,1)"
  },
  recentIconWrap: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    width: 417,
    marginTop: 17
  },
  emojiIconWrap: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 9
  },
  emojiIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    fontSize: 26,
    marginRight: 4,
    marginBottom: 7,
    height: 30,
    width: 30,
    cursor: "pointer",
    borderRadius: 3,
    "&:hover": {
      backgroundColor: "rgba(70,76,80,1)"
    },
    "&:active": {
      backgroundColor: "rgba(63,68,71,1)"
    }
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
  },
  uploadImageFont: {
    fontSize: 14,
    fontWeight: 500,
    color: "#E7E8E8FF"
  }
});

function EmojiIcon(props) {
  const { onClickUploadEmoji } = props;
  const [value, setValue] = useState("");
  const [recentList, setRecentList] = useState([
    // 默认使用频率最高的五个emoji,数据统计来自http://emojitracker.com/
    "joy",
    "heart",
    "heart_eyes",
    "recycle",
    "sob"
  ]);

  const handleValue = e => {
    setValue(e.target.value);
  };
  const handleClearValue = () => {
    setValue("");
  };
  //更新常用emoji列表
  const updateRecentList = newEmoji => {
    for (let i = 0; i <= recentList.length; i++) {
      if (newEmoji === recentList[i]) {
        //删除原来已经存在的emoji,然后新加一个到队列头部
        recentList.splice(i, 1);
        setRecentList([newEmoji, ...recentList]);
      } else {
        if (recentList.length <= 19) {
          setRecentList([newEmoji, ...recentList]);
        } else {
          recentList.pop();
          setRecentList([newEmoji, ...recentList]);
        }
      }
    }
  };
  const handleOnClickEmoji = result => {
    updateRecentList(result);
    onClickUploadEmoji(result);
  };

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
              {recentList.map((item, index) => (
                <div
                  className={classes.emojiIcon}
                  key={index + item}
                  onClick={() => {
                    handleOnClickEmoji(item);
                  }}
                >
                  <ShowEmoji emoji={`${item}`} size={28} />
                </div>
              ))}
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
                        handleOnClickEmoji(item);
                      }}
                    >
                      <ShowEmoji emoji={`${item}`} size={28} />
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        {value !== "" && (
          <div className={classes.recentEmoji}>
            <span className={classes.title}>搜索结果</span>
            <div className={classes.recentIconWrap}>
              {emojiIndex
                .search(value)
                .map(o => o.short_names)
                .map((item, index) => (
                  <div
                    className={classes.emojiIcon}
                    key={index + item}
                    onClick={() => {
                      handleOnClickEmoji(item);
                    }}
                  >
                    <ShowEmoji emoji={`${item}`} size={28} />
                  </div>
                ))}
            </div>
          </div>
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
        <Route exact path="/">
          <EmojiIcon onClickUploadEmoji={onClickEmoji} />
        </Route>
        <Route exact path="/image">
          <UploadImage onClickUploadImage={chooseImage} />
        </Route>
      </Switch>
    </div>
  );
}
export { ChangeIconMenuRoute };
