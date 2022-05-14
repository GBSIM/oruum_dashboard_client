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
    const { name } = useSelector(state => state.stock);
    const { ticker } = useSelector(state => state.stock);

    const { date } = useSelector(state => state.stock);
    const { close } = useSelector(state => state.stock);

    const { plotPeriod } = useSelector(state => state.stock);

    const { tagList } = useSelector(state => state.stock);

    const { currency } = useSelector(state => state.stock);
    const { currentPrice } = useSelector(state => state.stock);
    const { lastChange } = useSelector(state => state.stock);
    const { lastChangeRate } = useSelector(state => state.stock);
    const { lastChangeSign } = useSelector(state => state.stock);
    
    const { checkListBuy } = useSelector(state => state.stock);
    const { checkListSell } = useSelector(state => state.stock);

    const { financialDataUnit } = useSelector(state => state.stock);
    const { quarterPeriodList } = useSelector(state => state.stock);
    const { quarterRevenueList } = useSelector(state => state.stock);
    const { quarterGrossProfitList } = useSelector(state => state.stock);
    const { quarterOperatingIncomeList } = useSelector(state => state.stock);
    const { quarterNetIncomeList } = useSelector(state => state.stock);
    const incomeList = [quarterRevenueList,quarterGrossProfitList,quarterOperatingIncomeList,quarterNetIncomeList];
    const incomeHeaderList = ['총매출','매출 총이익','영업 이익','순이익'];

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
                            dataNameList={incomeHeaderList}
                            unit={financialDataUnit}></QuarterTalbe>
                </div>
            </div>
        </div>
    )
}

export default StockPage;