import React, { useState, useEffect, useReducer } from "react";
import html2Canvas from "html2canvas";
import UseHistoryDB from "./historyDB/store";
import Breadcrumb from "./Breadcrumb";

const visibleHistoryReducer = (state, action) => {
  // 管理面包屑翻页页数
  switch (action.type) {
    case "NEXT_PAGE":
      return { pageNum: state.pageNum + 1 };
      break;
    case "LAST_PAGE":
      return { pageNum: state.pageNum - 1 };
      break;
    default:
      return pageNum;
  }
};

//  必须，获取浏览器的历史。可以使用 history 管理历史，从中获取页面跳转信息。
//也可以直接使用react-router 的 BrowserRouter。两种方法已经在上述示例代码给出。

function BreadcrumbWrap(props) {
  const { history, icon, title, isHome } = props;
  var documentLoadTimer;
  const {
    add_history,
    deleteAHistory,
    deleteLastHistory,
    find_history
    // dropDB
  } = UseHistoryDB();

  const [historyPages, setHistoryPages] = useState([]);
  const [visibleHistoryState, dispatch] = useReducer(visibleHistoryReducer, {
    pageNum: 0 //初始值0
  });

  useEffect(() => {
    documentLoadTimer = null;
    console.log("history.location.pathname:" + history.location.pathname);
    refreshHistory();

    documentLoadTimer = setTimeout(() => {
      html2Canvas(document.body).then(
        canvas => {
          let path = history.location.pathname;
          canvas2Image(canvas, icon, title, path, isHome);
        },
        err => {
          console.log(err);
        }
      );
    }, 10);

    return () => {
      clearTimeout(documentLoadTimer);
    };
    //页面加载完成之后再拍照，以免缺少一些需要异步动态渲染的部分
  }, []);

  async function refreshHistory() {
    let HistoryPages = await find_history();
    setHistoryPages(HistoryPages);
  }

  async function addHistory(icon, title, path, isHome) {
    let res = await add_history(icon, title, path, isHome);
    return res;
  }

  function canvas2Image(canvas, icon, title, path, isHome = false) {
    canvas.toBlob(
      imgBlob => onBlob(imgBlob, icon, title, path, isHome),
      "image/jpeg",
      0.95
    );
  }

  async function onBlob(imgBlob, icon, title, path, isHome) {
    let hadAdded = await addHistory(icon, title, path, imgBlob, isHome);
    if (hadAdded) {
      refreshHistory();
    }
  }

  function showLast() {
    dispatch({ type: "LAST_PAGE", visibleHistoryState });
    // console.log(visibleHistoryState.pageNum);
    // console.log(path);
    // handleToPage(e, index, historyPages.length - 1, path);

    history.goBack();
    // handleToPage;
  }
  function goBack_() {
    // e.stopPropagation();
    // deleteLastHistory({ curPath: path }).then(() => {
    //   history.push(path);
    // });
    // refreshHistory();
    // history.push(path);
    history.back();
  }
  function push_() {
    // history.goBack();
    console.log("前进:" + event.state);
    history.forward();
  }

  function showNext() {
    dispatch({ type: "NEXT_PAGE", visibleHistoryState });
    // console.log(visibleHistoryState.pageNum);

    history.push();
  }

  function deleteAhistory(icon, title, path) {
    deleteAHistory(icon, title, path);
    refreshHistory(); // 更新历史
  }

  function clearHistory() {
    deleteAHistory();
    refreshHistory(); // 更新历史
  }

  //点击后跟新会话记录
  function handleToPage(e, index, long, path) {
    console.log("当前路径path:" + path);
    e.stopPropagation();
    deleteLastHistory({ curPath: path }).then(() => {
      history.push(path);
    });
  }

  return (
    historyPages.length > 0 && (
      <Breadcrumb
        history={history} //会话历史
        historyPages={historyPages} //当前页面记录(里面包括icon titie path)
        toPage={handleToPage} //跳转页面点击事件
        // showLast={showLast}
        goBakc={goBack_}
        // showNext={showNext}
        showNext={push_}
        pageNum={visibleHistoryState.pageNum}
        clearHistory={clearHistory}
      />
    )
  );
}
export default BreadcrumbWrap;
