import './RoundedImage.css';

export default function RoundedImage(props) {
    return (
        <div className='rounded-image-container'>
            <img 
                className='rounded-image' 
                style={{
                    width: props.width,
                    height: props.height
                }}
                src={props.image}
                alt='round'></img>
        </div>
    )
}