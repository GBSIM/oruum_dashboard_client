import './News.css';
import RoundedImage from '../RoundedImage/RoundedImage';
import VerticalBar from '../VerticalBar/VerticalBar';

export default function News(props) {
    const imageUrl = props.imageUrl;
    const title = props.title;
    const summary = props.summary;
    const journal = props.journal;
    const date = props.date;
    const link = props.link;

    return (
        <div style={{marginTop:'20px'}}>
            <div style={{height:'1px',width:'200px',background:'#DCDCDC'}}></div>
            <a add target="_blank" 
               href={link}
               className='news-container' 
               style={{display:'flex',flexDirection:'row',marginTop:'20px',alignContent:'center'}}>
                <div className='news-image-container'>
                    <RoundedImage
                        height='100px'
                        width='100px'
                        image={imageUrl}></RoundedImage>
                </div>
                <div className='news-text-container'>
                    <h2 style={{color:'#34B199',margin:'0px'}}>{title}</h2>
                    <div style={{marginTop:'10px'}}>
                        <span style={{color:'#696969',marginTop:'10px'}}>{summary}</span>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',alignContent:'center',marginTop:'10px'}}>
                        <span style={{color:'#B9B9B9'}}>{journal}</span>
                        <VerticalBar width='2px' height='20px' horizontalMargin='10px'></VerticalBar>
                        <span style={{color:'#B9B9B9'}}>{date}</span>
                    </div>
                </div>
            </a>
        </div>
    )
}