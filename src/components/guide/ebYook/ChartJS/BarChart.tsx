import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import DataLabels from 'chartjs-plugin-datalabels'; // 추가

// Chart.js 등록
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, DataLabels); // DataLabels 추가

const BarChart = () => {
    const data = {
        labels: ['0', '1', '2', '3', '4'],
        datasets: [
            {
                data: [65, 59, 80, 81, 56],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                ],
            },
        ],
    };

    const options: ChartOptions<'bar'> = {
        // 타입 지정
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                color: '#000',
                anchor: 'center',
                align: 'center',
                font: {
                    size: 14,
                    // weight: 'bold',
                },
                formatter: (value: number) => value,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: true,
                },
            },
        },
    };

    return (
        <div
            style={{ width: '500px', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
