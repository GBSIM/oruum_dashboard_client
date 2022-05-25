import { useSelector } from "react-redux";

import './StockPage.css';
import '../../../default.css';
import NavBar from "../../uilib/NavBar/NavBar";
import Header from "../../uilib/Header/Header";
import Name from "../../uilib/Name/Name";
import TagBox from "../../uilib/TagBox/TagBox";
import PriceBox from "../../uilib/PriceBox/PriceBox";
import LineChart from '../../uilib/Chart/LineChart';
import CheckPointBox from "../../uilib/CheckPointBox/CheckPointBox";
import PeriodicTable from "../../uilib/PeriodicTable/PeriodicTable";
import Summary from "../../uilib/Summary/Summary";
import BarChart from "../../uilib/Chart/BarChart";
import StockLogo from "../../uilib/Logo/StockLogo";
import BottomNavBar from "../../uilib/NavBar/BottomNavBar";
import * as colorGroup from '../../../Color.js';

function StockPage() {
    const { name, ticker } = useSelector(state => state.stock);

    const { date, close } = useSelector(state => state.stock);

    const { plotPeriod, tagList} = useSelector(state => state.stock);

    const { currency, currentPrice, lastChange, lastChangeRate, lastChangeSign } = useSelector(state => state.stock);

    const {lastOpen, lastHigh, lastLow, lastVolume, forwardPER, capability, yearlyHigh, yearlyLow,
           fallingRatio, EPS, ttmPER, ttmPSR} = useSelector(state => state.stock);

    const summaryTitleList = ["시작가","최고가","최저가",
                              "거래량","f/w PER","시가총액",
                              "52주 최고","52주 최저","고점대비 하락률",
                              "주당순이익","PER(TTM)","PSR(TTM)"];
    const summaryValueList = [lastOpen, lastHigh, lastLow, 
                              lastVolume, forwardPER, capability, 
                              yearlyHigh, yearlyLow, fallingRatio,
                              EPS, ttmPER, ttmPSR];
    
    const { checkListBuy, checkListSell } = useSelector(state => state.stock);

    const { financialDataUnit, quarterPeriodList } = useSelector(state => state.stock);

    const { quarterRevenueList, quarterGrossProfitList, 
            quarterOperatingIncomeList, quarterNetIncomeList} = useSelector(state => state.stock);
    const incomeList = [quarterRevenueList,quarterGrossProfitList,quarterOperatingIncomeList,quarterNetIncomeList];
    const incomeNameList = ['총매출','매출 총이익','영업 이익','순이익'];

    const { quarterAssetList, quarterLiabilitiesList, 
            quarterEquityList, quarterCurrentAssetList,quarterCurrentLiabilitiesList} = useSelector(state => state.stock);
    const balanceList = [quarterAssetList,quarterLiabilitiesList,quarterEquityList,
                         quarterCurrentAssetList,quarterCurrentLiabilitiesList];
    const balanceNameList = ['총 자산','총 부채','총 자산','유동자산','유동부채'];

    const { quarterOperatingCashFlowList, quarterInvestingCashFlowList, 
            quarterFinancingCashFlowList, quarterNetChangeCashFlowList} = useSelector(state => state.stock);
    const cashflowList = [quarterOperatingCashFlowList,quarterInvestingCashFlowList,
                          quarterFinancingCashFlowList,quarterNetChangeCashFlowList];
    const cashflowNameList = ['영업활동 현금','투자활동 현금흐름','재무활동 현금흐름','현금순변동'];

    const { quarterDividendList, dividendUnit} = useSelector(state => state.stock);
    const dividendList = [quarterDividendList];
    const dividendNameList = ['배당금'];

    const barBackgroundColorList = [colorGroup.deepGreen,colorGroup.oruumGreen,colorGroup.lightGreen,colorGroup.whiteGreen]
    const barBorderColorList = barBackgroundColorList;
    const barHoverBackgroundColorList = [colorGroup.hoverDeepGreen,colorGroup.hoverOruumGreen,colorGroup.hoverLightGreen,colorGroup.hoverWhiteGreen];
    const barHoverBorderColorLIst = barHoverBackgroundColorList;

    return (
        <div className='page'>
            <NavBar></NavBar>
            <div className='main-content'>
                <Header>
                </Header>
                <div className='main-contents'>
                    <div style={{"display":"flex","flexDirection":"row","alignItems":"center"}}>
                        <StockLogo></StockLogo>
                        <div>
                            <Name name={ name } subname={ ticker }></Name>
                            <PriceBox currency = {currency}
                                currentPrice={currentPrice}
                                lastChange={lastChange}
                                lastChangeRate={lastChangeRate}
                                lastChangeSign={lastChangeSign}></PriceBox>
                        </div>
                    </div>
                    
                    
                    <TagBox tagList={tagList}></TagBox>
                    
                    <LineChart 
                        periodNameList={["1일","1주","1달","3달","6달","1년","2년","5년","10년","최대"]} 
                        periodState={plotPeriod}
                        xdata={{date}.date}
                        ydata={{close}.close}></LineChart>
                    <Summary 
                        titleList={summaryTitleList} 
                        valueList={summaryValueList} 
                        numberRows = {3}></Summary>
                    <div className='check-box-container'>
                        <CheckPointBox 
                            headerText={{ticker}.ticker+', 매수하자!'} 
                            checkPointList={checkListBuy}
                            image={require('./images/icon_up.png')}></CheckPointBox>
                        <CheckPointBox 
                            headerText={{ticker}.ticker+', 좀 더 생각해봐야...!?'} 
                            checkPointList={checkListSell}
                            image={require('./images/icon_down.png')}></CheckPointBox>
                    </div>
                    {/* <PeriodicTable 
                            title='손익계산서'
                            periodList={quarterPeriodList}
                            dataLists={incomeList} 
                            dataNameList={incomeNameList}
                            unit={financialDataUnit}></PeriodicTable> */}
                    {/* <PeriodicTable 
                            title='대차대조표'
                            periodList={quarterPeriodList}
                            dataLists={balanceList} 
                            dataNameList={balanceNameList}
                            unit={financialDataUnit}></PeriodicTable>
                    
                    <PeriodicTable 
                            title='현금흐름표'
                            periodList={quarterPeriodList}
                            dataLists={cashflowList} 
                            dataNameList={cashflowNameList}
                            unit={financialDataUnit}></PeriodicTable>
                    <PeriodicTable 
                            title='배당금'
                            periodList={quarterPeriodList}
                            dataLists={dividendList} 
                            dataNameList={dividendNameList}
                            unit={dividendUnit}></PeriodicTable> */}
                    {/* <BarChart
                        title={'손익계산서'}
                        labelList={incomeNameList}
                        xdata={quarterPeriodList}
                        ydataList={incomeList}
                        backgroundColorList={barBackgroundColorList}
                        borderColorList={barBorderColorList}
                        hoverBackgroundColorList={barHoverBackgroundColorList}
                        hoverBorderColorList={barHoverBorderColorLIst}
                        unit={financialDataUnit}></BarChart>
                    <BarChart
                        title={'대차대조표'}
                        labelList={balanceNameList}
                        xdata={quarterPeriodList}
                        ydataList={balanceList}
                        backgroundColorList={barBackgroundColorList}
                        borderColorList={barBorderColorList}
                        hoverBackgroundColorList={barHoverBackgroundColorList}
                        hoverBorderColorList={barHoverBorderColorLIst}
                        unit={financialDataUnit}></BarChart>
                    <BarChart
                        title={'현금흐름표'}
                        labelList={cashflowNameList}
                        xdata={quarterPeriodList}
                        ydataList={cashflowList}
                        backgroundColorList={barBackgroundColorList}
                        borderColorList={barBorderColorList}
                        hoverBackgroundColorList={barHoverBackgroundColorList}
                        hoverBorderColorList={barHoverBorderColorLIst}
                        unit={financialDataUnit}></BarChart>
                    <BarChart
                        title={'배당금'}
                        labelList={dividendNameList}
                        xdata={quarterPeriodList}
                        ydataList={dividendList}
                        backgroundColorList={[colorGroup.lightGreen]}
                        borderColorList={[colorGroup.lightGreen]}
                        hoverBackgroundColorList={[colorGroup.hoverLightGreen]}
                        hoverBorderColorList={[colorGroup.hoverLightGreen]}
                        unit={dividendUnit}></BarChart> */}
                </div>
            </div>
            <BottomNavBar></BottomNavBar>
        </div>
    )
}

export default StockPage;