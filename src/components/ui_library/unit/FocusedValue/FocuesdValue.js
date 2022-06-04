import './FocusedValue.css';

export default function FocusedValue(props) {
    const title = props.title;
    const value = props.value;

    return (
        <div className='focused-value-container'>
            <span className='focuesd-value-title'>
                {title}
            </span>
            <h1 className='focused-value'>
                {value}
            </h1>
        </div>
    )
}