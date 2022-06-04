import './VerticalBar.css';

export default function VerticalBar(props) {
    const width = props.width;
    const horizontalMargin = props.horizontalMargin;
    const height = props.height;

    return (
        <div className='vertical-bar' 
             style={{
                width:width,
                height:height,
                marginRight:horizontalMargin,
                marginLeft:horizontalMargin,}}>
        </div>
    )
}