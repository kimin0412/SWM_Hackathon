import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as filterSlice from '../../../store/filter/filter';
import { Menu, Space, Switch, Slider } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { BiCctv } from 'react-icons/bi';

export default function CCTVFilter({ key, ...props }) {
  const cctv = useSelector((state) => state.filter.cctv);
  const nearby = useSelector((state) => state.filter.nearbyCCTV);

  const dispatch = useDispatch();

  return (
    // <Menu theme="dark" mode="inline" style={{ width: '100%' }}>
    <Menu.SubMenu icon={<BiCctv />} title="CCTV" key={key} {...props}>
      <Menu.Item key="1" className="unselectable">
        <Space>
          Apply Filter
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            checked={cctv}
            onChange={(checked, event) => {
              event.preventDefault();
              dispatch(filterSlice.applyCCTV());
            }}
          />
        </Space>
      </Menu.Item>

      <Menu.ItemGroup key="g1" title={`Nearby CCTV (${nearby})`}>
        <Menu.Item key="1" className="unselectable">
          <Slider
            min={0}
            max={10}
            value={nearby}
            onChange={(value) => dispatch(filterSlice.setNearbyCCTV(value))}
            disabled={!cctv}
          />
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu.SubMenu>
    //</Menu>
  );
}
