export default function IconMenu(props) {
    const activatedImage = props.activatedImage;
    const deactivatedImage = props.deactivatedImage;

    const menuName = props.menuName;

    const currentState = props.currentState;

    if (menuName === currentState) {
        return (
            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <img src={activatedImage} style={{width:'24px',height:'24px'}}></img>
                <span style={{color:'#333333',marginLeft:'16px'}}>{menuName}</span>
            </div>
        )
    } else {
        return (
            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <img src={deactivatedImage} style={{width:'24px',height:'24px'}}></img>
                <span style={{color:'#B9B9B9',marginLeft:'16px'}}>{menuName}</span>
            </div>
        )
    }
}