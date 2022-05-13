import { useSelector, useDispatch } from "react-redux";

import './StockFinance.css';

export default function StockFinance(props) {
    return (
        <div>
            <StockIncome></StockIncome>
        </div>
    )
}

function StockIncome() {
    const {unitQuarter} = useSelector(state => state.stock);
    const {revenueQuarter,grossProfitQuarter, operatingIncomeQuarter, netIncomeQuarter} = useSelector(state => state.stock);
    const incomeList = [revenueQuarter,grossProfitQuarter,operatingIncomeQuarter,netIncomeQuarter];
    const incomeHeadTextList = ['총매출','매출 총이익','영업이익','순이익'];

    const {assetQuarter,liabilitiesQuarter, equityQuarter, currentAssetQuarter, currentLiabilitiesQuarter} = useSelector(state => state.stock);
    const balanceList = [assetQuarter,liabilitiesQuarter,equityQuarter,currentAssetQuarter,currentLiabilitiesQuarter];
    const balanceHeadTextList = ['총자산','총부채','총자본','유동자산','유동부채'];

    const {operatingCashFlowQuarter,investingCashFlowQuarter, financingCashFlowQuarter, netChangeCashFlowQuarter} = useSelector(state => state.stock);
    const cashflowList = [operatingCashFlowQuarter,investingCashFlowQuarter,financingCashFlowQuarter,netChangeCashFlowQuarter];
    const cashflowHeadTextList = ['총매출','매출 총이익','영업이익','순이익'];

    const {dividendQuarter, unitDividend} = useSelector(state => state.stock);
    const dividendList = [dividendQuarter];
    const dividendHeadTextList = ['배당금'];

    return (
        <div>
            <StockFinanceInfoBlock headerText='손익계산서' infoList={incomeList} infoHeadTextList={incomeHeadTextList} infoUnit={unitQuarter}></StockFinanceInfoBlock>
            <StockFinanceInfoBlock headerText='대차대조표' infoList={balanceList} infoHeadTextList={balanceHeadTextList} infoUnit={unitQuarter}></StockFinanceInfoBlock>
            <StockFinanceInfoBlock headerText='현금흐름표' infoList={cashflowList} infoHeadTextList={cashflowHeadTextList} infoUnit={unitQuarter}></StockFinanceInfoBlock>
            <StockFinanceInfoBlock headerText='배당금' infoList={dividendList} infoHeadTextList={dividendHeadTextList} infoUnit={unitDividend}></StockFinanceInfoBlock>
        </div>
    )

}

function StockFinanceInfoBlock(props) {
    const { periodQuarter} = useSelector(state => state.stock);

    const financeInfoRows = props.infoList.map((financeInfo,index) => 
        (<div>
            <StockFinanceRow financeInfo={financeInfo} key={index} infoHeadText={props.infoHeadTextList[index]}></StockFinanceRow>
            <StockFinanceLine height="1px" key={index}></StockFinanceLine>
        </div>))

    return (
        <div className='stock-finance-container'>
            <StockFinanceHeader headerText={props.headerText}></StockFinanceHeader>
            <StockFinanceRow financeInfo={periodQuarter}></StockFinanceRow>
            <StockFinanceLine height="2px"></StockFinanceLine>
            {financeInfoRows}
            <StockFinanceUnit unit={props.infoUnit}></StockFinanceUnit>
        </div>
    )
}

function StockFinanceHeader(props) {
    return (
        <h2 className='stock-finance-header'>
            {props.headerText}
        </h2>
    )
}

function StockFinanceRow(props) {
    
    const financeInfoList = props.financeInfo.map((period,index) => (<div className="finance-info" key={index}>{period}</div>))

    return (
        <div className='stock-finance-info-container'>
            <div className='finance-info-header'>{props.infoHeadText}</div>
            {financeInfoList}
        </div>
    )
}

function StockFinanceLine(props) {
    return (
        <div className='finance-info-line' style={{"height":props.height}}>
        </div>
    )
}

function StockFinanceUnit(props) {
    return (
        <div className="finance-unit">
            단위: {props.unit}
        </div>
    )
}