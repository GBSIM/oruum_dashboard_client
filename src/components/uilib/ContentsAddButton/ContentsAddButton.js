import './ContentsAddButton.css';

export default function ContentsAddButton(props) {
    return (
        <div className='contents-add-button-container'>
            <button className='contents-add-button'>
                +
            </button>
            <button className='contents-add-text'>
                <span>{props.buttonText}</span>
            </button>
        </div>
    )
}