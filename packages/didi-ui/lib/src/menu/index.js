"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var index_1 = require("../index");
var useMediaQuery_1 = tslib_1.__importDefault(require("@material-ui/core/useMediaQuery"));
var styles_1 = require("@material-ui/core/styles");
function Menu(props) {
    var _a = tslib_1.__read(React.useState(false), 2), state = _a[0], setState = _a[1];
    var handleChangeMode = function (state) {
        setState(state);
        console.log(state);
    };
    var handleChangeMode2 = function (state) {
        console.log(state);
    };
    var prefersDarkMode = useMediaQuery_1.default("(prefers-color-scheme: " + (state === true ? "dark" : "light") + " )");
    var theme = React.useMemo(function () {
        return styles_1.createMuiTheme({
            palette: {
                type: prefersDarkMode ? "dark" : "light",
                primary: {
                    main: "#4caf50"
                },
                secondary: {
                    light: "#ff7961",
                    main: "#ff3d00",
                    dark: "#ba000d",
                    contrastText: "#000"
                },
                contrastThreshold: 3,
                tonalOffset: 0.2
            },
            typography: {
                fontFamily: "Raleway, Arial"
            }
        });
    }, [prefersDarkMode]);
    var data = props.data;
    return (React.createElement(styles_1.ThemeProvider, { theme: theme },
        React.createElement("div", null,
            React.createElement(index_1.SwitchButton, { onChange: handleChangeMode }),
            data.type === "main_menu" && (React.createElement(index_1.MainMenu, { data: data, onClick: handleChangeMode2 })),
            data.type === "sub_menu" && React.createElement(index_1.SubMenu, { data: data }))));
}
exports.Menu = Menu;
//# sourceMappingURL=index.js.map