import './IconText.css';

export default function IconText(props) {
    return (
        <div className='icon-text-container'>
            <img src={props.image} alt='texticon'></img>
            <button className='icon-text-button'>
                <span className='icon-text'>{props.text}</span>
            </button>
        </div>
    )
}