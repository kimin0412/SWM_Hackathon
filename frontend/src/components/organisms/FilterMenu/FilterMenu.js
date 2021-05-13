import React, { useState } from "react";
import { Menu } from "antd";

import LightsFilter from "./LightsFilter";
import CCTVFilter from "./CCTVFilter";
import PMFilter from "./PMFilter";
import WeatherFilter from "./WeatherFilter";

const rootSubmenuKeys = ["sub1", "sub2", "sub3", "sub4"];

export const FilterMenu = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      theme="dark"
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
    >
      <LightsFilter key="sub1" />
      <CCTVFilter key="sub2" />
      <PMFilter key="sub3" />
      <WeatherFilter key="sub4" />
    </Menu>
  );
};
