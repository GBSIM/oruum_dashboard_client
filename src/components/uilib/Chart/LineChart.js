import './LineChart.css';

import { Line } from 'react-chartjs-2';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


export default function LineChart(props) {
    const periodNameList = props.periodNameList;
    const periodState = props.periodState;
    const xdata = props.xdata;
    const ydata = props.ydata;
    

    const periodButtonList = periodNameList.map((periodName,index) => 
                                (<PeriodButton key={index} periodName={periodName} plotPeriod={periodState}></PeriodButton>))
    

    return (
        <div className='line-chart-container'>
            <div className='period-picker-container'>
                {periodButtonList}
            </div>
            <div className='line-chart-canvas'>
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
            </div>
        </div>        
    )
}

function PeriodButton(props) {
    if (props.plotPeriod===props.periodName) {
        return (
            <button className='period-button on'>
                {props.periodName}
            </button>
        )
    } else {
        return (
            <button className='period-button'>
                {props.periodName}
            </button>
        )
    }
}