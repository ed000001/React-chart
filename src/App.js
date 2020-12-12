import { useState } from 'react';
import Chart from './components/Chart';

function App() {
  const [chartData] = useState({
    labels: ['Abovyan', 'Artashat', 'Charencavan', 'Hrazdan', 'Hoktemberyan'],
    datasets: [
        {
            label: 'Population',
            data: [44400, 21300, 22000, 41600, 33600],
            backgroundColor: [
                'rgba(255, 192, 192, 0.5)',
                'rgba(275, 102, 142, 0.5)',
                'rgba(205, 142, 192, 0.5)',
                'rgba(155, 192, 192, 0.5)',
                'rgba(75, 192, 157, 0.5)'
            ]
        }
    ]
  });

  return (
    <div className="App">
      <Chart 
        chartData={chartData}
      />
    </div>
  );
}

export default App;
