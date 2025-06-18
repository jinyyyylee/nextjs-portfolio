import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';

// Chart.js 등록
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [
            {
                data: [300, 50, 100, 80, 120],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options: ChartOptions<'doughnut'> = {
        plugins: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    usePointStyle: true, // 도형 스타일 사용
                    pointStyle: 'rectRounded', // circle, rect, triangle 등
                    boxWidth: 10, // legend 도형의 너비
                    boxHeight: 10, // legend 도형의 높이
                    padding: 20, // legend 항목 간의 간격
                    font: {
                        size: 14, // legend 텍스트 크기
                    },
                },
            },
            datalabels: {
                display: false,
            },
        },
        cutout: '50%', // 도넛의 중앙 구멍 크기 (0~100%)
    };

    return (
        <div style={{ width: '400px', height: '400px' }}>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default DoughnutChart;
