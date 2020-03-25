import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Paper } from "@material-ui/core";
/**
 * 描述一种容器
 * main_container_tb6px ：上下各有6px内边距的主容器
 */
const useStyle = makeStyles({
  line: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingTop: 6,
    paddingBottom: 6,
    boxShadow: "0px 2px 4px 0px rgba(0,0,0,0.3)",
    borderRadius: "4px 4px 4px 4px"
  }
});

function MainContainerTB6px(props: { children: any }) {
  const { children } = props;
  const classes = useStyle();
  return (
    <Grid>
      <Paper elevation={3}>
        <div className={classes.line}>{children}</div>
      </Paper>
    </Grid>
  );
}
export { MainContainerTB6px };
