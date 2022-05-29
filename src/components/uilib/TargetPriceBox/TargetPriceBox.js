import './TargetPriceBox.css';
import PeriodicTable from '../PeriodicTable/PeriodicTable';

export default function TargetPriceBox(props) {
    const title = props.title;
    const factorHigh = props.factorHigh;
    const factorLow = props.factorLow;
    const periodList = props.periodList;
    const inputList = props.inputList;
    const factorName = props.factorName;
    const inputName = props.inputName;
    const unit = props.unit;
    
    let highTargetPriceList = [];
    let lowTargetPriceList = [];

    inputList.map((input,index) => {
        highTargetPriceList.push((input*factorHigh).toFixed(2));
        lowTargetPriceList.push((input*factorLow).toFixed(2));
    })

    let dataLists = [inputList,highTargetPriceList,lowTargetPriceList];
    let dataNameList = [inputName,'최고예상주가','최저예상주가'];

    return (
        <div className='target-price-box-container'>
            <h3 className='target-price-box-title'>{title}</h3>
            <FactorBox
                factorName={factorName}
                factorHigh={factorHigh}
                factorLow={factorLow}></FactorBox>
            <PeriodicTable
                periodList={periodList}
                dataLists={dataLists}
                dataNameList={dataNameList}
                unit={unit}></PeriodicTable>
        </div>
    )
}

function FactorBox(props) {
    return (
        <div className='factor-box-container'>
            <div style={{'display':'flex','flexDirection':'row'}}>
                <div className='factor-box-title'>최고{props.factorName} | &nbsp;</div>
                <div className='factor-box-value high'>{props.factorHigh}</div>
            </div>
            <div style={{'display':'flex','flexDirection':'row'}}>
                <div className='factor-box-title'>최저{props.factorName} |&nbsp;</div>
                <div className='factor-box-value low'>{props.factorLow}</div>
            </div>
        </div>
    )
}