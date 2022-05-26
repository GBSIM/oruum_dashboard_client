import './ContentsTitle.css';

export default function ContentsTitle(props) {
    return (
        <div className='contents-title-container'>
            <h2 className='contents-title'>{props.title}</h2>
        </div>
    )
}