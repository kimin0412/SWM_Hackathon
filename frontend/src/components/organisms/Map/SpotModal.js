import React from 'react';
import swal from '@sweetalert/with-react';
import './SpotModal.css';
import { Bar, Doughnut } from "react-chartjs-2";

export const SpotModal = () => {
    
    // for chart
    const bar_labels = ["범죄 안전 점수", "코로나 안전 점수", "사용자 리뷰 점수"];

    const bar_data = {
      labels: bar_labels,
      datasets: [{
        labels: bar_labels,
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

    const bar_options = {
        legend: {
            display: false
        },
    }
    
    
    return (
        <div>
            <h1>소마공원</h1>  

            <h3>*전체 점수*</h3>
            <p>95점</p>
            
            <Bar data={bar_data} options={bar_options}/>
            
            
        </div>
    );
}