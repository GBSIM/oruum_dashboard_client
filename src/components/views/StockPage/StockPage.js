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
import Summary from "../../uilib/Summary/Summary";
import StockLogo from "../../uilib/Logo/StockLogo";
import BottomNavBar from "../../uilib/NavBar/BottomNavBar";

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
                            headerText={{name}.name+', 매수하자!'} 
                            checkPointList={checkListBuy}
                            image={require('./images/icon_up.png')}></CheckPointBox>
                        <CheckPointBox 
                            headerText={{name}.name+', 좀 더 생각해봐야...!?'} 
                            checkPointList={checkListSell}
                            image={require('./images/icon_down.png')}></CheckPointBox>
                    </div>
                    <div className="stock-page-horizontal-grey-line"></div>
                </div>
            </div>
            <BottomNavBar></BottomNavBar>
        </div>
    )
}

export default StockPage;