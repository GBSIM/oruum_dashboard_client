import { useSelector, useDispatch } from "react-redux";

import './StockCheckPoint.css';

export default function StockCheckPoint() {
    return (
        <div className="stock-check-point-box">
            <StockCheckPointBuy></StockCheckPointBuy>
            <StockCheckPointSell></StockCheckPointSell>
        </div>
    )
}

function StockCheckPointBuy() {
    const { ticker } = useSelector(state => state.stock);
    const { checkListBuy } = useSelector(state => state.stock);

    const checkPointTextList = checkListBuy.map((checkPointBuy,index) => (<StockCheckPointText key={index} image={require('./images/icon_up.png')} textCheckPoint={checkPointBuy}></StockCheckPointText>))

    return (
        <div className='stock-check-point-group'>
            <StockCheckPointHeader headerText={{ticker}.ticker+', 매수하자!'}></StockCheckPointHeader>
            {checkPointTextList}
        </div>
    )
}

function StockCheckPointSell() {
    const { ticker } = useSelector(state => state.stock);
    const { checkListSell } = useSelector(state => state.stock);

    const checkPointTextList = checkListSell.map((checkPointBuy,index) => (<StockCheckPointText key={index} image={require('./images/icon_down.png')} textCheckPoint={checkPointBuy}></StockCheckPointText>))

    return (
        <div className='stock-check-point-group'>
            <StockCheckPointHeader headerText={{ticker}.ticker+', 좀 더 고민해봐야...!?'}></StockCheckPointHeader>
            {checkPointTextList}
        </div>
    )
}

function StockCheckPointHeader(props) {
    return(
        <h2 className="stock-check-point-header">
            {props.headerText}
        </h2>
    )
}

function StockCheckPointText(props) {
    return (
        <div className="stock-check-point-container">
            <img className='stock-check-point-image' src={props.image} alt='check'></img>
            <span className='stock-check-point-text'>{props.textCheckPoint}</span>
        </div>
    )
}