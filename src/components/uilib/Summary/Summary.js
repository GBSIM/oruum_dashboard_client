import { useSelector, useDispatch } from "react-redux";

import './Summary.css';

export default function SummaryBlock(props) {
    const columnNumber = props.valueList.length/props.rowsNumber + 1;
    
    let valueList = [];
    let titleList = [];
    for (let index = 0; index < columnNumber; index++) {
        valueList.push(props.valueList.slice(index*columnNumber,index*(columnNumber+1)));
        titleList.push(props.titleList.slice(index*columnNumber,index*(columnNumber+1)));
    }

    const SummaryColumns = valueList.map((value,index) => (<SummaryRows key={index} valueList={value} titleList={titleList[index]}></SummaryRows>))

    return (
        <div className="summary-container">
            {SummaryColumns}
        </div>
    )
}

function SummaryRows(props) { 

    const SummaryRows = props.valueList.map((value,index) => (<SummaryRow key={index} value={value} title={props.titleList[index]}></SummaryRow>))

    return (
        <div className="summary-rows">
            {SummaryRows}
        </div>
    )
}

function SummaryRow(props) {
    return (
        <div className="summary-row">
            <span className="summary-row-title">{props.title}</span>
            <span className="summary-row-value">{props.value}</span>
        </div>
    )
}