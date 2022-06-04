import { useSelector } from "react-redux";
import './PriceChange.css';

export default function PriceChange() {
    const {lastChange} = useSelector(state => state.stock);
    const {lastChangeRate} = useSelector(state => state.stock);
    const {lastChangeSign} = useSelector(state => state.stock);

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