import './AddButton.css';

export default function AddButton(props) {
    const buttonText = props.buttonText;

    return (
        <div className='add-button-container'>
            <button className='add-button'>
                <div className='add-button-icon'></div>
                <span className='add-button-text'>{buttonText}</span>
            </button>
        </div>
    )
}   