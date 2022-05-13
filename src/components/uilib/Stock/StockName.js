import { useSelector, useDispatch } from "react-redux";

import ('../../../default.css');
import ('./StockName.css');

function StockName() {
    const { ticker } = useSelector(state => state.stock);

    return (
        <div className='stock-name-container'>
            <h1 className='stock-name'>회사이름</h1>
            <h1 className='stock-ticker'>{ ticker }</h1>
        </div>
    )  
}

export default StockName;