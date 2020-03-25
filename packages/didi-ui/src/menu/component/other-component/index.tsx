import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Icon, Input } from "@material-ui/core";
import * as PropTypes from "prop-types";

/**
 * 其他组件
 * FilterInputView ： 过滤输入框
 * GroupTitleView ： 分组标题组件
 * HintText ：提示文本
 * HintButton ： 提示按钮
 */

const useStyles = makeStyles({
  FilterInputView: {
    width: "100%",
    height: 30
  },
  FilterInputView_wrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 14,
    marginRight: 14,
    height: 30
  },
  FilterInputView_content: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: 30,
    borderRadius: 2,
    border: "1px solid rgba(42,46,46,1)"
  },
  FilterInputView_foot: {
    width: "100%",
    fontSize: 14,
    fontWeight: 400,
    marginLeft: 9,
    marginRight: 9
  },
  GroupTitleView: {
    width: "100%",
    height: 15
  },
  GroupTitleView_wrap: {
    display: "flex",
    alignItems: "center",
    height: 15,
    marginLeft: 14,
    marginRight: 14,
    fontSize: 11,
    fontWeight: 400
  },
  HintText: {
    width: "100%",
    height: 21
  },
  HintText_wrap: {
    display: "flex",
    alignItems: "center",
    height: 21,
    fontSize: 12,
    marginLeft: 14,
    marginRight: 14,
    fontWeight: 500
  },

  HintButton: {
    display: "flex",
    alignItems: "center",
    height: 28,
    width: "100%"
  },
  HintButton_icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 13,
    height: 13,
    marginRight: 8,
    marginLeft: 14
  },
  HintButton_name: {
    height: 17,
    marginRight: 14,
    fontSize: 12,
    fontWeight: 400
  },
  cancelIcon: {
    marginRight: 5,
    fontSize: 16,
    cursor: "pointer"
  }
});
function FilterInputView(props: { placeholder: string; value?: string }) {
  const classes = useStyles();
  const { placeholder } = props;
  const [value, setValue] = React.useState("");
  //   const [value, setValue] = useState("");
  const handleValue = (e: any) => {
    setValue(e.target.value);
  };
  const handleClearValue = () => {
    console.log(value);
    setValue("");
  };
  return (
    <div className={classes.FilterInputView}>
      <div className={classes.FilterInputView_wrap}>
        <div className={classes.FilterInputView_content}>
          <Input
            className={classes.FilterInputView_foot}
            placeholder={placeholder}
            disableUnderline={true}
            value={value}
            onChange={handleValue}
          />
          {value !== "" && (
            <Icon className={classes.cancelIcon} onClick={handleClearValue}>
              cancel
            </Icon>
          )}
        </div>
      </div>
    </div>
  );
}
function GroupTitleView(props: { text: string }) {
  const { text } = props;
  const classes = useStyles();
  return (
    <div className={classes.GroupTitleView}>
      <div className={classes.GroupTitleView_wrap}>{text}</div>
    </div>
  );
}
function HintText(props: { text: any }) {
  const { text } = props;
  const classes = useStyles();
  return (
    <div className={classes.HintText}>
      <div className={classes.HintText_wrap}>{text}</div>
    </div>
  );
}
function HintButton(props: { text: string }) {
  const { text } = props;
  const classes = useStyles();
  return (
    <div className={classes.HintButton}>
      <div className={classes.HintButton_icon}>
        <Icon style={{ fontSize: 16 }}>help_outline</Icon>
      </div>
      <div className={classes.HintButton_name}>{text}</div>
    </div>
  );
}
HintButton.protoTypes = {
  text: PropTypes.string
};
HintButton.defaultProps = {
  text: ""
};

export { FilterInputView, GroupTitleView, HintText, HintButton };
