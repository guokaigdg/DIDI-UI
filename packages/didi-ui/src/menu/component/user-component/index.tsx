import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import Icon from "@material-ui/core/Icon";
import { SubComponents } from "../../../index";
import MenuItem from "@material-ui/core/MenuItem";

/**
 * 用户组件
 * UserInfoView ： 显示用户信息的组件
 * UserWorkView ： 显示用户工作区的组件
 * UserAddButton ： 一个带添加按钮的组件
 */

const useStyles = makeStyles({
  UserInfoView: {
    display: "flex",
    alignItems: "center",
    height: 72,
    paddingLeft: 14,
    paddingRight: 14
    //     background: "rgba(71,76,80,1)"
  },
  UserInfoView_icon: {
    width: 40,
    height: 40,
    marginRight: 8,
    borderRadius: 20
  },
  UserInfoView_information: {
    display: "flex",
    flexDirection: "column",
    height: 37
  },
  UserInfoView_name: {
    height: 20,
    fontSize: 14,
    fontWeight: 500
    //     color: "rgba(255,255,255,1)"
  },
  UserInfoView_email: {
    height: 17,
    fontSize: 12,
    fontWeight: 500
    //     color: "rgba(172,174,174,1)"
  },
  UserWorkView: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 67,
    paddingLeft: 14,
    paddingRight: 14
    //     background: "rgba(71,76,80,1)"
  },
  UserWorkView_left: {
    display: "flex",
    alignItems: "center",
    height: 40
  },
  UserWorkView_icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    fontSize: 32,
    fontWeight: 500,
    marginRight: 8
  },
  UserWorkView_information: {
    display: "flex",
    flexDirection: "column",
    height: 38
  },
  UserWorkView_name: {
    height: 20,
    marginBottom: 1,
    fontSize: 14,
    fontWeight: 500
    //     color: "rgba(255,255,255,1)"
  },
  UserWorkView_desc: {
    height: 17,
    fontSize: 12,
    fontFamily: "PingFangSC-Medium,PingFang SC",
    fontWeight: 500
    //     color: "rgba(172,174,174,1)"
  },
  UserWorkView_right: {
    height: 17,
    fontSize: 12,
    fontWeight: 400
    //     color: "rgba(172,174,174,1)"
  },
  UserAddButton: {
    display: "flex",
    alignItems: "center",
    height: 72,
    paddingLeft: 14,
    paddingRight: 14
    //     background: "rgba(71,76,80,1)"
  },
  UserAddButton_icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    marginRight: 8,
    //     color: "rgba(71,76,80,1)",
    //     background: "rgba(122,126,128,1)",
    borderRadius: 2
  },

  UserAddButton_name: {
    height: 20,
    fontSize: 14,
    fontWeight: 400
    //     color: "rgba(255,255,255,1)"
  }
});

function UserInfoView(props: { url: string; text: string; desc: string }) {
  const { url, text, desc } = props;
  const classes = useStyles();
  return (
    <div className={classes.UserInfoView}>
      <img className={classes.UserInfoView_icon} src={url} />
      <div className={classes.UserInfoView_information}>
        <div className={classes.UserInfoView_name}>{text}</div>
        <div className={classes.UserInfoView_email}>{desc}</div>
      </div>
    </div>
  );
}
function UserWorkView(props: {
  emoji: string;
  text: string;
  desc: string;
  children?: any;
  onClick?: any;
}) {
  const { emoji, text, desc, children, onClick } = props;
  const classes = useStyles();
  const handleOnClickUserWorkView = () => {
    onClick(text);
  };
  return (
    <MenuItem disableGutters={true}>
      <div className={classes.UserWorkView} onClick={handleOnClickUserWorkView}>
        <div className={classes.UserWorkView_left}>
          <div className={classes.UserWorkView_icon}>{emoji}</div>
          <div className={classes.UserWorkView_information}>
            <div className={classes.UserWorkView_name}>{text}</div>
            <div className={classes.UserWorkView_desc}>{desc}</div>
          </div>
        </div>
        <div className={classes.UserWorkView_right}>
          <SubComponents data={children} />
        </div>
      </div>
    </MenuItem>
  );
}

function UserAddButton(props: {
  text: string;
  onClick: (...args: any) => void;
  //   onClick(...arg: any): void;
}) {
  const { text, onClick } = props;
  const classes = useStyles();
  const handleOnClickUserAddButton = () => {
    onClick(text);
  };
  return (
    <MenuItem disableGutters={true}>
      <div
        className={classes.UserAddButton}
        onClick={handleOnClickUserAddButton}
      >
        <div className={classes.UserAddButton_icon}>
          <Icon style={{ fontSize: 40 }}>add_box</Icon>
        </div>
        <div className={classes.UserAddButton_name}>{text}</div>
      </div>
    </MenuItem>
  );
}
export { UserInfoView, UserWorkView, UserAddButton };
