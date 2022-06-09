import ContentsTitle from "../../unit/ContentsTitle/ContentsTitle";
import ExpertOpinions from "../ExpertOpinions/ExpertOpinions";
import ExpertTargetPrices from "../ExpertTargetPrices/ExpertTargetPrices";
import './ExpertExpectations.css';

export default function ExpertExpectations() {
    return (
        <div>
            <ContentsTitle title='증권사 전문가들은 어떻게 예측하고 있을까?'></ContentsTitle>
            <div style={{minHeight:'10px'}}></div>
            <div className='expert-expectations-container'>
                <ExpertOpinions></ExpertOpinions>
                <div style={{minHeight:'40px'}}></div>
                <ExpertTargetPrices></ExpertTargetPrices>
                <div style={{minHeight:'40px'}}></div>
            </div>
        </div>
    )
}