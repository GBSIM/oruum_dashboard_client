import './HorizontalBar.css';

export default function HorizontalBar(props) {
    const height = props.height;
    const horizontalMargin = props.horizontalMargin;
    const verticalMargin = props.verticalMargin;

    return (
        <div className='horizontal-bar' 
             style={{
                 height:height,
                 marginTop:verticalMargin,
                 marginBottom:verticalMargin,
                 marginRight:horizontalMargin,
                 marginLeft:horizontalMargin,}}>
        </div>
    )
}