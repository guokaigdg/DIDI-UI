import * as React from "react";
import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles({
  line: {
    width: "100%",
    height: 1,
    background: "rgba(79,84,86,1)"
  }
});

function Divider() {
  const classes = useStyle();
  return <div className={classes.line} />;
}
export { Divider };
