import React from 'react';
import swal from '@sweetalert/with-react';
import './SpotModal.css';
import { Bar } from "react-chartjs-2";

export const SpotModal = (props) => {
    const data = props.data;
    
    // for chart
    const bar_labels = ["범죄 안전 점수", "코로나 안전 점수", "사용자 리뷰 점수"];
    const safety_idx = Math.round(data.safety_idx * 100) / 100
    const bar_data = {
      labels: bar_labels,
      datasets: [{
        labels:"안전점수",
        data: [100, 65, 78],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
        ],
        borderWidth: 1
      }]
        
    };

    const legend={
        position: "bottom"
    };

    return (
        <div>
            <h1 className="parkName">소마공원</h1>  
            
            <h3>전체 점수</h3>
            
            <h1 className="score">{safety_idx}점</h1>
            
            <Bar data={bar_data} legend={legend}/>
            
            
        </div>
    );
}