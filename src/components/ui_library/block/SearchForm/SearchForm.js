import IconCircleButton from '../../unit/IconCircleButton/IconCircleButton';
import RoundedSearchInput from '../../unit/RoundedSearchInput/RoundedSearchInput';
import './SearchForm.css';

export default function SearchForm() {
    return (
        <form className='search-form'>
            <RoundedSearchInput placeholderText='종목을 입력하세요!'></RoundedSearchInput>
            <div style={{minWidth:'10px'}}></div>
            <IconCircleButton></IconCircleButton>
        </form>
    )
}