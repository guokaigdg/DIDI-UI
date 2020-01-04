import React from "react";
import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles({
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#E6ECF1"
  }
});

function SplitLine() {
  const classes = useStyle();
  return <div className={classes.line} />;
}
export default SplitLine;
