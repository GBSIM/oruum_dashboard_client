import { useSelector } from "react-redux";

import './StockPage.css';
import NavBar from "../../uilib/NavBar/NavBar";
import Header from "../../uilib/Header/Header";
import Name from "../../uilib/Name/Name";
import TagBox from "../../uilib/TagBox/TagBox";
import PriceBox from "../../uilib/PriceBox/PriceBox";
import LineChart from '../../uilib/Chart/LineChart';
import CheckPointBox from "../../uilib/CheckPointBox/CheckPointBox";
import QuarterTalbe from "../../uilib/QuarterTable/QuarterTable";

function StockPage() {
    const { name, ticker } = useSelector(state => state.stock);

    const { date, close } = useSelector(state => state.stock);

    const { plotPeriod, tagList} = useSelector(state => state.stock);

    const { currency, currentPrice, lastChange, lastChangeRate, lastChangeSign } = useSelector(state => state.stock);
    
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

    return (
        <div className='page'>
            <NavBar></NavBar>
            <div className='main-content'>
                <Header>
                </Header>
                <div className='stock-page'>
                    <Name name={ name } subname={ ticker }></Name>
                    <TagBox tagList={tagList}></TagBox>
                    <PriceBox currency = {currency}
                              currentPrice={currentPrice}
                              lastChange={lastChange}
                              lastChangeRate={lastChangeRate}
                              lastChangeSign={lastChangeSign}></PriceBox>
                    <LineChart 
                        periodNameList={["1일","1주","1달","3달","6달","1년","2년","5년","10년","최대"]} 
                        periodState={plotPeriod}
                        xdata={{date}.date}
                        ydata={{close}.close}></LineChart>
                    <div style={{"display":"flex","flexDirection":"row"}}>
                        <CheckPointBox 
                            headerText={{ticker}.ticker+', 매수하자!'} 
                            checkPointList={checkListBuy}
                            image={require('./images/icon_up.png')}></CheckPointBox>
                        <CheckPointBox 
                            headerText={{ticker}.ticker+', 좀 더 생각해봐야...!?'} 
                            checkPointList={checkListSell}
                            image={require('./images/icon_down.png')}></CheckPointBox>
                    </div>
                    <QuarterTalbe 
                            title='손익계산서'
                            periodList={quarterPeriodList}
                            dataLists={incomeList} 
                            dataNameList={incomeNameList}
                            unit={financialDataUnit}></QuarterTalbe>
                    <QuarterTalbe 
                            title='대차대조표'
                            periodList={quarterPeriodList}
                            dataLists={balanceList} 
                            dataNameList={balanceNameList}
                            unit={financialDataUnit}></QuarterTalbe>
                    <QuarterTalbe 
                            title='현금흐름표'
                            periodList={quarterPeriodList}
                            dataLists={cashflowList} 
                            dataNameList={cashflowNameList}
                            unit={financialDataUnit}></QuarterTalbe>
                </div>
            </div>
        </div>
    )
}

export default StockPage;