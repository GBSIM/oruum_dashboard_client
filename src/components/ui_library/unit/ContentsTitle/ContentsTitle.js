import './ContentsTitle.css';

export default function ContentsTitle(props) {
    return (
        <div>
            <h2 style={{margin:'0px',color:'#333333'}}>{props.title}</h2>
        </div>
    )
}