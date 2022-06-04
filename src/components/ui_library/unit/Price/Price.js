import { useSelector } from "react-redux";
import './Price.css';

export default function Price() {
    const {currentPrice} = useSelector(state => state.stock);

    return (
        <div>
            <h2 className="price">
                {currentPrice}
            </h2>
        </div>
    )
}