import SearchForm from '../SearchForm/SearchForm';

import './Header.css';

export default function Header(props) {
    return (
        <div className='header-container'>
            <img src={require('./images/image_oruum_logo.png')} className='header-logo-image'></img>
            <div className='header-search-form-container'>
                <SearchForm></SearchForm>
            </div>
        </div>
    )
}