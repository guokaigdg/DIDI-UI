import React, { useState, useEffect } from "react";
import axios from "axios";
import SidebarButton from "../SidebarButton/index";

function Sldebar() {
  const [data, setData] = useState({ list: [] });
  const [chosenOption, setChosenOption] = useState({ list: [] });
  useEffect(() => {
    axios
      .get("../../public/data.json")
      .then(res => {
        setData(res.data);
      })
      .catch(error => console.log("error"));
  }, []);
  const handleClick = name => {
    setChosenOption(name);
  };

  return (
    <div>
      {data.list.map(item => (
        <SidebarButton
          ischooseButton={chosenOption === item.name ? true : false}
          chooseSidebarButton={handleClick}
          name={item.name}
          sidebarUrlDefault={item.urldefault}
          sidebarUrlSlected={item.urlselected}
          key={item.name}
        />
      ))}
    </div>
  );
}
export default Sldebar;
