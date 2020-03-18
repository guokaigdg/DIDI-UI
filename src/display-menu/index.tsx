import * as React from "react";
import * as PropTypes from "prop-types";
import Display from "./display";

/**
 * Display
 * @param {icon} 图标
 * @param {title} 标题
 * @param {onSelect} 点击标题返回标题吗名字的方法
 * @returns
 */

function DisplayWrap(props: { disPlayList: any; onSelect: any }) {
  const { disPlayList, onSelect } = props;
  const handleonCelct = (titleName: string) => {
    onSelect(titleName);
  };
  return (
    <div>
      <Display list={disPlayList} onclickDisplay={handleonCelct} />
    </div>
  );
}
DisplayWrap.protoTypes = {
  disPlayList: PropTypes.object,
  onSelect: PropTypes.func
};
DisplayWrap.defaultProps = {
  disPlayList: [{ icon: "book", title: "工作区" }],
  onSelect: () => {}
};

export { DisplayWrap };
