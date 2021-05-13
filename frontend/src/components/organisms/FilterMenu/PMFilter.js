import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as filterSlice from "../../../store/filter/filter";
import { Menu, Space, Switch, Slider } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { GiDustCloud } from "react-icons/gi";

export default function PMFilter({ key, ...props }) {
  const air = useSelector((state) => state.filter.air);

  const aqi = useSelector((state) => state.filter.aqi);
  const pm10 = useSelector((state) => state.filter.pm10);
  const pm25 = useSelector((state) => state.filter.pm25);

  const dispatch = useDispatch();

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
            checked={air}
            onChange={(checked, event) => {
              event.preventDefault();
              dispatch(filterSlice.applyAir());
            }}
          />
        </Space>
      </Menu.Item>

      <Menu.ItemGroup key="g1" title={`Air Quality Index (${aqi})`}>
        <Menu.Item key="1" className="unselectable">
          <Slider
            min={0}
            max={500}
            value={aqi}
            onChange={(value) => dispatch(filterSlice.setAQI(value))}
            disabled={!air}
          />
        </Menu.Item>
      </Menu.ItemGroup>

      <Menu.ItemGroup key="g2" title={`PM10 Value (${pm10})`}>
        <Menu.Item key="1" className="unselectable">
          <Slider
            min={0}
            max={100}
            value={pm10}
            onChange={(value) => dispatch(filterSlice.setPm10(value))}
            disabled={!air}
          />
        </Menu.Item>
      </Menu.ItemGroup>

      <Menu.ItemGroup key="g3" title={`PM25 Value (${pm25})`}>
        <Menu.Item key="1" className="unselectable">
          <Slider
            min={0}
            max={100}
            value={pm25}
            onChange={(value) => dispatch(filterSlice.setPm25(value))}
            disabled={!air}
          />
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu.SubMenu>
  );
}
