import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as filterSlice from '../../../store/filter/filter';
import { Menu, Space, Switch, Slider, Button } from 'antd';
import {
  TiWeatherPartlySunny,
  TiWeatherSunny,
  TiWeatherDownpour,
  TiWeatherSnow,
} from 'react-icons/ti';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

export default function WeatherFilter({ key, ...props }) {
  const climate = useSelector((state) => state.filter.climate);

  const sun = useSelector((state) => state.filter.sun);
  const rain = useSelector((state) => state.filter.rain);
  const snow = useSelector((state) => state.filter.snow);

  const temperature = useSelector((state) => state.filter.temperature);
  const humidity = useSelector((state) => state.filter.humidity);
  const precipitation = useSelector((state) => state.filter.precipitation);

  const dispatch = useDispatch();

  const buttonType = (apply) => (apply ? 'primary' : 'link');

  return (
    // <Menu theme="dark" mode="inline" style={{ width: '100%' }}>
    <Menu.SubMenu
      icon={<TiWeatherPartlySunny />}
      title="Climate"
      key={key}
      {...props}
    >
      <Menu.Item key="1" className="unselectable">
        <Space>
          Apply Filter
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            checked={climate}
            onChange={(checked, event) => {
              event.preventDefault();
              dispatch(filterSlice.applyClimate());
            }}
          />
        </Space>
      </Menu.Item>

      <Menu.ItemGroup key="g1" title={`Weather`}>
        <Menu.Item key="1" className="unselectable">
          <Space>
            <Button
              icon={<TiWeatherSunny />}
              type={buttonType(sun)}
              onClick={() => dispatch(filterSlice.setSun())}
              disabled={!climate}
            />
            <Button
              icon={<TiWeatherDownpour />}
              type={buttonType(rain)}
              onClick={() => dispatch(filterSlice.setRain())}
              disabled={!climate}
            />
            <Button
              icon={<TiWeatherSnow />}
              type={buttonType(snow)}
              onClick={() => dispatch(filterSlice.setSnow())}
              disabled={!climate}
            />
          </Space>
        </Menu.Item>
      </Menu.ItemGroup>

      <Menu.ItemGroup key="g2" title={`Temperature (${temperature}°C)`}>
        <Menu.Item key="1" className="unselectable">
          <Slider
            min={-10}
            max={40}
            value={temperature}
            onChange={(value) => dispatch(filterSlice.setTemperature(value))}
            disabled={!climate}
          />
        </Menu.Item>
      </Menu.ItemGroup>

      <Menu.ItemGroup key="g3" title={`Precipitation (${precipitation} mm)`}>
        <Menu.Item key="1" className="unselectable">
          <Slider
            min={0}
            max={100}
            value={precipitation}
            onChange={(value) => dispatch(filterSlice.setPrecipitation(value))}
            disabled={!climate || (!snow && !rain)}
          />
        </Menu.Item>
      </Menu.ItemGroup>

      <Menu.ItemGroup key="g4" title={`Humidity (${humidity}%)`}>
        <Menu.Item key="1" className="unselectable">
          <Slider
            min={0}
            max={100}
            value={humidity}
            onChange={(value) => dispatch(filterSlice.setHumidity(value))}
            disabled={!climate}
          />
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu.SubMenu>
    // </Menu>
  );
}
