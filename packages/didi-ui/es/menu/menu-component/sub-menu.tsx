import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  MainContainerTB6px,
  LayoutContainerTB,
  LayoutContainerT6px,
  LayoutContainerB6px,
  LayoutContainerTB3px,
  LayoutContainerTB6px,
  LayoutContainerTB8px,
  Divider,
  SmallIconView,
  MediumIconView,
  BigIconView,
  EmojiIconView,
  DragView,
  ColorView,
  UserInfoView,
  UserWorkView,
  UserAddButton,
  FilterInputView,
  GroupTitleView,
  HintText,
  HintButton,
  DragGroupView,
  SelectGroupView
} from "../../index";

/**
 * MainMenu 主菜单
 * 1. menu ：最底层是一个菜单对象
 * 2. container ：菜单对象需要一个容器
 * 3. layout ：容器中需要进行布局
 * 4. component ：在布局中需要放入组件
 * 5. sub_component ：组件中可能需要有子组件
 */

const useStyle = makeStyles({
  MainMenu: (newType: any) => ({
    width: newType.width,
    height: newType.height
    //     backgroundColor: "rgba(63,68,71,1)",
    //     boxShadow: "0px 2px 4px 0px rgba(0,0,0,0.3)",
    //     borderRadius: "2px 2px 2px 2px"
  }),
  MainMenuWrap: (newType: any) => ({
    width: newType.width,
    display: "flex",
    flexDirection: "column"
  })
});
function ViewType(props: { data: any; onClick?: any }) {
  const { data, onClick } = props;
  return (
    <div>
      {data.map((item: any, index: number) => (
        <div key={index}>
          {item.type === "small_icon_view" && (
            <SmallIconView
              icon={item.icon}
              text={item.text}
              children={item.nodes === undefined ? "" : item.nodes}
              onClick={onClick}
            />
          )}
          {item.type === "medium_icon_view" && (
            <MediumIconView
              url={item.url}
              text={item.text}
              children={item.nodes === undefined ? "" : item.nodes}
              //               onClick={onClick}
            />
          )}
          {item.type === "big_icon_view" && (
            <BigIconView
              url={item.url}
              text={item.text}
              desc={item.desc}
              children={item.nodes === undefined ? "" : item.nodes}
              onClick={onClick}
            />
          )}
          {item.type === "emoji_icon_view" && (
            <EmojiIconView
              emoji={item.emoji}
              text={item.text}
              children={item.nodes === undefined ? "" : item.nodes}
              onClick={onClick}
            />
          )}
          {item.type === "drag_view" && (
            <DragView
              icon={item.icon}
              text={item.text}
              children={item.nodes === undefined ? "" : item.nodes}
              onClick={onClick}
            />
          )}
          {item.type === "color_view" && (
            <ColorView
              color={item.color}
              text={item.text}
              children={item.nodes === undefined ? "" : item.nodes}
            />
          )}
          {item.type === "user_info_view" && (
            <UserInfoView url={item.url} text={item.text} desc={item.desc} />
          )}
          {item.type === "user_work_view" && (
            <UserWorkView
              emoji={item.emoji}
              text={item.text}
              desc={item.desc}
              children={item.nodes === undefined ? "" : item.nodes}
              onClick={onClick}
            />
          )}
          {item.type === "big_add_button" && (
            <UserAddButton text={item.text} onClick={onClick} />
          )}
          {item.type === "filter_input_view" && (
            <FilterInputView placeholder={item.placeholder} />
          )}
          {item.type === "group_title_view" && (
            <GroupTitleView text={item.text} />
          )}
          {item.type === "hint_text" && <HintText text={item.text} />}
          {item.type === "hint_button" && <HintButton text={item.text} />}
          {item.type === "drag_group_view" && (
            <DragGroupView data={item.nodes} />
          )}
          {item.type === "select_group_view" && (
            <SelectGroupView data={item.nodes} onClick={onClick} />
          )}
          {item.type === "divider" && <Divider />}
        </div>
      ))}
    </div>
  );
}

function SubMenu(props: { data: any; onClick?: any }) {
  const { data, onClick } = props;
  const newType = {
    width: data.nodes.size.width === "default" ? 320 : data.nodes.size.width,
    height:
      data.nodes.size.max_height === "default"
        ? "100%"
        : data.nodes.size.max_height
  };
  const classes = useStyle(newType);

  return (
    // 1.menu
    <div>
      {data.nodes.type === "main_container_tb6px" && ( //  2.container
        <div className={classes.MainMenu}>
          <MainContainerTB6px>
            <div>
              {data.nodes.nodes.map((
                item: any,
                index: number //3.layout
              ) => (
                <div key={index} className={classes.MainMenuWrap}>
                  {item.type === "layout_container" && ( //4.component
                    <LayoutContainerTB>
                      <div className={classes.MainMenuWrap}>
                        <ViewType data={item.nodes} onClick={onClick} />
                      </div>
                    </LayoutContainerTB>
                  )}
                  {item.type === "layout_container_t6px" && (
                    <LayoutContainerT6px>
                      <div className={classes.MainMenuWrap}>
                        <ViewType data={item.nodes} onClick={onClick} />
                      </div>
                    </LayoutContainerT6px>
                  )}
                  {item.type === "layout_container_b6px" && (
                    <LayoutContainerB6px>
                      <div className={classes.MainMenuWrap}>
                        <ViewType data={item.nodes} onClick={onClick} />
                      </div>
                    </LayoutContainerB6px>
                  )}
                  {item.type === "layout_container_tb3px" && (
                    <LayoutContainerTB3px>
                      <div className={classes.MainMenuWrap}>
                        <ViewType data={item.nodes} onClick={onClick} />
                      </div>
                    </LayoutContainerTB3px>
                  )}

                  {item.type === "layout_container_tb6px" && (
                    <LayoutContainerTB6px>
                      <div className={classes.MainMenuWrap}>
                        <ViewType data={item.nodes} onClick={onClick} />
                      </div>
                    </LayoutContainerTB6px>
                  )}
                  {item.type === "layout_container_tb8px" && (
                    <LayoutContainerTB8px>
                      <div className={classes.MainMenuWrap}>
                        <ViewType data={item.nodes} onClick={onClick} />
                      </div>
                    </LayoutContainerTB8px>
                  )}
                  {item.type === "divider" && <Divider />}
                </div>
              ))}
            </div>
          </MainContainerTB6px>
        </div>
      )}
    </div>
  );
}
export { SubMenu };
