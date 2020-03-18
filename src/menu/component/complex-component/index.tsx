import React, { useState } from "react";
import { ColorView, DragView } from "../../../index";
import { makeStyles } from "@material-ui/styles";

/**
 * 复杂组件
 * DragGroupView ： 拖拽组合组件
 * SelectGroupView ： 单选组合组件
 */

const useStyle = makeStyles({
  Wrap: {
    width: "100%"
  }
});

function DragGroupView(props: { data: any; onClick?: any }) {
  const { data } = props;
  const classes = useStyle();

  return (
    <div className={classes.Wrap}>
      {data.map((item: any, index: number) => (
        <div key={index}>
          {item.type === "drag_view" && (
            <div>
              <DragView
                icon={item.icon}
                text={item.text}
                children={item.nodes === undefined ? "" : item.nodes}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function SelectGroupView(props: { data: any; onClick: any }) {
  const { data, onClick } = props;
  const classes = useStyle();
  const [color, Setcolor] = useState("");
  const handlecolor = (newcolor: string) => {
    Setcolor(newcolor);
  };
  return (
    <div className={classes.Wrap}>
      {data.map((item: any, index: number) => (
        <div
          key={index + index}
          onClick={() => {
            handlecolor(item.color);
          }}
        >
          <ColorView
            color={item.color}
            text={item.text}
            children={
              color === item.color
                ? {
                    object: "sub_component",
                    type: "selected_icon"
                  }
                : ""
            }
            onClick={onClick}
          />
        </div>
      ))}
    </div>
  );
}

export { DragGroupView, SelectGroupView };
