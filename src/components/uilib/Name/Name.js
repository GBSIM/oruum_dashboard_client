import ('../../../default.css');
import ('./Name.css');

export default function Name(props) {
    return (
        <div className='name-container'>
            <div className='name-container'>
                <button className='name-update-button'>
                    <div className='name-update-text'>수정하기</div>
                    <h1 className='name'>{props.name}</h1>
                </button>
            </div>
            <h1 className='subname'>{props.subname}</h1>
        </div>
    )  
}