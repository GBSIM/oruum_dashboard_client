import AddButton from '../../unit/AddButton/AddButton';
import Tags from '../Tags/Tags';

import './TagsWithButton.css';


export default function TagsWithButton(props) {
    const tagList = props.tagList;
    const buttonText = props.buttonText;

    return (
        <div className='tags-container'>
            <Tags tagList = {tagList}></Tags>
            <AddButton buttonText={buttonText} editInputSubmitEvent={props.editInputSubmitEvent} editInputChangeEvent={props.editInputChangeEvent}></AddButton>
        </div>
    )
}