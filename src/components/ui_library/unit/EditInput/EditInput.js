import './EditInput.css';

export default function EditInput(props) {
    return (
        <form onSubmit={props.submitEvent}>
            <input className='edit-input' onKeyDown={props.keyDownEvent} onChange={props.editInputChangeEvent}></input>
        </form>
    )
}