import './IconTitle.css';

export default function IconTitle(props) {
    const image = props.image;
    const title = props.title;

    return (
        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <div 
                style={{width:'30px',height:'30px',background:'#074B3F',display:'flex',flexDirection:'row',
                        justifyContent:'center',alignItems  :'center',padding:'5px',borderRadius:'10px'}}>
                <img src={image}></img>
            </div>
            <h2 style={{color:'#696969',marginBottom:'0px',marginLeft:'10px'}}>{title}</h2>
        </div>
    )
}