import React from 'react';
import './SpotModal.css';
import { Radar } from 'react-chartjs-2';

export const SpotModal = (props) => {
  const safety_idx = Math.round(props.data.safety_idx * 100) / 100;
  const area = Math.round(props.data.area * 100) / 100;
  // // for chart
  // const bar_labels = ["범죄 안전 점수", "코로나 안전 점수", "사용자 리뷰 점수"];
  // const bar_data = {
  //   labels: bar_labels,
  //   datasets: [{
  //     labels:"안전점수",
  //     data: [100, 65, 78],
  //     backgroundColor: [
  //       'rgba(255, 99, 132, 0.2)',
  //       'rgba(75, 192, 192, 0.2)',
  //       'rgba(153, 102, 255, 0.2)',
  //     ],
  //     borderColor: [
  //       'rgb(255, 99, 132)',
  //       'rgb(75, 192, 192)',
  //       'rgb(153, 102, 255)',
  //     ],
  //     borderWidth: 1
  //   }]
  // };

  // const legend={
  //     position: "bottom"
  // };

  // return (
  //     <div>
  //         <h1 className="parkName">소마공원</h1>
  //         <h3>전체 점수</h3>
  //         <h1 className="score">95점</h1>
  //         <Bar data={bar_data} legend={legend}/>
  //     </div>
  // );

  let data = {
    labels: ['범죄 안전 점수', '코로나 안전 점수', '사용자 리뷰 점수'],
    datasets: [
      {
        label: ' ',
        data: [safety_idx, 40, 70],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
      },
    ],
  };
  const config = {
    type: 'radar',
    data: data,
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 30,
        suggestedMax: 90,
        ticks: {
          stepSize: 10,
        },
      },
    },
    options: {
      elements: {
        line: {
          borderWidth: 30,
        },
      },
      legend: {
        display: false,
        position: 'bottom',
      },
    },
  };
  return (
    <div>
      <h1 className="parkName">{props.data.park_name}</h1>
      <div style={{display:"flex"}}>
        <div style={{width:"33%"}}>
          <h3>가로등</h3>
          <h1 className="score">{props.data.streetlamp}</h1>
        </div>

        <div style={{width:"33%"}}>
          <h3>CCTV</h3>
          <h1 className="score">{props.data.cctv_cnt}</h1>
        </div>

        <div style={{width:"33%"}}>
          <h3>면적</h3>
          <h1 className="score">{area}</h1>
        </div>
      </div>
      <h1>↓</h1>
      <div>
        <h3>범죄 안전 점수</h3>
        <h1 className="score">{safety_idx}점</h1>
      </div>
      <div style={{height:"350px"}}>
      <Radar data={data} options={config} />
      </div>
    </div>
  );
};
