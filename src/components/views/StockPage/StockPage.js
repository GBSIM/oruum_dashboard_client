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
import IndicatorBox from "../../uilib/IndicatorBox/IndicatorBox";
import ProductTable from "../../uilib/ProductTable/ProductTable";
import ProductDetailList from "../../uilib/ProductDetailList/ProductDetailList";
import BarChart from "../../uilib/Chart/BarChart";
import ContentsTitle from "../../uilib/ContentsTitle/ContentsTitle";
import ExpertOpniionTable from "../../uilib/ExpertOpinionTable/ExpertOpinionTable";
import TargetPriceBox from "../../uilib/TargetPriceBox/TargetPriceBox";

export default function StockPage() {
    const {name, ticker, currency, capability} = useSelector(state => state.stock);
    const {date, close, plotPeriod, 
           currentPrice, lastChange, lastChangeRate, lastChangeSign,
           lastOpen, lastHigh, lastLow, lastVolume,
           yearlyHigh, yearlyLow,fallingRatio } = useSelector(state => state.stock);
    const {tagList,checkListBuy, checkListSell,
           productList,productSalesRatioList,productGrowthList,productTagLists,productSummaryList,productDetailLists} = useSelector(state => state.stock);
    const {forwardPER, ttmPER, ttmPSR,
           currentGrossMargin,currentOperatingMargin,currentNetProfitMargin,
           ttmSalesGrowth,ttmOperatingIncomeGrowth,ttmNetProfitGrowth,
           currentDebtRatio,currentQuickRatio,currentCurrentRatio,
           ttmAssetTurnover,ttmInventoryTurnover,ttmReceivableTurnover} =  useSelector(state => state.stock);
    const {EPS,incomeYearList,revenueList,operatingincomeList,netProfitList} = useSelector(state=>state.stock);
    const {opinionList, opinionNumberList,targetPriceHigh,targetPriceAvg,targetPriceLow} = useSelector(state=>(state.stock));

    const summaryTitleList = ["시작가","최고가","최저가",
                              "거래량","f/w PER","시가총액",
                              "52주 최고","52주 최저","고점대비 하락률",
                              "주당순이익","PER(TTM)","PSR(TTM)"];
    const summaryValueList = [lastOpen, lastHigh, lastLow, 
                              lastVolume, forwardPER, capability, 
                              yearlyHigh, yearlyLow, fallingRatio,
                              EPS, ttmPER, ttmPSR];
    const marginTitleList = ["매출총이익률","영업이익률","순이익률"];
    const marginValueList = [currentGrossMargin,currentOperatingMargin,currentNetProfitMargin];
    const growthTitleList = ["매출액 성장률","영업이익 성장률","순이익 성장률"];
    const growthValueList = [ttmSalesGrowth,ttmOperatingIncomeGrowth,ttmNetProfitGrowth];
    const stabilityTitleList = ["부채비율","유동비율","당좌비율"];
    const stabilityValueList = [currentDebtRatio,currentQuickRatio,currentCurrentRatio];
    const activityTitleList = ["재고자산 회전율","매출채권 회전율","자산 회전율"];
    const activityValueList = [ttmInventoryTurnover,ttmReceivableTurnover,ttmAssetTurnover];

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
                    <div style={{'marginTop':'20px'}}>
                        <TagBox tagList={tagList}></TagBox>
                    </div>
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
                    <div className="stock-ratio-box-container-group">
                        <div className="stock-ratio-box-container">
                            <IndicatorBox
                                image={require('./images/icon_profit.png')}
                                title="수익성"
                                indicatorTitleList={marginTitleList}
                                indicatorValueList={marginValueList}></IndicatorBox>
                            <div className="stock-page-vertical-grey-line"></div>
                            <IndicatorBox
                                image={require('./images/icon_growth.png')}
                                title="성장성"
                                indicatorTitleList={growthTitleList}
                                indicatorValueList={growthValueList}></IndicatorBox>
                        </div>
                        <div className="stock-ratio-box-divider"></div>
                        <div className="stock-ratio-box-container">
                            <IndicatorBox
                                image={require('./images/icon_stability.png')}
                                title="안정성"
                                indicatorTitleList={stabilityTitleList}
                                indicatorValueList={stabilityValueList}></IndicatorBox>
                            <div className="stock-page-vertical-grey-line"></div>
                            <IndicatorBox
                                image={require('./images/icon_return.png')}
                                title="활동성"
                                indicatorTitleList={activityTitleList}
                                indicatorValueList={activityValueList}></IndicatorBox>
                        </div>
                    </div>
                    <div className="stock-page-horizontal-grey-line" style={{"marginTop":"0px"}}></div>
                    <div>
                        <ProductTable
                            title={{name}.name+', 어떤 제품을 파나요?'}
                            productList={productList}
                            salesRatioList={productSalesRatioList}
                            growthList={productGrowthList}
                            tagLists={productTagLists}></ProductTable>
                    </div>
                    <div style={{'marginTop':'30px'}}>
                        <ProductDetailList
                            title={{name}.name+'의 제품에 대해 자세히 알고 싶어요!'}
                            productList={productList}
                            productSummaryList={productSummaryList}
                            productDetailLists={productDetailLists}></ProductDetailList>
                    </div>
                    <div className="stock-page-horizontal-grey-line" style={{"marginTop":"0px"}}></div>
                    <div>
                        <div style={{'marginBottom':'0px'}}>
                            <ContentsTitle title='매출과 영업이익은 성장하고 있나요?'></ContentsTitle>
                        </div>
                        <div className="bar-chart-list-container">
                            <BarChart
                                barChartTitle='매출'
                                valueList={revenueList}
                                labelList={incomeYearList}
                                posColor={'#9AD8CD'}
                                negColor={'#F15E5E'}></BarChart>
                            <div className="stock-page-bar-chart-divider"></div>
                            <BarChart
                                barChartTitle='영업이익'
                                valueList={operatingincomeList}
                                labelList={incomeYearList}
                                posColor={'#34B199'}
                                negColor={'#F15E5E'}></BarChart>
                            <div className="stock-page-bar-chart-divider"></div>
                            <BarChart
                                barChartTitle='순이익'
                                valueList={netProfitList}
                                labelList={incomeYearList}
                                posColor={'#074B3F'}
                                negColor={'#F15E5E'}></BarChart>
                        </div>
                    </div>
                    <div className="stock-page-horizontal-grey-line" style={{"marginTop":"30px"}}></div>
                    <div>
                        <ContentsTitle title='증권사 전문가들은 어떻게 예측하고 있을까?'></ContentsTitle>
                    </div>
                    <div className="stock-page-expert-opinion-container">
                        <ExpertOpniionTable
                            opinionList={opinionList}
                            numberList={opinionNumberList}></ExpertOpniionTable>
                        <TargetPriceBox
                            currency={currency}
                            targetPriceHigh={targetPriceHigh}
                            targetPriceAvg={targetPriceAvg}
                            targetPriceLow={targetPriceLow}
                            currentPrice={currentPrice}></TargetPriceBox>
                    </div>
                    
                </div>
            </div>
            <BottomNavBar></BottomNavBar>
        </div>
    )
}