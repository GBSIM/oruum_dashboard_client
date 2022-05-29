import './TargetPriceBox.css';

export default function TargetPriceBox(props) {
    const targetPriceHigh = props.targetPriceHigh;
    const targetPriceAvg = props.targetPriceAvg;
    const targetPriceLow = props.targetPriceLow;
    const currentPrice = Number(props.currentPrice);
    const currency = props.currency;

    let marginToHighTarget = ((targetPriceHigh - currentPrice)/currentPrice*100).toFixed(0);
    if (marginToHighTarget > 0) {
        marginToHighTarget = '+' + marginToHighTarget.toString();
    }
    let marginToAvgTarget = ((targetPriceAvg - currentPrice)/currentPrice*100).toFixed(0);
    if (marginToAvgTarget > 0) {
        marginToAvgTarget = '+' + marginToAvgTarget.toString();
    }
    let marginToLowTarget = ((targetPriceLow - currentPrice)/currentPrice*100).toFixed(0);
    if (marginToLowTarget > 0) {
        marginToLowTarget = '+' + marginToLowTarget.toString();
    }

    let currentPricePosition;

    if (currentPrice > targetPriceHigh) {
        currentPricePosition = '-180px';
    } else if (currentPrice === targetPriceHigh) {
        currentPricePosition = '-145px';
    } else if (currentPrice > targetPriceAvg) {
        currentPricePosition = '-100px';
    } else if (currentPrice === targetPriceAvg) {
        currentPricePosition = '-40px';
    } else if (currentPrice > targetPriceLow) {
        currentPricePosition = '10px';
    } else if (currentPrice === targetPriceLow) {
        currentPricePosition = '50px';
    } else {
        currentPricePosition = '80px';
    }

    return (
        <div className='target-price-box-container'>
            <div className='target-price-list'>
                <TargetPrice title='최고목표가' value={currency + targetPriceHigh.toFixed(1).toString()} topPosition='20px' color='#34B199'></TargetPrice>
                <TargetPrice title='평균목표가' value={currency + targetPriceAvg.toFixed(1).toString()} topPosition='75px' color='#EBB00C'></TargetPrice>
                <TargetPrice title='최저목표가' value={currency + targetPriceLow.toFixed(1).toString()} topPosition='120px' color='#F15E5E'></TargetPrice>
            </div>
            <div className='target-price-box-vertical-line'>
                <div className='target-price-circle' style={{'top':'20px','background':'#34B199'}}></div>
                <div className='target-price-margin' style={{'top':'-6px','color':'#34B199'}}>{marginToHighTarget}%</div>
                <div className='target-price-circle' style={{'top':'73px','background':'#EBB00C'}}></div>
                <div className='target-price-margin' style={{'top':'47px','color':'#EBB00C'}}>{marginToAvgTarget}%</div>
                <div className='target-price-circle' style={{'top':'116px','background':'#F15E5E'}}></div>
                <div className='target-price-margin' style={{'top':'90px','color':'#F15E5E'}}>{marginToLowTarget}%</div>

                <div className='current-price-container' style={{'top': currentPricePosition}}>
                    <div className='current-price-line'></div>
                    <CurrentPrice title='현재가' value={currency + currentPrice.toFixed(1).toString()}></CurrentPrice>
                </div>
            </div>
        </div>
    )
}

function CurrentPrice(props) {
    return (
        <div className="target-price-container" style={{'top':props.topPosition,'marginBottom':'20px','marginLeft':'10px'}}>
            <div className="target-price-title">{props.title}</div>
            <h1 className="target-price-value" style={{'color':'#696969'}}>{props.value}</h1>
        </div>
    )
}

function TargetPrice(props) {
    return (
        <div className="target-price-container" style={{'top':props.topPosition}}>
            <div className="target-price-title">{props.title}</div>
            <h1 className="target-price-value" style={{'color':props.color}}>{props.value}</h1>
        </div>
    )
}