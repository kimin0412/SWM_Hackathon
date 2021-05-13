import React, { useState } from "react";
import { Menu, Space, Switch, Slider } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { BiCctv } from "react-icons/bi";

export default function CCTVFilter({ key, ...props }) {
  const [apply, setApply] = useState(false);
  const [camera, setCamera] = useState(3);

  return (
    <Menu.SubMenu icon={<BiCctv />} title="CCTV" key={key} {...props}>
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

      <Menu.ItemGroup key="g1" title={`Nearby CCTV (${camera})`}>
        <Menu.Item key="1" className="unselectable">
          <Slider
            min={0}
            max={10}
            value={camera}
            onChange={(value) => setCamera(value)}
            disabled={!apply}
          />
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu.SubMenu>
  );
}
