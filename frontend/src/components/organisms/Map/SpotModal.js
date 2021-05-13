import React from 'react';
import swal from '@sweetalert/with-react';
import styles from './css/SpotModal.css';

export const SpotModal = () => {
    return (
        <div>
            <h1>소마공원</h1>  

            <h3>*전체 점수*</h3>
            <p>95점</p>
            <table className={styles.center}>
                <thead>
                    <tr>
                        <th>범죄 안전 점수</th>
                        <th>코로나 안전 점수</th>
                        <th>사용자 리뷰 안전 점수</th>
                    </tr>

                </thead>

                <tbody>

                    <tr>
                        <td>95점</td>
                        <td>50점</td>
                        <td>100점</td>
                    </tr>

                    <tr>
                        <td>가로등 : 95점</td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>CCTV : 95점</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
}