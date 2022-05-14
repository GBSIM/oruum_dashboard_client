import ('../../../default.css');
import ('./Name.css');

export default function Name(props) {
    return (
        <div className='name-container'>
            <h1 className='name'>{props.name}</h1>
            <h1 className='subname'>{props.subname}</h1>
        </div>
    )  
}