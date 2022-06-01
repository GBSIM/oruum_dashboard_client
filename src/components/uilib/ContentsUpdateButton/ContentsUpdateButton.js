import './ContentsUpdateButton.css';

export default function ContentsUpdateButton(props) {
    return (
        <button className='contents-update-button'>
            <span>{props.buttonText}</span>
        </button>
    )
}