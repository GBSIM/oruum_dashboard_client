import './BarChart.css';

export default function BarChart(props) {
    const barChartTitle = props.barChartTitle
    const valueList = props.valueList;
    const labelList = props.labelList;
    const maxValue = Math.max.apply(Math,valueList);
    const posColor = props.posColor;
    const negColor = props.negColor;

    const BarList = props.valueList.map((value,index) => 
        (<Bar 
            key={index} 
            value={value}
            maxValue={maxValue}
            label={labelList[index]}
            posColor={posColor}
            negColor={negColor}></Bar>));
    

    return (
        <div className='bar-chart-container'>
            <h3 className='bar-chart-title'>{barChartTitle}</h3>
            <div className='bar-list-container'>
                {BarList}
            </div>
            
        </div>
    )
}

function Bar(props) {
    const value = props.value;
    const maxValue = props.maxValue;
    const label = props.label;
    const barHeight = 150 * Math.abs(value)/maxValue;
    const posColor = props.posColor;
    const negColor = props.negColor;

    let ColorValue;
    let ColorBar;
    if (value > 0) {
        ColorValue = <div className='unit-bar-value' style={{'color':posColor}}>{value}</div>
        ColorBar = <div className='unit-bar' style={{'height':barHeight,'background':posColor}}></div>
    }
    else {
        ColorValue = <div className='unit-bar-value' style={{'color':negColor}}>{value}</div>
        ColorBar = <div className='unit-bar' style={{'height':barHeight,'background':negColor}}></div>
    }

    return (
        <div className='unit-bar-chart'>
            {ColorValue}
            {ColorBar}
            <div className='unit-bar-label'>
                {label}
            </div>
        </div>
    )
}