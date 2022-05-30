import './ContentsUpdateButton.css';

export default function ContentsUpdateButton(props) {
    return (
        <button className='contents-update-button'>
            {props.buttonText}
        </button>
    )
}