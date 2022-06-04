import { useSelector } from "react-redux";
import './Name.css';

export default function Name() {
    const {name} = useSelector(state => state.stock);

    return (
        <div>
            <button className="name-button">
                <h2 className="name">
                    {name}
                </h2>
            </button>
        </div>
    )
}