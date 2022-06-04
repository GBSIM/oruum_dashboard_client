import ContentsTitle from "../../unit/ContentsTitle/ContentsTitle"
import ExpertOpinions from "../ExpertOpinions/ExpertOpinions"

export default function ExpertExpectations() {
    return (
        <div>
            <ContentsTitle title='증권사 전문가들은 어떻게 예측하고 있을까?'></ContentsTitle>
            <div style={{minHeight:'10px'}}></div>
            <ExpertOpinions></ExpertOpinions>
        </div>
    )
}