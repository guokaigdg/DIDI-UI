import React, { useState } from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/styles";
import { Emoji } from "emoji-mart";
import {
  Breadcrumb,
  Display,
  SidebarSwitch,
  StickyBlockBox,
  Divider,
  LayoutContainerTB8px,
  ChangeIconMenu
} from "../../src/index";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import List from "./List";
import Show from "./Show";
/* ---------------------------------------------
/*        |    breadcrumb 面包屑                |
/* Sidebar|--------------------------------------
/* Switch |                          |         |
/*        |                          |         |
/* Display|                          |         |
/*        |                          |Sticky   |
/*        |                          |BlockBox |
/*        |                          |         |
/*        |                          |         |
/*-------------------------------------------- */

const useStyles = makeStyles({
  wrap: {
    display: "flex",
    justifyContent: "flex-start",
    // alignItems: "center",
    height: 1000,
    width: "100%",
    background: "	#F5F5DC"
  },
  myself: {
    textAlign: "center",
    width: 75,
    // height: 1000,
    paddingTop: 43,
    // backgroundColor: "#6495ED"
    background: "rgba(24,48,85,1)"
  },
  left: {
    width: 255,
    flexShrink: 0,
    // height: 1000,
    paddingTop: 18,
    backgroundColor: "rgba(245,247,249,1)"
  },
  mid: {
    width: 1150,
    // height: 1000,
    backgroundColor: "rgba(255,255,255,1)"
  },
  right: {
    paddingTop: 66,
    // height: 1000
    backgroundColor: "rgba(245,247,249,1)"
  },
  breadcrumb: {
    width: "100%",
    height: 300
  },
  stickyBlockbox: {
    width: 267
    // alignSelf: "flex-end",
  }
});

function Demo() {
  const upDateList = type => {
    switch (type) {
      case "/it":
        return [
          {
            icon: "🍉",
            title: "IT技术",
            url: "./it",
            component: "ITPage"
          }
        ];
      case "/react":
        return [
          {
            icon: "🍉",
            title: "IT技术",
            url: "./it",
            component: "ITPage"
          },
          {
            icon: "🍔",
            title: "React",
            url: "./react",
            component: "ReactPage"
          }
        ];
      case "/router":
        return [
          {
            icon: "🥭",
            title: "React-hook",
            url: "./router",
            component: "RouterPage"
          }
        ];
      case "/":
        return [
          {
            icon: "🍉",
            title: "轮子solidoc-ase-component-lib使用说明",
            url: "./it",
            component: "ITPage"
          },
          {
            icon: "🍔",
            title: "React",
            url: "./react",
            component: "ReactPage"
          },

          {
            icon: "🥭",
            title: "React-hook",
            url: "./router",
            component: "RouterPage"
          }
        ];
    }
  };
  const disPlayList = [
    {
      icon: "apps",
      title: "模板库",
      href: "apps"
    },
    {
      icon: "delete_outline",
      title: "回收站",
      href: "delete_outline"
    },
    {
      icon: "brightness_high",
      title: "工作区设置",
      href: "brightness_high"
    },
    {
      icon: "settings_applications",
      title: "工作区设置",
      href: "settings_applications"
    },

    {
      icon: "android",
      title: "我的安卓dasdad超字数测试asdadasdadadadadadada",
      href: "android"
    },
    {
      icon: "build",
      title: "我的build",
      href: "build"
    },
    {
      icon: "eco",
      title: "我的eco",
      href: "eco"
    },
    {
      icon: "search",
      title: "我的search",
      href: "search"
    },
    {
      icon: "movie",
      title: "我的movie",
      href: "movie"
    },
    {
      icon: "computer",
      title: "我的computer",
      href: "computer"
    }
  ];
  const stickyBlockBoxList = [
    {
      name: "IT技术",
      type: "H1",
      href: "#it",
      node: [
        {
          name: "React",
          type: "H2",
          href: "#react"
        },
        {
          name: "VUE",
          type: "H2",
          href: "#vue"
        }
      ]
    },
    {
      name: "JavaScript",
      type: "H1",
      href: "#javascript"
    },
    {
      name: "VUEVUEVUEVUEVUEVUEVUEVUEVUEVUEVUEVUE",
      type: "H2",
      href: "#vue"
    },
    {
      name: "手机",
      type: "H1",
      href: "#phone"
    },
    {
      name: "iPhone",
      type: "H2",
      href: "#iphone"
    },
    {
      name: "华为",
      type: "H2",
      href: "#huawei"
    },
    {
      name: "小米",
      type: "H2",
      href: "#mi"
    },
    {
      name: "PC主机",
      type: "H1",
      href: "#pc"
    }
  ];
  const [emojiIcon, setEmojiIcon] = useState("");
  const handleOnChooseEmoji = result => {
    setEmojiIcon(result);
  };
  const classes = useStyles();
  return (
    <div className={classes.wrap}>
      <div className={classes.myself}>🚌</div>
      <div className={classes.left}>
        <div className={classes.sidebarSwitch}>
          <SidebarSwitch
            icon="🍉"
            title="我的工作区"
            onSelect={result => {
              alert(`你点击了${result}SidebarSwitch`);
            }}
          />
        </div>
        <LayoutContainerTB8px>
          <Divider />
        </LayoutContainerTB8px>
        <div className="diplay">
          <Display
            disPlayList={[
              {
                icon: "add",
                title: "添加新页面",
                href: "add"
              }
            ]}
            onSelect={result => {
              console.log(result);
            }}
          />
          <LayoutContainerTB8px>
            <Divider />
          </LayoutContainerTB8px>
          <Display
            disPlayList={disPlayList}
            onSelect={result => {
              console.log(result);
            }}
          />
        </div>
      </div>
      {/*----------------- breadcrumb 面包屑-------------------- */}
      <div className={classes.mid}>
        <div className={classes.breadcrumb}>
          <Router>
            <Breadcrumb upDateList={upDateList} />
            <Switch>
              <List upDateList={upDateList} />
            </Switch>
            {/* <Show /> */}
          </Router>
          <div>
            结果:
            <div style={{ width: 100, height: 40 }}>
              <Emoji emoji={`${emojiIcon}`} size={28} />
            </div>
            名字:{emojiIcon}
          </div>
          <ChangeIconMenu
            chooseImage={() => {
              alert("上传照片功能正在开发中, 稍后推出");
            }}
            onChooseEmoji={handleOnChooseEmoji}
          />
        </div>
        <div></div>
      </div>
      <div className={classes.right}>
        <LayoutContainerTB8px>
          <Divider />
        </LayoutContainerTB8px>
        {/* 锚点导航 */}
        <div className={classes.stickyBlockbox}>
          <Display
            disPlayList={[
              {
                icon: "share",
                title: "分享",
                href: "add"
              }
            ]}
          />
          <Display
            disPlayList={[
              {
                icon: "exit_to_app",
                title: "导出",
                href: "exit_to_app"
              }
            ]}
          />
          <Display
            disPlayList={[
              {
                icon: "more_horiz",
                title: "更多...",
                href: "more_horiz"
              }
            ]}
          />
          <LayoutContainerTB8px>
            <Divider />
          </LayoutContainerTB8px>
          <Router>
            <StickyBlockBox list={stickyBlockBoxList} />
            <div
              style={{
                width: "200px",
                height: "50px",
                backgroundColor: "rgba(248,248,248,1)",
                fontWeight: "400px",
                fontSize: 14,
                marginTop: 20,
                marginLeft: 10,
                zIndex: 9999
              }}
            >
              <Show />
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
}

function Demo2() {
  const [emojiIcon, setEmojiIcon] = useState(`U+1F601`);
  const handleOnChooseEmoji = result => {
    setEmojiIcon(result);
  };
  return (
    <div>
      <ChangeIconMenu
        chooseImage={() => {
          alert("上传照片功能正在开发中, 稍后推出");
        }}
        onChooseEmoji={handleOnChooseEmoji}
      />
      <h3>{emojiIcon}</h3>
      <h3>{emojiIcon}</h3>
      <div id="haha">🍐🐶🍐😎⛎🕢👐🔔🍢🍝🍪🍲🍨🍦🍣🍛🍮🍡🍕🍜🍤🍟🍫🍔</div>
    </div>
  );
}

ReactDOM.render(<Demo2 />, document.querySelector("#demo"));
