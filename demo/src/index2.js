import React from "react";
import ReactDom from "react-dom";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
// pick a date util library
import MomentUtils from "@date-io/moment";
import DateFnsUtils from "@date-io/date-fns";
import LuxonUtils from "@date-io/luxon";
import Root from "./DateFnsLocalizationExample";

function App() {
  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <Root />
    </MuiPickersUtilsProvider>
  );
}

ReactDom.render(<App />, document.querySelector("#app"));
