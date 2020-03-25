import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import * as PropTypes from "prop-types";
import Icon from "@material-ui/core/Icon";
import { SubComponents } from "../../../index";
import MenuItem from "@material-ui/core/MenuItem";

/**
 *  基础内容组件
 *  small_icon_view ： 小图标组件
 *  medium_icon_view ： 中图标组件
 *  big_icon_view ： 大图标组件
 *  emoji_icon_view ： emoji图标组件
 *  drag_view ： 拖拽组件
 *  ColorView ：颜色组件
 */
const useStyles = makeStyles({
  SmallIconView: {
    width: "100%",
    height: 28
    //     background: "rgba(71,76,80,1)",
    //     "&:hover": {
    //       backgroundColor: "rgba(71,76,80,0.3)"
    //     },
    //     "&:active": {
    //       backgroundColor: "rgba(63,68,71,0.3))"
    //     }
  },
  SmallIconView_wrap: {
    height: 28,
    display: "flex",
    alignItems: "center",
    marginLeft: 14,
    marginRight: 12,
    justifyContent: "space-between"
  },
  SmallIconView_left: {
    height: 28,
    display: "flex",
    alignItems: "center"
  },
  SmallIconView_icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 18,
    height: 18,
    marginRight: 8
  },
  SmallIconView_name: {
    height: 20,
    fontSize: 14,
    fontWeight: 400
  },
  SmallIconView_right: {
    fontSize: 12,
    fontWeight: 400
  },
  MediumIconView: {
    width: "100%",
    height: 28
  },
  MediumIconView_wrap: {
    height: 28,
    display: "flex",
    alignItems: "center",
    marginLeft: 14,
    marginRight: 12,
    justifyContent: "space-between"
  },
  MediumIconView_left: {
    height: 28,
    display: "flex",
    alignItems: "center"
  },
  MediumIconView_icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 22,
    height: 22,
    marginRight: 8,
    borderRadius: 2
  },
  MediumIconView_name: {
    height: 20,
    fontSize: 14,
    fontWeight: 400
  },
  MediumIconView_right: {
    height: 17,
    fontSize: 12,
    fontWeight: 400
  },
  BigIconView: {
    width: "100%",
    height: 55
  },
  BigIconView_wrap: {
    height: 55,
    display: "flex",
    alignItems: "center",
    marginLeft: 14,
    marginRight: 12,
    justifyContent: "space-between"
  },
  BigIconView_left: {
    height: 55,
    display: "flex",
    alignItems: "center"
  },
  BigIconView_icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 46,
    height: 46,
    marginRight: 8,
    borderRadius: 2
  },
  BigIconView_title: {
    display: "flex",
    flexDirection: "column",
    height: 38
  },
  BigIconView_title_name: {
    height: 20,
    fontSize: 14,
    fontWeight: 500
  },
  BigIconView_title_desc: {
    height: 17,
    fontSize: 12,
    fontWeight: 500
  },
  BigIconView_right: {
    height: 17,
    fontSize: 12,
    fontWeight: 400
  },
  EmojiIconView: {
    width: "100%",
    height: 28
  },
  EmojiIconView_wrap: {
    height: 28,
    marginLeft: 14,
    marginRight: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  EmojiIconView_left: {
    height: 28,
    display: "flex",
    alignItems: "center"
  },
  EmojiIconView_icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 21,
    height: 28,
    fontSize: 16,
    marginRight: 8
  },
  EmojiIconView_name: {
    height: 20,
    fontSize: 14,
    fontWeight: 400
  },
  EmojiIconView_right: {
    height: 17,
    fontSize: 12,
    fontWeight: 400
  },
  DragView: {
    width: "100%",
    height: 28
  },
  DragView_wrap: {
    height: 28,
    display: "flex",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 12,
    justifyContent: "space-between"
  },
  DragView_left: {
    height: 28,
    display: "flex",
    alignItems: "center"
  },
  DragView_dragicon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 18,
    height: 18,
    marginRight: 7,
    color: "#96999BFF"
  },
  DragView_icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 18,
    height: 18,
    marginRight: 8
  },
  DragView_name: {
    height: 20,
    fontSize: 14,
    fontWeight: 400
  },
  DragView_right: {
    height: 17,
    fontSize: 12,
    fontWeight: 400
  },
  ColorView: {
    width: "100%",
    height: 28
  },
  ColorView_wrap: {
    height: 28,
    display: "flex",
    alignItems: "center",
    marginLeft: 14,
    marginRight: 12,
    justifyContent: "space-between"
  },
  ColorView_left: {
    height: 28,
    display: "flex",
    alignItems: "center"
  },
  ColorView_icon: (newType: any) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 18,
    height: 18,
    marginRight: 8,
    background: newType.background,
    borderRadius: 2
  }),
  ColorView_name: {
    height: 20,
    fontSize: 14,
    fontWeight: 400
  },
  ColorView_right: {
    height: 17,
    fontSize: 12,
    fontWeight: 400
  }
});
function SmallIconView(props: {
  icon?: string;
  text: string;
  children?: any;
  onClick: (...args: any) => void;
}) {
  const { icon, text, children, onClick } = props;
  const classes = useStyles();
  const handleOnClick = () => {
    onClick(text);
  };
  return (
    <MenuItem disableGutters={true}>
      <div className={classes.SmallIconView} onClick={handleOnClick}>
        <div className={classes.SmallIconView_wrap}>
          <div className={classes.SmallIconView_left}>
            {icon && (
              <div className={classes.SmallIconView_icon}>
                <Icon style={{ fontSize: 18 }}>{icon}</Icon>
              </div>
            )}
            <div className={classes.SmallIconView_name}>{text}</div>
          </div>
          <div className={classes.SmallIconView_right}>
            <SubComponents data={children} />
          </div>
        </div>
      </div>
    </MenuItem>
  );
}
function MediumIconView(props: {
  url: string;
  text: string;
  children?: any;
  onClick?: any;
}) {
  const { url, text, children, onClick } = props;
  const classes = useStyles();
  const handleOnClick = () => {
    onClick(text);
  };
  return (
    <MenuItem disableGutters={true}>
      <div className={classes.MediumIconView} onClick={handleOnClick}>
        <div className={classes.MediumIconView_wrap}>
          <div className={classes.MediumIconView_left}>
            <img className={classes.MediumIconView_icon} src={url} />
            <div className={classes.MediumIconView_name}> {text} </div>
          </div>
          <div className={classes.MediumIconView_right}>
            <SubComponents data={children} />
          </div>
        </div>
      </div>
    </MenuItem>
  );
}

function BigIconView(props: {
  url: string;
  text: string;
  desc: string;
  children?: any;
  onClick?: any;
}) {
  const { url, text, desc, children, onClick } = props;
  const classes = useStyles();
  const handleOnClick = () => {
    onClick(text);
  };
  return (
    <MenuItem disableGutters={true}>
      <div className={classes.BigIconView} onClick={handleOnClick}>
        <div className={classes.BigIconView_wrap}>
          <div className={classes.BigIconView_left}>
            <img className={classes.BigIconView_icon} src={url} />
            <div className={classes.BigIconView_title}>
              <div className={classes.BigIconView_title_name}>{text} </div>
              <div className={classes.BigIconView_title_desc}>{desc}</div>
            </div>
          </div>
          <div className={classes.BigIconView_right}>
            <SubComponents data={children} />
          </div>
        </div>
      </div>
    </MenuItem>
  );
}
function EmojiIconView(props: {
  emoji: string;
  text: string;
  children?: any;
  onClick?: any;
}) {
  const { emoji, text, children, onClick } = props;
  const classes = useStyles();
  const handleOnClick = () => {
    onClick(text);
  };
  return (
    <MenuItem disableGutters={true}>
      <div className={classes.EmojiIconView} onClick={handleOnClick}>
        <div className={classes.EmojiIconView_wrap}>
          <div className={classes.EmojiIconView_left}>
            <div className={classes.EmojiIconView_icon}>{emoji}</div>
            <div className={classes.EmojiIconView_name}> {text} </div>
          </div>
          <div className={classes.EmojiIconView_right}>
            <SubComponents data={children} />
          </div>
        </div>
      </div>
    </MenuItem>
  );
}
function DragView(props: {
  icon: string;
  text: string;
  children?: any;
  onClick?: any;
}) {
  const { icon, text, children, onClick } = props;
  const classes = useStyles();
  const handleOnClick = () => {
    onClick(text);
  };
  return (
    <MenuItem disableGutters={true}>
      <div className={classes.DragView} onClick={handleOnClick}>
        <div className={classes.DragView_wrap}>
          <div className={classes.DragView_left}>
            <div className={classes.DragView_dragicon}>
              <Icon style={{ fontSize: 16 }}>drag_indicator</Icon>
            </div>
            <div className={classes.DragView_icon}>
              <Icon>{icon}</Icon>
            </div>
            <div className={classes.DragView_name}> {text}</div>
          </div>
          <div className={classes.DragView_right}>
            <SubComponents data={children} />
          </div>
        </div>
      </div>
    </MenuItem>
  );
}
function ColorView(props: {
  color: string;
  text: string;
  children?: any;
  onClick?: any;
}) {
  const { color, text, children, onClick } = props;
  const newType = { background: color };
  const classes = useStyles(newType);
  const handleOnClick = () => {
    onClick(text);
  };
  return (
    <MenuItem disableGutters={true}>
      <div className={classes.ColorView} onClick={handleOnClick}>
        <div className={classes.ColorView_wrap}>
          <div className={classes.ColorView_left}>
            <div className={classes.ColorView_icon} />
            <div className={classes.ColorView_name}> {text}</div>
          </div>
          <div className={classes.ColorView_right}>
            <SubComponents data={children} />
          </div>
        </div>
      </div>
    </MenuItem>
  );
}
ColorView.protoTypes = {
  color: PropTypes.string,
  text: PropTypes.string
};
ColorView.defaultProps = {
  color: "#C6C8C8FF",
  text: "灰色"
};
export {
  SmallIconView,
  MediumIconView,
  BigIconView,
  EmojiIconView,
  DragView,
  ColorView
};
