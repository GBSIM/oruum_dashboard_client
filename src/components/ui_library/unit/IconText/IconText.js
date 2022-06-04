import './IconText.css';

export default function IconText(props) {
    return (
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:'10px'}}>
            <img src={props.image}></img>
            <span style={{color:'#696969',marginLeft:'10px'}}>{props.text}</span>
        </div>
    )
}