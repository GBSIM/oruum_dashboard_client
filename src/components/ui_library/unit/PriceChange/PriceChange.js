import './PriceChange.css';

export default function PriceChange(props) {
    const lastChange = props.lastChange;
    const lastChangeRate = props.lastChangeRate;
    const lastChangeSign = props.lastChangeSign;

    if (lastChangeSign) {
        return (
            <div>
                <h2 className='price-change positive'>
                    +{lastChange} (+{lastChangeRate}%)
                </h2>
            </div>
        )
    }
    else {
        return (
            <div>
                <h2 className="price-change negative">
                    {lastChange} ({lastChangeRate}%)
                </h2>
            </div>
        )
    }
}