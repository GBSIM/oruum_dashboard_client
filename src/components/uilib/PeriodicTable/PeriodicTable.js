import './PeriodicTable.css';

export default function PeriodicTable (props) {
    const title = props.title;
    const periodList = props.periodList;
    const dataLists = props.dataLists;
    const dataNameList = props.dataNameList;
    const unit = props.unit;

    return (
        <div className='periodic-table-container'>
            <PeriodicTableTitle title={title}></PeriodicTableTitle>
            <PeriodicDateRow periodList={periodList}></PeriodicDateRow>
            <PeriodicTableRows dataLists={dataLists} dataNameList={dataNameList}></PeriodicTableRows>
            <PeriodicTableUnit unit={unit}></PeriodicTableUnit>
        </div>
    )
}

function PeriodicTableTitle(props) {
    return (
        <h3 className='periodic-table-header'>
            {props.title}
        </h3>
    )
}

function PeriodicTableRows(props) {
    const dataLists = props.dataLists;
    const dataNameList = props.dataNameList;

    const TableRowList = dataLists.map((dataList,index) => 
            (<PeriodicTableRow 
                    key={index} 
                    dataList={dataList}
                    dataName={dataNameList[index]}></PeriodicTableRow>));
    return (
        <div>
            {TableRowList}
        </div>
    )   
}

function PeriodicTableRow(props) {
    const dataName = props.dataName;
    const dataList = props.dataList;

    const TableContents = dataList.map((content,index) => 
            (<PeriodicTableData key={index} content={content}></PeriodicTableData>))

    return (
        <div className='periodic-table-row'>
            <div className='periodic-table-row-header'>{dataName}</div>
            {TableContents}            
        </div>
    )
}

function PeriodicDateRow(props) {
    const periodList = props.periodList;
        
    const DateContents = periodList.map((date,index) => 
            (<PeriodicTableData key={index} content={date}></PeriodicTableData>))

    return (
        <div className='periodic-table-row date'>
            <div className='periodic-table-row-header'>{props.headerText}</div>
            {DateContents}            
        </div>
    )
}

function PeriodicTableData(props) {
    return (
        <div className='periodic-table-content'>{props.content}</div>
    )
}

function PeriodicTableUnit(props) {
    const unit = props.unit;

    return (
        <div className="periodic-table-unit">
            단위: {unit}
        </div>
    )
}