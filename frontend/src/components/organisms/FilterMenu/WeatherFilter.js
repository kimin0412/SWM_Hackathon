import React, { useState } from "react";
import { Menu, Space, Switch, Slider, Button } from "antd";
import {
  TiWeatherPartlySunny,
  TiWeatherSunny,
  TiWeatherDownpour,
  TiWeatherSnow,
} from "react-icons/ti";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

export default function WeatherFilter({ key, ...props }) {
  const [apply, setApply] = useState(false);

  const [sun, setSun] = useState(true);
  const [rain, setRain] = useState(true);
  const [snow, setSnow] = useState(true);

  const [temperature, setTemperature] = useState(21);
  const [humidity, setHumidity] = useState(50);
  const [precipitation, setPrecipitation] = useState(5);

  const buttonType = (state) => (state ? "primary" : "link");

  return (
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
            checked={apply}
            onChange={(checked, event) => {
              event.preventDefault();
              setApply(checked);
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
              onClick={() => setSun(!sun)}
              disabled={!apply}
            />
            <Button
              icon={<TiWeatherDownpour />}
              type={buttonType(rain)}
              onClick={() => setRain(!rain)}
              disabled={!apply}
            />
            <Button
              icon={<TiWeatherSnow />}
              type={buttonType(snow)}
              onClick={() => setSnow(!snow)}
              disabled={!apply}
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
            onChange={(value) => setTemperature(value)}
            disabled={!apply}
          />
        </Menu.Item>
      </Menu.ItemGroup>

      <Menu.ItemGroup key="g3" title={`Precipitation (${precipitation} mm)`}>
        <Menu.Item key="1" className="unselectable">
          <Slider
            min={0}
            max={100}
            value={precipitation}
            onChange={(value) => setPrecipitation(value)}
            disabled={!apply || (!snow && !rain)}
          />
        </Menu.Item>
      </Menu.ItemGroup>

      <Menu.ItemGroup key="g4" title={`Humidity (${humidity}%)`}>
        <Menu.Item key="1" className="unselectable">
          <Slider
            min={0}
            max={100}
            value={humidity}
            onChange={(value) => setHumidity(value)}
            disabled={!apply}
          />
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu.SubMenu>
  );
}
