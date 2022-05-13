import './StockPrice.css'
import { useSelector, useDispatch } from "react-redux";

function StockPriceGroup() {
    const { currency } = useSelector(state => state.stock);
    const { currentPrice } = useSelector(state => state.stock);
    const { lastChange } = useSelector(state => state.stock);
    const { lastChangeRate } = useSelector(state => state.stock);
    const { lastChangeSign } = useSelector(state => state.stock);

    return (
        <div className='stock-price-group'>
            <StockPrice priceCurrent= {currentPrice} 
                        currency={currency}></StockPrice>
            <StockPriceChange priceChange={lastChange}
                              priceChangeRate={lastChangeRate} 
                              lastChangeSign={lastChangeSign}></StockPriceChange>
        </div>
    )
}

function StockPrice(props) {
    return (
        <h1 className='stock-price'>{props.currency}{props.priceCurrent}</h1>
    )
}

function StockPriceChange(props) {
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

export default StockPriceGroup;