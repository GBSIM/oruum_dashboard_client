import { useState } from 'react';
import AddButton from '../../unit/AddButton/AddButton';
import Tags from '../Tags/Tags';

import './TagsWithButton.css';


export default function TagsWithButton(props) {
    const initialTagList = props.tagList;
    const buttonText = props.buttonText;

    const [tagList,setTagList] = useState(initialTagList);

    const tagAddEvent = (newTag) => {
        setTagList([...tagList,newTag]);
    }

    return (
        <div className='tags-container'>
            <Tags tagList = {tagList}></Tags>
            <AddButton buttonText={buttonText} tagAddEvent={tagAddEvent}></AddButton>
        </div>
    )
}