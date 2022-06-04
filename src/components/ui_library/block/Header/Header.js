import RoundedSearchInput from '../../unit/RoundedSearchInput/RoundedSearchInput';
import IconCircleButton from '../../unit/IconCircleButton/IconCircleButton';

import './Header.css';

export default function Header(props) {
    return (
        <div className='header-container'>
            <form className='header-search-form'>
                <RoundedSearchInput placeholderText='종목을 입력하세요!'></RoundedSearchInput>
                <div style={{minWidth:'10px'}}></div>
                <IconCircleButton></IconCircleButton>
            </form>
        </div>
    )
}