import './IndicatorBox.css';

export default function IndicatorBox(props) {
    const IndicatorList = props.indicatorValueList.map((indicatorValue,index) => 
                (<Indicator 
                    key={index} 
                    value={indicatorValue}
                    title={props.indicatorTitleList[index]}></Indicator>));

    return (
        <div className='indicator-box-container'>
            <IndicatorTitle title={props.title} image={props.image}></IndicatorTitle>
            {IndicatorList}
        </div>
    )
}

function IndicatorTitle(props) {
    return (
        <div className='indicator-box-title-container'>
            <div className='indicator-box-title-image-container'>
                <img className='indicator-box-title-image' src={props.image} alt='logo name'></img>
            </div>
            <h2 className='indicator-box-title'>{props.title}</h2>
        </div>
    )
}

function Indicator(props) {
    return (
        <div className="indicator-container">
            <div className="indicator-title">{props.title}</div>
            <h1 className="indicator-value">{props.value}%</h1>
        </div>
    )
}