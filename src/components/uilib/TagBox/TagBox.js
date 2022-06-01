import './TagBox.css';
import ContentsAddButton from '../ContentsAddButton/ContentsAddButton';

export default function TagBox(props) {
    const TagList = props.tagList.map((tag,index) => (<TagUnit key={index} tagName={tag}></TagUnit>));

    return (
        <div className='tag-box'>
            {TagList}
            <ContentsAddButton></ContentsAddButton>
        </div>
    )    
}

function TagUnit(props) {
    return (
        <button className='tag'>
            <span>{ props.tagName }</span>
        </button>
    )
}
