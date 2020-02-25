import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Display, Divider, Menu } from "../../src/index";

function Demo2() {
  return (
    <div>
      <Menu />
    </div>
  );
}

ReactDOM.render(<Demo2 />, document.querySelector("#demo"));
