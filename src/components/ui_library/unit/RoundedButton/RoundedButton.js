import './RoundedButton.css';

export default function RoundedButton(props) {
    const buttonText = props.buttonText;
    
    return (
        <button className='rounded-button'>
            <span>{buttonText}</span>
        </button>
    )
}