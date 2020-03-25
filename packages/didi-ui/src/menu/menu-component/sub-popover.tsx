import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import { SubMenu } from "../../index";

/**
 * SubPopover 弹窗按钮(弹出子组件)
 * title: 快捷键
 * content: 自菜单子组件
 */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(0, 0, 0, 0)
    }
  })
);

function SubPopover(props: { children: any; content?: any }) {
  const { children, content } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <span role={"button"} aria-describedby={id} onClick={handleClick}>
        {/* 快捷键 */}
        {children}
      </span>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left"
        }}
      >
        <div className={classes.typography}>
          {/* 菜单子组件内容 */}
          <SubMenu data={content} />
        </div>
      </Popover>
    </div>
  );
}
export { SubPopover };
