import './TagBox.css';

export default function TagBox(props) {
    const TagList = props.tagList.map((tag,index) => (<TagUnit key={index} tagName={tag}></TagUnit>));

    return (
        <div className='tag-box'>
            {TagList}
            <button className='tag-add-button'>
                +
            </button>
        </div>
    )    
}

function TagUnit(props) {
    return (
        <div className='tag'>
            { props.tagName }
        </div>
    )
}
