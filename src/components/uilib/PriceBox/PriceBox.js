import './PriceBox.css'

export default function PriceBox(props) {
    const currency = props.currency;
    const currentPrice = props.currentPrice;
    const lastChange = props.lastChange;
    const lastChangeRate = props.lastChangeRate;
    const lastChangeSign = props.lastChangeSign;
    
    return (
        <div className='stock-price-group'>
            <Price priceCurrent={currentPrice}
                        currency={currency}></Price>
            <PriceChange priceChange={lastChange}
                              priceChangeRate={lastChangeRate} 
                              lastChangeSign={lastChangeSign}></PriceChange>
        </div>
    )
}

function Price(props) {
    return (
        <h1 className='stock-price'>{props.currency}{props.priceCurrent}</h1>
    )
}

function PriceChange(props) {
    if (props.lastChangeSign) {
        return (
            <h1 className='stock-price-change positive'>+{props.priceChange} (+{props.priceChangeRate}%)</h1>    
        )
    } else {
        return (
            <h1 className='stock-price-change negative'>{props.priceChange} ({props.priceChangeRate}%)</h1>    
        )
    }
}
