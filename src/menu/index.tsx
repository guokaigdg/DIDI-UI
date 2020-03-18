import * as React from "react";
import { MainMenu, SubMenu, SwitchButton } from "../index";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// import { useToggle } from "@umijs/hooks";

// import CssBaseline from "@material-ui/core/CssBaseline";
// import { Grid, Paper } from "@material-ui/core";

// import Container from "@material-ui/core/Container";
// import { blue } from "@material-ui/core/colors";

/**
 * menu菜单组件
 * 1. MainMenu ：主菜单
 * 2. SubMenu ：子菜单
 */

function Menu(props: { data: any }) {
  const [state, setState] = React.useState(false);

  //   const { state, toggle } = useToggle();
  const handleChangeMode = (state: boolean) => {
    setState(state);
    console.log(state);
  };
  const handleChangeMode2 = (state: string) => {
    console.log(state);
  };

  const prefersDarkMode = useMediaQuery(
    `(prefers-color-scheme: ${state === true ? "dark" : "light"} )`
  );

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            //             light: "#18ffff",
            main: "#4caf50" //显示颜色, 绿色
            //             dark: "#18ffff", //hover??
            //             contrastText: "#b388ff" //字体颜色
          },
          secondary: {
            light: "#ff7961",
            main: "#ff3d00", //显示颜色, 橙色
            dark: "#ba000d",
            contrastText: "#000"
          },
          contrastThreshold: 3,
          tonalOffset: 0.2
        },
        typography: {
          fontFamily: "Raleway, Arial"
          //           fontSize: 24
        }
      }),
    [prefersDarkMode]
  );

  const { data } = props;
  return (
    <ThemeProvider theme={theme}>
      <div>
        <SwitchButton onChange={handleChangeMode} />
        {/* <button onClick={() => toggle()}>打开Dark模式</button> */}
        {data.type === "main_menu" && (
          <MainMenu data={data} onClick={handleChangeMode2} />
        )}
        {data.type === "sub_menu" && <SubMenu data={data} />}
      </div>
    </ThemeProvider>
  );
}
export { Menu };
