import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as filterSlice from '../../../store/filter/filter';
import { Menu, Switch, Space, Slider } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { GiStreetLight } from 'react-icons/gi';

export default function LightsFilter({ key, ...props }) {
  const light = useSelector((state) => state.filter.light);
  const nearby = useSelector((state) => state.filter.nearbyLight);

  const dispatch = useDispatch();

  return (
    // <Menu theme="dark" mode="inline" style={{ width: '100%' }}>
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
            checked={light}
            onChange={(checked, event) => {
              event.preventDefault();
              dispatch(filterSlice.applyLight());
            }}
          />
        </Space>
      </Menu.Item>

      <Menu.ItemGroup key="g1" title={`Nearby Lights (${nearby})`}>
        <Menu.Item key="1" className="unselectable">
          <Slider
            min={0}
            max={10}
            value={nearby}
            onChange={(value) => dispatch(filterSlice.setNearybyLight(value))}
            disabled={!light}
          />
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu.SubMenu>
    // </Menu>
  );
}
