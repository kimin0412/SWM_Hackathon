import React from 'react';
import { Menu } from 'antd';

import LightsFilter from './LightsFilter';
import CCTVFilter from './CCTVFilter';
import PMFilter from './PMFilter';
import WeatherFilter from './WeatherFilter';

const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];

export const FilterMenu = ({ mobile }) => {
  return (
    <Menu
      theme="dark"
      mode="inline"
      style={{ width: '100%' }}
      defaultOpenKeys={mobile ? [] : rootSubmenuKeys}
      multiple={true}
    >
      <LightsFilter key="sub1" />
      <CCTVFilter key="sub2" />
      <PMFilter key="sub3" />
      <WeatherFilter key="sub4" />
    </Menu>
  );
};
