import React,{useState} from 'react';
import './AddButton.css';
import EditInput from '../EditInput/EditInput';

export default function AddButton(props) {
    const buttonText = props.buttonText;

    const [editFlag,setEditFlag] = useState(false);

    const addButtonClickEvent = () => {setEditFlag(true);};
    
    const editKeyDownEvent =(event) => {
        if (event.key === 'Escape') {
            setEditFlag(false);
        }
    }

    if (!editFlag) {
        return (
            <div className='add-button-container' onClick={addButtonClickEvent}>
                <button className='add-button'>
                    <div className='add-button-icon'></div>
                    <span className='add-button-text'>{buttonText}</span>
                </button>
            </div>
        )
    } else {
        return (
            <EditInput submitEvent={props.editInputSubmitEvent} keyDownEvent={editKeyDownEvent} editInputChangeEvent={props.editInputChangeEvent}></EditInput>
        )
    }

    
}   