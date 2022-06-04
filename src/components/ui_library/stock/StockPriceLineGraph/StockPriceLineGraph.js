import './StockPriceLineGraph.css';

import { useSelector } from "react-redux";
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function StockPriceLineGraph() {
    const {plotPeriod,date,close} = useSelector(state => state.stock);
    const periodList = ['1일','1주','1달','3달','6달','1년','2년','5년','10년','모두'];

    const periodButtonList = periodList.map((period,index) => (
        <PeriodButton periodName={period} key={index} activatedPeriod={plotPeriod}></PeriodButton>
    ))

    return (
        <div className='stock-price-line-graph-container'>
            <div className='period-selector'>
                {periodButtonList}
            </div>
            <div className='line-chart-canvas'>
                <Line
                    className='line-chart'
                    width="100vw"
                    data={{
                        labels: date,
                        datasets: [
                            {
                            backgroundColor: 'rgba(75,192,192,1)',
                            borderColor: 'rgba(154,216,205,1)',
                            borderWidth: 2,
                            data: close,
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
    const periodName = props.periodName;
    const activatedPeriod = props.activatedPeriod;

    if (activatedPeriod === periodName) {
        return (
            <div className="period-button-container">
                <button className='period-button on'>
                    {periodName}
                </button>
            </div>
        )
    } else {
        return (
            <div className="period-button-container">
                <button className='period-button'>
                    <span>{periodName}</span>
                </button>
            </div>
        )
    }    
}