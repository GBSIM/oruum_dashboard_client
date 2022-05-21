import '../../../default.css';
import './Search.css';

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getPrice } from '../../../_reducers/stock';
import { setStatus } from '../../../_reducers/stock';
import { moveToStockPage } from "../../../_reducers/pager";
import { setInput } from '../../../_reducers/stock';
import { getCurrentDate, getPastDate} from '../../fnclib/DateProcessing';

function Search(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { input } = useSelector(state => state.stock);
    const { status } = useSelector(state => state.stock);

    const searchStock = (event) => {
        event.preventDefault();
        dispatch(moveToStockPage());
        navigate('/Stock');
        dispatch(setStatus({ input }.input+'의 데이터를 찾고 있어요. 잠시만 기다려주세요!'));
        dispatch(getPrice({ input }.input,getPastDate(5),getCurrentDate()));
    };

    const typeTicker = (event) => {
        dispatch(setInput(event.currentTarget.value.toUpperCase()))
    }

    return (
        <form className='search-container' onSubmit={searchStock}>
            <input type='text' placeholder='종목을 입력하세요!' className='search-input' onChange={typeTicker}></input>
            <button type='button' className='search-button' onClick={searchStock}>
                <img src={require('./images/icon_search.png')} className='search-button-image'></img>
            </button>
            <span className='search-result'>
                { status }
            </span>
        </form>
    )
}

export default Search;