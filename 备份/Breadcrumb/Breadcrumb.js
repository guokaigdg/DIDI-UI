import React, { useState } from "react";
import uuid from "uuid";
import "./Breadcrumb.css";

/**
 *   面包屑
 *+----------------------------------------+
 *|   🐻 IT技术 / 🍔React / 🍉React-hook
 *+---------------------------------------+
 * @param {item.path} 路径
 * @param {item.icon} 图标
 * @param {item.title} 标题
 * @param {historyPages} 管理会话历史
 * @param {toPage} 跳转到的页面
 * @param {backslash} 间隔符 "/"
 * @returns
 */

function Breadcrumb(props) {
  const { historyPages, toPage, goBack, push } = props;

  const handleToPage = (e, index, length, path) => {
    toPage(e, index, length, path);
  };

  return (
    <div className="breadcrumb-wrap">
      <button onClick={goBack}> back </button>
      {historyPages.map((item, index) => (
        <div key={uuid()}>
          <span className="icon">{item.icon}</span>
          <span
            className="title"
            onClick={e => {
              handleToPage(e, index, historyPages.length, item.path);
            }}
          >
            {item.title}
          </span>
          {index !== historyPages.length - 1 && (
            <span className="backslash">/</span>
          )}
        </div>
      ))}
    </div>
  );
}
export default Breadcrumb;
