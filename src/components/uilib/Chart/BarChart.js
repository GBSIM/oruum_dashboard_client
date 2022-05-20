import { Bar } from 'react-chartjs-2';

import './BarChart.css';

export default function BarChart(props) {
    const title = props.title;
    const xdata = props.xdata;
    const ydataList = props.ydataList;
    const labelList = props.labelList;
    const backgroundColorList = props.backgroundColorList;
    const borderColorList = props.borderColorList;
    const hoverBackgroundColorList = props.hoverBackgroundColorList;
    const hoverBorderColorList = props.hoverBorderColorList;
    const unit = props.unit;
    
    let datasets = [];
    
    for (let index=0; index < ydataList.length; index++) {
        let tmpData = {
            label: labelList[index],
            backgroundColor: backgroundColorList[index],
            borderColor: borderColorList[index],
            borderWidth: 1,
            hoverBackgroundColor: hoverBackgroundColorList[index],
            hoverBorderColor: hoverBorderColorList[index],
            data: ydataList[index]
        };
        datasets.push(tmpData);
    } 

    return (
        <div className='bar-chart-canvas'>
            <h2 className='chart-title'>{title}</h2>
            <Bar
                className='stock-price-graph'
                data={{
                    labels: xdata,
                    datasets: datasets
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
                            },
                        },
                    }}}>
            </Bar>
            <BarChartUnit unit={unit}></BarChartUnit>
        </div>
    )
}

function BarChartUnit(props) {
    const unit = props.unit;

    return (
        <div className="unit">
            단위: {unit}
        </div>
    )
}