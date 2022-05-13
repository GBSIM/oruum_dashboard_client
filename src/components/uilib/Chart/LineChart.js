import './LineChart.css';

import { Line } from 'react-chartjs-2';
import { useSelector, useDispatch } from "react-redux";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


export default function LineChart() {
    const { ticker } = useSelector(state => state.stock);
    const { close } = useSelector(state => state.stock);
    const { date } = useSelector(state => state.stock);
    const { plotPeriod } = useSelector(state => state.stock);

    return (
        <div className='chart-canvas'>
            <div className='period-picker-container'>
                <PeriodButton periodName="1일" plotPeriod={plotPeriod}></PeriodButton>
                <PeriodButton periodName="1주" plotPeriod={plotPeriod}></PeriodButton>
                <PeriodButton periodName="1달" plotPeriod={plotPeriod}></PeriodButton>
                <PeriodButton periodName="3달" plotPeriod={plotPeriod}></PeriodButton>
                <PeriodButton periodName="6달" plotPeriod={plotPeriod}></PeriodButton>
                <PeriodButton periodName="1년" plotPeriod={plotPeriod}></PeriodButton>
                <PeriodButton periodName="2년" plotPeriod={plotPeriod}></PeriodButton>
                <PeriodButton periodName="5년" plotPeriod={plotPeriod}></PeriodButton>
                <PeriodButton periodName="10년" plotPeriod={plotPeriod}></PeriodButton>
                <PeriodButton periodName="최대" plotPeriod={plotPeriod}></PeriodButton>
            </div>
            <Line
                className='stock-price-graph'
                data={{
                    labels: {date}.date,
                    datasets: [
                        {
                        label: {ticker}.ticker,
                        backgroundColor: 'rgba(75,192,192,1)',
                        borderColor: 'rgba(154,216,205,1)',
                        borderWidth: 2,
                        data: {close}.close,
                        pointRadius: 0
                        }
                    ]
                    }}
                width="100vw"
                height="20vh"
                options={{
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