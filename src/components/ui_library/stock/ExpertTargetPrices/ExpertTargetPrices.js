import './ExpertTargetPrices.css';
import { useSelector } from "react-redux";
import VerticalBar from '../../unit/VerticalBar/VerticalBar';

export default function ExpertTargetPrices() {
    const {currentPrice,targetPriceHigh,targetPriceAvg,targetPriceLow,currency} = useSelector(state => state.stock);

    const targetPriceHighMargin = ((targetPriceHigh - currentPrice) / currentPrice * 100).toFixed(2);
    const targetPriceAvgMargin = ((targetPriceAvg - currentPrice) / currentPrice * 100).toFixed(2);
    const targetPriceLowMargin = ((targetPriceLow - currentPrice) / currentPrice * 100).toFixed(2);

    return (
        <div className='expert-target-prices-container'>
            <div style={{position:'relative'}}>
                <div style={{position:'absolute',top:'80px',left:'3px',display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <div style={{background:'#F8F8F8',width:'100px',height:'2px',marginTop:'13px'}}></div>
                    <div style={{minWidth:'10px'}}></div>
                    <CurrentPrice title='현재가' currency={currency} color='#696969' targetPrice={currentPrice}></CurrentPrice>
                </div>
                <VerticalBar width='4px' horizontalMargin='0px' height='200px'></VerticalBar>
                <div style={{position:'absolute',top:'-18px',left:'-218px',display:'flex',flexDirection:'row'}}>
                    <TargetPrice title='최고목표가' currency={currency} color='#34B199' targetPrice={targetPriceHigh}></TargetPrice>
                    <div style={{minWidth:'10px'}}></div>
                    <RoundBallWithValueMargin color='#34B199' valueMargin={targetPriceHighMargin}></RoundBallWithValueMargin>
                </div>
                <div style={{position:'absolute',top:'82px',left:'-218px',display:'flex',flexDirection:'row'}}>
                    <TargetPrice title='평균목표가' currency={currency} color='#EBB00C' targetPrice={targetPriceAvg}></TargetPrice>
                    <div style={{minWidth:'10px'}}></div>
                    <RoundBallWithValueMargin color='#EBB00C' valueMargin={targetPriceAvgMargin}></RoundBallWithValueMargin>
                </div>
                <div style={{position:'absolute',top:'182px',left:'-218px',display:'flex',flexDirection:'row'}}>
                    <TargetPrice title='최저목표가' currency={currency} color='#F15E5E' targetPrice={targetPriceLow}></TargetPrice>
                    <div style={{minWidth:'10px'}}></div>
                    <RoundBallWithValueMargin color='#F15E5E' valueMargin={targetPriceLowMargin}></RoundBallWithValueMargin>
                </div>
            </div>
        </div>
    )
}

function CurrentPrice(props) {
    return (
        <div className='current-price-container'>
            <span className='target-price-title'>{props.title}</span>
            <div className="target-price" style={{color:props.color}}>{props.currency}{props.targetPrice}</div>
        </div>
    )
}

function TargetPrice(props) {
    return (
        <div className='target-price-container'>
            <span className='target-price-title'>{props.title}</span>
            <div className="target-price" style={{color:props.color}}>{props.currency}{props.targetPrice}</div>
        </div>
    )
}

function RoundBallWithValueMargin(props) {
    let valueMarginText;
    if (props.valueMargin >= 0) {
        valueMarginText = "+" + String(props.valueMargin);
    } else {
        valueMarginText = props.valueMargin;
    }

    return (
        <div className='round-ball-with-value-margin-container'>
            <div className='round-ball' style={{background:props.color}}>
            </div>
            <span style={{color:props.color}}>{valueMarginText}%</span>
        </div>
    )
}