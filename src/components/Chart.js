import { Bar } from 'react-chartjs-2';

const Chart = ({ chartData }) =>  (
    <div className="chart-cont">
        <Bar     
            data={chartData}
            options={{
                title: {
                    display: true,
                    text: 'Population of Armenian Cities',
                    fontSize: 22
                },
                legend: {
                    display: true,
                    position: 'top'
                }
            }}
        />
    </div>
);

export default Chart;