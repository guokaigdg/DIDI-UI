import React from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

/**
 * @param {upDateList} 根据ur更新数据
 * @param {titleList}  通过upDateList获取到更新后的数据对象
 * @returns
 */

function BreadcrumbWrap(props) {
  var upDateList = props.upDateList;

  var location = useLocation();
  var titleList = upDateList(location.pathname);
  return React.createElement(
    "div",
    null,
    React.createElement(Breadcrumb, { titleList: titleList })
  );
}

export default BreadcrumbWrap;