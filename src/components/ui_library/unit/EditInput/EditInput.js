import React,{useState} from 'react';
import './EditInput.css';

export default function EditInput(props) {
    const [editText,setEditText] = useState(props.initialValue);

    const onChangeEvent =(event) => {
        setEditText(event.target.value);
    }

    return (
        <form onSubmit={props.submitEvent}>
            <input className='edit-input' style={{maxWidth:props.width}} value={editText} onKeyDown={props.keyDownEvent} onChange={onChangeEvent}></input>
        </form>
    )
}