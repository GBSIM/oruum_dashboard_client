import './LeaderBox.css';
import ContentsAddButton from '../ContentsAddButton/ContentsAddButton';

export default function LeaderBox(props) {
    const LeaderContentsList = props.leaderContentsList.map((leaderContents,index) => 
        (<LeaderContents key={index} leaderContents={leaderContents}></LeaderContents>));

    return (
        <div>
            <h2 className='leader-name'>{props.leaderName}</h2>
            {LeaderContentsList}
            <ContentsAddButton buttonText='새로운 설명 추가하기'></ContentsAddButton>
        </div>
    )
}

function LeaderContents(props) {
    return (
        <div className='leader-contents-container'>
            <div className='leader-contents-icon-container'>
                <img src={require('./images/icon_detail.png')} className='leader-contents-icon'></img>
            </div>
            <button className='leader-contents'>
                {props.leaderContents}
            </button>
        </div>
    )
}