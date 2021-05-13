import React, { useState } from "react";
import { Menu, Space, Switch, Slider } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { GiDustCloud } from "react-icons/gi";

export default function PMFilter({ key, ...props }) {
  const [apply, setApply] = useState(false);

  const [totalIndex, setTotalIndex] = useState(50);
  const [pm10, setPm10] = useState(50);
  const [pm25, setPm25] = useState(50);

  return (
    <Menu.SubMenu
      icon={<GiDustCloud />}
      title="Air Quality"
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

      <Menu.ItemGroup key="g1" title={`Air Quality Index (${totalIndex})`}>
        <Menu.Item key="1" className="unselectable">
          <Slider
            min={0}
            max={500}
            value={totalIndex}
            onChange={(value) => setTotalIndex(value)}
            disabled={!apply}
          />
        </Menu.Item>
      </Menu.ItemGroup>

      <Menu.ItemGroup key="g2" title={`PM10 Value (${pm10})`}>
        <Menu.Item key="1" className="unselectable">
          <Slider
            min={0}
            max={100}
            value={pm10}
            onChange={(value) => setPm10(value)}
            disabled={!apply}
          />
        </Menu.Item>
      </Menu.ItemGroup>

      <Menu.ItemGroup key="g3" title={`PM25 Value (${pm25})`}>
        <Menu.Item key="1" className="unselectable">
          <Slider
            min={0}
            max={100}
            value={pm25}
            onChange={(value) => setPm25(value)}
            disabled={!apply}
          />
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu.SubMenu>
  );
}
