import React,{useState} from 'react';
import './IconText.css';
import EditInput from '../EditInput/EditInput';

export default function IconText(props) {
    const [editFlag,setEditFlag] = useState(false);

    const addButtonClickEvent = () => {setEditFlag(true);};
    
    const editKeyDownEvent = (event) => {
        if (event.key === 'Escape') {
            setEditFlag(false);
        }
        if (event.key === 'Enter') {
            props.textEditEvent(event.target.value,props.order);
            setEditFlag(false);
        }
    }

    if (!editFlag) {
        return (
            <div className='icon-text-container'>
                <img src={props.image} alt='texticon'></img>
                <button className='icon-text-button' onClick={addButtonClickEvent}>
                    <span className='icon-text'>{props.text}</span>
                </button>
            </div>
        )
    } else {
        return (
            <div className='icon-text-container'>
                <img src={props.image} alt='texticon'></img>
                <div style={{marginLeft:'10px'}}></div>
                <EditInput keyDownEvent={editKeyDownEvent} width='500px' initialValue={props.text}></EditInput>
            </div>
        )
    }

    
}