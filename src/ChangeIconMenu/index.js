// import React, { useEffect } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
// import { SplitLine, LayoutContainerTB6px } from "../index";
// import ChangeIconMenuRoute from "./ChangeIconMenuRoute";
// import ChangeIconMenuLink from "./ChangeIconMenuLink";
// const useStyles = makeStyles({
//   Wrap: {
//     width: 446,
//     height: 356,
//     background: "rgba(63,68,71,1)",
//     boxShadow: " 0 2 4 0 rgba(0,0,0,0.3)",
//     borderRadius: "2 0 2 2"
//   },
//   contentWrap: {
//     display: "flex",
//     flexDirection: "column"
//   },

//   RouteWrap: {
//     width: 446,
//     height: 303,
//     backgroundColor: "green"
//   }
// });
// function ChangeIconMenu() {
//   const classes = useStyles();

//   useEffect(() => {
//     console.log("🙆‍♂️");
//   });

//   return (
//     <div className={classes.Wrap}>
//       <LayoutContainerTB6px>
//         <Router>
//           <div className={classes.contentWrap}>
//             <ChangeIconMenuLink
//               clickButton1={() => {
//                 alert("点击了随机");
//               }}
//               clickButton2={() => {
//                 alert("点击了移除");
//               }}
//             />
//             <SplitLine />
//             <ChangeIconMenuRoute
//               chooseImage={() => {
//                 alert("你选择了一个图片");
//               }}
//             />
//           </div>
//         </Router>
//       </LayoutContainerTB6px>
//     </div>
//   );
// }

// //传入emoji
// //出入随机事件
// //传入移除事件
// //传入选择了摸个emoji事件
// //出传入上传照片事件

// export default ChangeIconMenu;

import React from "react";
import "emoji-mart/css/emoji-mart.css";
import {
  Picker,
  Emoji,
  emojiIndex,
  NimblePicker,
  NimbleEmoji,
  Category,
  NimbleEmojiIndex,
  store,
  frequently
} from "emoji-mart";

// import { Emoji } from "emoji-mart";

function ChangeIconMenu() {
  return (
    <div>
      <Picker
        set="emojione"
        showPreview={true} //预览
        showSearch={false} //搜索????????
        perLine={12} //一行显示多少个图标
        emojiSize={18} //emoji大小
        include="[
          search: 'Search',
          clear: 'Clear', 
          notfound: '没有找到对应图标',
          skintext: 'Choose your default skin tone',
          categories: {
            people: 'Smileys & People',
            recent: 'Frequently Used',
            foods: 'Food & Drink',
            activity: 'Activity',
           
          },
          skintones: {
            6: 'Dark Skin Tone',
          },
        ]"
      />
    </div>
  );
}

export default ChangeIconMenu;
