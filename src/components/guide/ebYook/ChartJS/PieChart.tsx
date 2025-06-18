import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Chart.js 등록
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    // 차트 데이터
    const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
            },
        ],
    };

    // options 추가
    const options = {
        plugins: {
            legend: {
                display: false, // legend 숨기기
            },
            datalabels: {
                display: false, // datalabels 숨기기
            },
        },
    };

    return (
        <div style={{ width: '300px', height: '300px' }}>
            <Pie data={data} options={options} />
        </div>
    );
};

export default PieChart;
