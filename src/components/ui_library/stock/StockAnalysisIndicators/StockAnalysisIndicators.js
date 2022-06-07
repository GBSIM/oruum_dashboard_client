import FocusedValuesWithIconTitle from "../../block/FocusedValuesWithIconTitle/FocusedValuesWithIconTitle";
import VerticalBar from "../../unit/VerticalBar/VerticalBar";
import { useSelector } from "react-redux";

import './StockAnalysisIndicators.css';

export default function StockAnalysisIndicators() {
    const {currentGrossMargin, currentOperatingMargin, currentNetProfitMargin} = useSelector(state => state.stock);
    const {ttmSalesGrowth, ttmOperatingIncomeGrowth, ttmNetProfitGrowth} = useSelector(state => state.stock);
    const {currentDebtRatio, currentQuickRatio, currentCurrentRatio} = useSelector(state => state.stock);
    const {ttmAssetTurnover, ttmInventoryTurnover, ttmReceivableTurnover} = useSelector(state => state.stock);

    return (
        <div className='stock-analysis-indicators-container'>
            <div className='stock-analysis-indicators-container-line'>
                <FocusedValuesWithIconTitle
                image={require('./images/icon_profit.png')}
                title='수익성'
                focusedTitleList={['매출총이익률','영업이익률','순이익률']}
                focusedValueList={[currentGrossMargin,currentOperatingMargin,currentNetProfitMargin]}></FocusedValuesWithIconTitle>
                <VerticalBar height='200px' width='1px' horizontalMargin='20px'></VerticalBar>
                <FocusedValuesWithIconTitle
                image={require('./images/icon_growth.png')}
                title='성장성'
                focusedTitleList={['매출액 성장률','영업이익 성장률','순이익 성장률']}
                focusedValueList={[ttmSalesGrowth,ttmOperatingIncomeGrowth,ttmNetProfitGrowth]}></FocusedValuesWithIconTitle>
            </div>
            <div className="stock-analysis-indicators-vertical-bar">
                <VerticalBar height='200px' width='1px' horizontalMargin='20px'></VerticalBar>
            </div>
            <div className="stock-analysis-indicators-spacer"></div>
            <div className='stock-analysis-indicators-container-line'>
                <FocusedValuesWithIconTitle
                image={require('./images/icon_stability.png')}
                title='안정성'
                focusedTitleList={['부채비율','유동비율','당좌비율']}
                focusedValueList={[currentDebtRatio,currentQuickRatio,currentCurrentRatio]}></FocusedValuesWithIconTitle>
                <VerticalBar height='200px' width='1px' horizontalMargin='20px'></VerticalBar>
                <FocusedValuesWithIconTitle
                image={require('./images/icon_return.png')}
                title='활동성'
                focusedTitleList={['총자산 회전율','재고자산 회전율','매출채권 회전율']}
                focusedValueList={[ttmAssetTurnover,ttmInventoryTurnover,ttmReceivableTurnover]}></FocusedValuesWithIconTitle>
            </div>
        </div>
        
    )
}