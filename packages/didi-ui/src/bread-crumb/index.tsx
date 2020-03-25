import * as React from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

/**
 * @param {upDateList} 根据ur更新数据
 * @param {titleList}  通过upDateList获取到更新后的数据对象
 * @returns
 */

function BreadcrumbWrap(props: { upDateList: any }) {
  const { upDateList } = props;
  let location = useLocation();
  const titleList = upDateList(location.pathname);
  return (
    <div>
      <Breadcrumb titleList={titleList} />
    </div>
  );
}

export { BreadcrumbWrap };
