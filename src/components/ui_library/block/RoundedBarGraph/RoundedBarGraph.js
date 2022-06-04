import RoundedBar from "../../unit/RoundedBar/RoundedBar"

export default function RoundedBarGraph(props) {
    const unit = props.unit;
    const title = props.title;

    const maxHeight = props.maxHeight; 
    const valueList = props.valueList;
    const periodList = props.periodList;

    const maxValue = Math.max(...valueList);

    const RoundedBarList = valueList.map((value,index) => (
        <RoundedBar
            maxHeight={maxHeight}
            value={value}
            period={periodList[index]}
            maxValue={maxValue}
            unit={unit}
            key={index}></RoundedBar>
    ));

    return (
        <div>
            <h3 style={{margin:'0px',color:'#696969'}}>{title}</h3>
            <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end'}}>
                {RoundedBarList}
            </div>
        </div>
    )
}