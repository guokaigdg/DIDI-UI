import * as React from "react";
import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles({
  LayoutContainerTB: {
    display: "flex",
    alignItems: "center",
    width: "100%"
  },
  LayoutContainerTB6px: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingTop: 6,
    paddingBottom: 6
  },
  LayoutContainerTB3px: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingTop: 3,
    paddingBottom: 3
  },
  LayoutContainerB6px: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingBottom: 6
  },
  LayoutContainerT6px: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingTop: 6
  },
  LayoutContainerTB8px: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingTop: 8,
    paddingBottom: 8
  }
});
function LayoutContainerTB(props: { children?: any }) {
  const { children } = props;
  const classes = useStyle(props);
  return <div className={classes.LayoutContainerTB}>{children}</div>;
}
const LayoutContainerT6px: React.FC = props => {
  const { children } = props;
  const classes = useStyle();
  return <div className={classes.LayoutContainerT6px}>{children}</div>;
};
const LayoutContainerB6px: React.FC = props => {
  const { children } = props;
  const classes = useStyle();
  return <div className={classes.LayoutContainerB6px}>{children}</div>;
};
const LayoutContainerTB3px: React.FC = props => {
  const { children } = props;
  const classes = useStyle();
  return <div className={classes.LayoutContainerTB3px}>{children}</div>;
};
const LayoutContainerTB6px: React.FC = props => {
  const { children } = props;
  const classes = useStyle();
  return <div className={classes.LayoutContainerTB6px}>{children}</div>;
};
function LayoutContainerTB8px(props: { children?: any }) {
  const { children } = props;
  const classes = useStyle();
  return <div className={classes.LayoutContainerTB8px}>{children}</div>;
}
export {
  LayoutContainerTB,
  LayoutContainerT6px,
  LayoutContainerB6px,
  LayoutContainerTB3px,
  LayoutContainerTB6px,
  LayoutContainerTB8px
};
