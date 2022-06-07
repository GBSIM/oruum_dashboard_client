import './StockPage.css';
import '../../../default.css';
import BottomNavBar from "../../uilib/NavBar/BottomNavBar";
import SideNavMenuBar from '../../ui_library/block/SideNavMenuBar/SideNavMenuBar';
import Header from '../../ui_library/block/Header/Header';
import HorizontalBar from '../../ui_library/unit/HorizontalBar/HorizontalBar';

import StockPriceBlock from '../../ui_library/stock/StockPriceBlock/StockPriceBlock';
import StockTags from '../../ui_library/stock/StockTags/StockTags';
import StockPriceLineGraph from '../../ui_library/stock/StockPriceLineGraph/StockPriceLineGraph';
import StockBuyPoint from '../../ui_library/stock/StockBuyPoint/StockBuyPoint';
import StockSellPoint from '../../ui_library/stock/StockSellPoint/StockSellPoint';
import StockAnalysisIndicators from '../../ui_library/stock/StockAnalysisIndicators/StockAnalysisIndicators';
import ProductsTable from '../../ui_library/stock/ProductsTable/ProductsTable';
import ProductsDetail from '../../ui_library/stock/ProductsDetail/ProductsDetail';
import StockNews from '../../ui_library/stock/StockNews/StockNews';
import IncomeRoundedBarGraphs from '../../ui_library/stock/IncomeRoundedBarGraphs/IncomeRoundedBarGraphs';
import ExpertExpectations from '../../ui_library/stock/ExpertExpectations/ExpertExpectations';
import LeaderDetail from '../../ui_library/stock/LeaderDetail/LeaderDetail';

export default function StockPage() {
    return (
        <div className='page'>
            {/* <NavBar></NavBar> */}
            <SideNavMenuBar></SideNavMenuBar>
            <div className='main-contents'>
                <Header>
                </Header>
                <div className='page-contents'>
                    <StockPriceBlock></StockPriceBlock>
                    <div style={{minHeight:'10px'}}></div>
                    <StockTags></StockTags>            
                    <StockPriceLineGraph></StockPriceLineGraph>
                    <div style={{minHeight:'30px'}}></div>
                    <div className='stock-page-check-point-container'>
                        <StockBuyPoint></StockBuyPoint>
                        <div className='stock-page-check-point-spacer'></div>
                        <StockSellPoint></StockSellPoint>
                    </div>
                    <HorizontalBar height='1px' horizontalMargin='0px' verticalMargin='30px'></HorizontalBar>
                    <StockAnalysisIndicators></StockAnalysisIndicators>
                    <HorizontalBar height='1px' horizontalMargin='0px' verticalMargin='30px'></HorizontalBar>
                    <ProductsTable></ProductsTable>
                    <HorizontalBar height='1px' horizontalMargin='0px' verticalMargin='30px'></HorizontalBar>
                    <ProductsDetail></ProductsDetail>
                    <HorizontalBar height='1px' horizontalMargin='0px' verticalMargin='30px'></HorizontalBar>
                    <StockNews></StockNews>
                    <HorizontalBar height='1px' horizontalMargin='0px' verticalMargin='30px'></HorizontalBar>
                    <IncomeRoundedBarGraphs></IncomeRoundedBarGraphs>
                    <HorizontalBar height='1px' horizontalMargin='0px' verticalMargin='30px'></HorizontalBar>
                    <ExpertExpectations></ExpertExpectations>
                    <HorizontalBar height='1px' horizontalMargin='0px' verticalMargin='30px'></HorizontalBar>
                    <LeaderDetail></LeaderDetail>
                </div>
            </div>
            <BottomNavBar></BottomNavBar>
            
            
        </div>
    )
}