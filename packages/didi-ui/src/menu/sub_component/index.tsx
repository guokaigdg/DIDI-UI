import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import { makeStyles } from "@material-ui/styles";
import * as PropTypes from "prop-types";
import FormGroup from "@material-ui/core/FormGroup";
import Icon from "@material-ui/core/Icon";
import { SubPopover } from "../../index";
import { useToggle } from "@umijs/hooks";
/**
 * 描述一种子组件组件
 * SubComponents: 子菜单
 * Text ： 纯文本
 * Arrow ： 箭头
 * shortcuts_key ： 快捷键
 * switch_button ： 开关
 * SelectButton ： 选择框
 * MoreButton ： 更多按钮
 * SelectedIcon ：选中图标
 */
const useStyles = makeStyles({
  SelectButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    cursor: "pointer"
  },
  TextButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: 2,
    cursor: "pointer"
  }
});

const AntSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 30,
      height: 18,
      padding: 0,
      display: "flex"
    },
    switchBase: {
      padding: 1,
      color: "white", //关闭,圆圈颜色
      "&$checked": {
        transform: "translateX(12px)",
        color: theme.palette.common.white, //打开, 默认初始圆圈色
        "& + $track": {
          opacity: 1,
          backgroundColor: "rgba(46,170,220,1)", //打开, 按钮背景
          borderColor: theme.palette.primary.main
        }
      }
    },
    thumb: {
      width: 16,
      height: 16,
      boxShadow: "none"
    },
    track: {
      borderRadius: 16,
      opacity: 1,
      backgroundColor: "rgba(108,112,114,1)"
    },
    checked: {}
  })
)(Switch);

function SubComponents(props: { data?: any }) {
  const { data } = props;
  return (
    <div>
      {data !== "" && (
        <div>
          {data.menu !== undefined && (
            <div>
              {data.type === "text" && (
                <SubPopover
                  children={<Text text={data.text} />}
                  content={data.menu}
                />
              )}
              {data.type === "arrow" && (
                <SubPopover children={<Arrow />} content={data.menu} />
              )}
              {data.type === "shortcuts_key" && (
                <SubPopover
                  children={<ShortcutsKey keys={data.keys} />}
                  content={data.menu}
                />
              )}
              {data.type === "select_button" && (
                <SubPopover
                  children={<SelectButton placeholder={data.placeholder} />}
                  content={data.menu}
                />
              )}
              {data.type === "more_button" && (
                <SubPopover children={<MoreButton />} content={data.menu} />
              )}
            </div>
          )}
          {data.menu === undefined && (
            <div>
              {data.type === "text" && <Text text={data.text} />}
              {data.type === "arrow" && <Arrow />}
              {data.type === "shortcuts_key" && (
                <ShortcutsKey keys={data.keys} />
              )}
              {data.type === "switch_button" && <SwitchButton />}
              {data.type === "select_button" && (
                <SelectButton placeholder={data.placeholder} />
              )}
              {data.type === "more_button" && <MoreButton />}
              {data.type === "selected_icon" && <SelectedIcon />}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Text(props: { text: string }) {
  const { text } = props;
  const classes = useStyles();
  return <div className={classes.TextButton}>{text}</div>;
}
function Arrow() {
  const classes = useStyles();
  return (
    <div className={classes.SelectButton}>
      <Icon style={{ fontSize: 15 }}>play_arrow</Icon>
    </div>
  );
}
function ShortcutsKey(props: { keys: string }) {
  const { keys } = props;
  const classes = useStyles();
  return (
    <div
      className={classes.TextButton}
      role="button"
      onClick={() => {
        console.log({ keys });
      }}
    >
      {keys}
    </div>
  );
}
function SwitchButton(props: { onChange?: any }) {
  const { onChange } = props;
  const { state, toggle } = useToggle(true);
  const classes = useStyles();
  return (
    <div className={classes.SelectButton}>
      <FormGroup>
        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>
              <AntSwitch
                onChange={() => toggle(onChange(state))}
                value="checked"
              />
            </Grid>
          </Grid>
        </Typography>
      </FormGroup>
    </div>
  );
}

function SelectButton(props: { placeholder: string }) {
  const { placeholder } = props;
  const classes = useStyles();
  return (
    <div className={classes.SelectButton}>
      {placeholder}
      <Icon style={{ fontSize: 15 }}>keyboard_arrow_down</Icon>
    </div>
  );
}
function MoreButton(props: { onChange?: any }) {
  const { onChange } = props;
  const classes = useStyles();
  return (
    <div className={classes.SelectButton} onClick={onChange}>
      <Icon style={{ fontSize: 16 }}>more_horiz</Icon>
    </div>
  );
}
function SelectedIcon() {
  const classes = useStyles();
  return (
    <div className={classes.SelectButton}>
      <Icon style={{ fontSize: 16 }}>done</Icon>
    </div>
  );
}
Text.protoTypes = {
  text: PropTypes.string
};
Text.defaultProps = {
  text: ""
};
export {
  SubComponents,
  Text,
  Arrow,
  ShortcutsKey,
  SwitchButton,
  SelectButton,
  MoreButton,
  SelectedIcon
};
