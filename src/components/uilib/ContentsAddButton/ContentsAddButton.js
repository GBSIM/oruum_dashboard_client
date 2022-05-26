import './ContentsAddButton.css';

export default function ContentsAddButton(props) {
    return (
        <div className='contents-add-button-container'>
            <button className='contents-add-button'>
                +
            </button>
            <button className='contents-add-text'>
                {props.buttonText}
            </button>
        </div>
    )
}