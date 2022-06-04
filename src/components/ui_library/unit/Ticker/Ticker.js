import { useSelector } from "react-redux";
import './Ticker.css';

export default function Ticker() {
    const {ticker} = useSelector(state => state.stock);

    return (
        <div>
            <h2 className='ticker'>
                {ticker}
            </h2>        
        </div>
    )
}