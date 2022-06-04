import { Line } from 'react-chartjs-2';

import './StockPriceLineGraph.css';

export default function StockPriceLineGraph() {
    return (
        <div className='stock-price-line-graph-container'>
            <div className='period-selector'>
                <button className='period-button'>1일</button>
            </div>
            {/* <div className='line-chart-canvas'>
                <Line
                    className='line-chart'
                    width="100vw"
                    data={{
                        labels: xdata,
                        datasets: [
                            {
                            backgroundColor: 'rgba(75,192,192,1)',
                            borderColor: 'rgba(154,216,205,1)',
                            borderWidth: 2,
                            data: ydata,
                            pointRadius: 0
                            }
                        ]
                        }}
                    options={{
                        // responsive: false,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                            position: 'top',
                            display: false,
                            },
                            title: {
                            display: false,
                            text: 'Stock price',
                            },
                        },
                        scales: {
                            xAxis: {
                                display: false,
                            },
                            yAxis: {
                                display: false,
                            },
                            x: {
                                ticks: {
                                    maxRotation: 0,
                                    minRotation: 0,
                                    font: {
                                        size: 14,
                                        family: 'Noto Sans KR',
                                        weight: 500,
                                    },
                                    align: 'start',
                                    // For a category axis, the val is the index so the lookup via getLabelForValue is needed
                                    callback: function(val, index) {
                                        return index%20 === 0? this.getLabelForValue(index): "";
                                    },
                                },
                            },
                        }}}
                    />
            </div> */}
        </div>
    )
}