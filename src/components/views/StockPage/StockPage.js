import './StockPage.css';
import NavBar from "../../uilib/NavBar/NavBar";
import Header from "../../uilib/Header/Header";
import StockName from '../../uilib/Stock/StockName';
import TagBoxGroup from '../../uilib/TagBox/TagBox';
import StockPriceGroup from '../../uilib/Stock/StockPrice';
import LineChart from '../../uilib/Chart/LineChart';
import StockCheckPoint from '../../uilib/Stock/StockCheckPoint';
import StockFinance from '../../uilib/Stock/StockFinance';

function StockPage() {
    return (
        <div className='page'>
            <NavBar></NavBar>
            <div className='main-content'>
                <Header>
                </Header>
                <div className='stock-page'>
                    <StockName></StockName>
                    <TagBoxGroup></TagBoxGroup>
                    <StockPriceGroup></StockPriceGroup>
                    <LineChart></LineChart>
                    <StockCheckPoint></StockCheckPoint>
                    <StockFinance headerText='손익계산서'></StockFinance>
                    
                </div>
            </div>
        </div>
    )
}

export default StockPage;