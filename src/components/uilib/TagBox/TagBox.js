import './TagBox.css';
import { useSelector, useDispatch } from "react-redux";

function TagBoxGroup() {
    const { tagList } = useSelector(state => state.stock);

    const tagboxList = tagList.map((tag,index) => (<TagBox key={index} tagName={tag}></TagBox>))

    return (
        <div className='tag-box-group'>
            {tagboxList}
        </div>
    )    
}

function TagBox(props) {
    return (
        <div className='tag-box'>
            { props.tagName }
        </div>
    )
}

export default TagBoxGroup;