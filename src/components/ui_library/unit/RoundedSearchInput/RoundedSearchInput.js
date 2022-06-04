import './RoundedSearchInput.css';

export default function RoundedSearchInput(props) {
    const placeholderText = props.placeholderText;

    return (
        <div className='rounded-search-input-container'>
            <input className='rounded-search-input'  placeholder={placeholderText}></input>
        </div>
    )
}