import { useSelector, useDispatch } from "react-redux";

import './Summary.css';

export default function Summary(props) {
    let titleListsGreyLine = [];
    let valueListsGreyLine = [];
    let titleListLast = [];
    let valueListLast = [];
    let tmpTitleList = [];
    let tmpValueList = [];

    for (let index=0; index < props.titleList.length; index++) {
        if (index % props.numberRows === 0) {
            tmpTitleList = [];
            tmpValueList = [];
        }

        tmpTitleList.push(props.titleList[index]);
        tmpValueList.push(props.valueList[index]);

        if ((index % props.numberRows === (props.numberRows-1)) & (index < (props.titleList.length - props.numberRows ))) {
            titleListsGreyLine.push(tmpTitleList);
            valueListsGreyLine.push(tmpValueList);
        }
        if ((index >= (props.titleList.length - props.numberRows )) & ((index % props.numberRows === (props.numberRows-1)) || (index === (props.titleList.length-1)))) {
            titleListLast = tmpTitleList;
            valueListLast = tmpValueList;
        }
    }

    const SummaryColumns = valueListsGreyLine.map((valueList,index) => (<SummaryRowsGreyLine key={index} valueList={valueList} titleList={titleListsGreyLine[index]}></SummaryRowsGreyLine>))

    return (
        <div className="summary-container">
            {SummaryColumns}
            <SummaryRows titleList={titleListLast} valueList={valueListLast}></SummaryRows>
        </div>
    )
}

function SummaryRowsGreyLine(props) {
    return (
        <div className="summary-rows-grey-line">
            <SummaryRows valueList={props.valueList} titleList={props.titleList}></SummaryRows>
            <div className="grey-line"></div>
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