import './QuarterTable.css';

export default function QuarterTalbe (props) {
    const title = props.title;
    const periodList = props.periodList;
    const dataLists = props.dataLists;
    const dataNameList = props.dataNameList;
    const unit = props.unit;

    return (
        <div className='quarter-table-container'>
            <QuarterTableTitle title={title}></QuarterTableTitle>
            <QuarterDateRow periodList={periodList}></QuarterDateRow>
            <QuarterTableRows dataLists={dataLists} dataNameList={dataNameList}></QuarterTableRows>
            <QuarterTableUnit unit={unit}></QuarterTableUnit>
        </div>
    )
}

function QuarterTableTitle(props) {
    return (
        <h2 className='quarter-table-header'>
            {props.title}
        </h2>
    )
}

function QuarterTableRows(props) {
    const dataLists = props.dataLists;
    const dataNameList = props.dataNameList;

    const TableRowList = dataLists.map((dataList,index) => 
            (<QuarterTableRow 
                    key={index} 
                    dataList={dataList}
                    dataName={dataNameList[index]}></QuarterTableRow>));
    return (
        <div>
            {TableRowList}
        </div>
    )   
}

function QuarterTableRow(props) {
    const dataName = props.dataName;
    const dataList = props.dataList;

    const TableContents = dataList.map((content,index) => 
            (<QuarterTableData key={index} content={content}></QuarterTableData>))

    return (
        <div className='quarter-table-row'>
            <div className='quarter-table-row-header'>{dataName}</div>
            {TableContents}            
        </div>
    )
}

function QuarterDateRow(props) {
    const periodList = props.periodList;
        
    const DateContents = periodList.map((date,index) => 
            (<QuarterTableData key={index} content={date}></QuarterTableData>))

    return (
        <div className='quarter-table-row date'>
            <div className='quarter-table-row-header'>{props.headerText}</div>
            {DateContents}            
        </div>
    )
}

function QuarterTableData(props) {
    return (
        <div className='quarter-table-content'>{props.content}</div>
    )
}

function QuarterTableUnit(props) {
    const unit = props.unit;

    return (
        <div className="quarter-table-unit">
            단위: {unit}
        </div>
    )
}