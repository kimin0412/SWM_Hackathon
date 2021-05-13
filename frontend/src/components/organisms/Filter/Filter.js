import React, { useState } from 'react';
import { Menu, Slider, Switch, Space, Typography } from 'antd';

import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { RiVirusLine } from 'react-icons/ri';
import { GiDustCloud, GiStreetLight, GiTrafficCone } from 'react-icons/gi';

const { SubMenu } = Menu;
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];

export const Filter = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);

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
      <SubMenu key="sub1" icon={<GiStreetLight />} title="Street Light">
        <Menu.Item key="1" className="unselectable">
          <Space>
            Apply Filter
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked
            />
          </Space>
        </Menu.Item>

        <Menu.ItemGroup key="g1" title="Nearby Lights">
          <Menu.Item key="1" className="unselectable">
            <Slider min={0} max={10} />
          </Menu.Item>
        </Menu.ItemGroup>

        <Menu.ItemGroup key="g2" title="Lights Distance (m)">
          <Menu.Item key="1" className="unselectable">
            <Slider min={0} max={100} />
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu key="sub2" icon={<RiVirusLine />} title="Virus">
        <Menu.Item key="1">Option 1</Menu.Item>
      </SubMenu>
      <SubMenu key="sub3" icon={<GiDustCloud />} title="Particulate">
        <Menu.Item key="1">Option 1</Menu.Item>
      </SubMenu>
      <SubMenu key="sub4" icon={<GiTrafficCone />} title="Traffic Accident">
        <Menu.Item key="1">Option 1</Menu.Item>
      </SubMenu>
    </Menu>
  );
};
