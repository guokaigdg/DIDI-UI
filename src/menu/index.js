import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  LayoutContainerTB6px,
  LayoutContainerTB,
  Divider,
  LayoutContainerT6px
} from "../index";
const useStyle = makeStyles({
  menu: {
    width: 320,
    height: 428,
    // background: "rgba(63, 68, 71, 1)",
    background: "rgba(120,120,120,1)",
    boxShadow: "0 2 4 0 rgba(0,0,0,0.3)",
    borderRadius: "2 0 2 2"
  },
  menu_ccontainer: {
    display: "flex",
    flexDirection: "column"
  },
  divder: {
    marginTop: 3,
    marginBottom: 3
  },
  main: {
    width: 320,
    height: 72,
    background: "rgba(71,176,80,1)"
  },
  work_space: {
    display: "flex",
    flexDirection: "column",

    width: 320
  },

  work_space_title: {
    width: 292,
    height: 15,
    marginLeft: 14,
    fontSize: 11,
    fontWeight: 400,
    color: "rgba(174,176,77,1)",
    lineHeight: 16,
    background: "rgba(63,68,71,1)"
  },
  work_space_item: {
    width: 292,
    height: 67,
    marginLeft: 14,
    marginRight: 14,
    background: "rgba(171,76,80,1)"
  },
  setting: {
    width: 292,
    height: "100%",
    marginLeft: 14,
    marginRight: 14,
    background: "pink"
  }
});

function Menu() {
  const classes = useStyle();
  return (
    <div className={classes.menu}>
      <LayoutContainerTB6px>
        <div className={classes.menu_container}>
          <div className={classes.main}>
            <LayoutContainerTB>头像 信息</LayoutContainerTB>
          </div>

          <div className={classes.divder}>
            <Divider />
          </div>

          <div className={classes.work_space}>
            <LayoutContainerT6px>
              <div className={classes.work_space_title}>222</div>
            </LayoutContainerT6px>

            <LayoutContainerTB6px>
              <div className={classes.work_space}>
                <div className={classes.work_space_item}>我的工作区1</div>
                <Divider />
                <div className={classes.work_space_item}>我的工作区2</div>
                <Divider />
                <div className={classes.work_space_item}>我的工作区3</div>
              </div>
            </LayoutContainerTB6px>
          </div>
          <div className={classes.divder}>
            <Divider />
          </div>
          <LayoutContainerTB6px>
            <div className={classes.setting}> 222</div>
          </LayoutContainerTB6px>
        </div>
      </LayoutContainerTB6px>
    </div>
  );
}
export { Menu };
