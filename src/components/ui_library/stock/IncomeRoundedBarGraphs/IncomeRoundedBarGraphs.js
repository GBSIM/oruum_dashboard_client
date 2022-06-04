import RoundedBarGraph from "../../block/RoundedBarGraph/RoundedBarGraph";
import { useSelector } from "react-redux";
import RoundedBar from "../../unit/RoundedBar/RoundedBar";
import VerticalBar from "../../unit/VerticalBar/VerticalBar";
import ContentsTitle from "../../unit/ContentsTitle/ContentsTitle";

import './IncomeRoundedBarGraphs.css';


export default function IncomeRoundedBarGraphs() {
    const {incomeYearList,revenueList,operatingincomeList,netProfitList,currency} = useSelector(state => state.stock);

    return (
        <div>
            <ContentsTitle title='매출과 영업이익은 성장하고 있나요?'></ContentsTitle>
            <div style={{minHeight:'10px'}}></div>
            <div className="income-rounded-bar-graphs-container">
                <RoundedBarGraph
                    title="매출"
                    unit={currency}
                    maxHeight={150}
                    periodList={incomeYearList}
                    valueList={revenueList}></RoundedBarGraph>
                <VerticalBar width='1px' horizontalMargin='20px' height='200px'></VerticalBar>
                <RoundedBarGraph
                    title="영업이익"
                    unit={currency}
                    maxHeight={150}
                    periodList={incomeYearList}
                    valueList={operatingincomeList}></RoundedBarGraph>
                <VerticalBar width='1px' horizontalMargin='20px' height='200px'></VerticalBar>
                <RoundedBarGraph
                    title="순이익"
                    unit={currency}
                    maxHeight={150}
                    periodList={netProfitList}
                    valueList={operatingincomeList}></RoundedBarGraph>
            </div>
        </div>
        
    )
}