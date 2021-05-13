import React, { useState } from "react";
import { Menu, Switch, Space, Slider } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { GiStreetLight } from "react-icons/gi";

export default function LightsFilter({ key, ...props }) {
  const [apply, setApply] = useState(false);
  const [light, setLight] = useState(3);

  return (
    <Menu.SubMenu
      icon={<GiStreetLight />}
      title="Street Light"
      key={key}
      {...props}
    >
      <Menu.Item key="1" className="unselectable">
        <Space>
          Apply Filter
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            checked={apply}
            onChange={(checked, event) => {
              event.preventDefault();
              setApply(checked);
            }}
          />
        </Space>
      </Menu.Item>

      <Menu.ItemGroup key="g1" title={`Nearby Lights (${light})`}>
        <Menu.Item key="1" className="unselectable">
          <Slider
            min={0}
            max={10}
            value={light}
            onChange={(value) => setLight(value)}
            disabled={!apply}
          />
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu.SubMenu>
  );
}
