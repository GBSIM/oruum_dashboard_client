import ContentsTitle from "../../unit/ContentsTitle/ContentsTitle";
import IconText from "../../unit/IconText/IconText";
import { useSelector } from "react-redux";
import AddButton from "../../unit/AddButton/AddButton";


export default function LeaderDetail() {
    const {leaderName,leaderContentsList} = useSelector(state => state.stock);

    const LeaderContentsList = leaderContentsList.map((leaderContents,index) => (
        <IconText
            image={require('./images/icon_detail.png')}
            text={leaderContents}
            key={index}></IconText>
    ));

    return (
        <div>
            <ContentsTitle title='CEO 정보'></ContentsTitle>
            <div style={{marginTop:'10px'}}></div>
            <h3 style={{margin:'0px',color:'#34B199'}}>{leaderName}</h3>
            {LeaderContentsList}
            <div style={{marginTop:'10px'}}></div>
            <AddButton buttonText='새로운 설명 추가하기'></AddButton>
        </div>
    )
}