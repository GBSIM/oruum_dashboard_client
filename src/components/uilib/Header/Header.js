import './Header.css';
import Search from '../Search/Search';
import AccountButton from '../Account/AccountButton';
import AccountProfile from '../Account/AccountProfile';

function Header() {
    return (
        <div className="header">
            <Search></Search>
            <div style={{flexGrow:"1"}}></div>
            {/* <AccountProfile></AccountProfile>
            <AccountButton></AccountButton> */}
        </div>
    )
}

export default Header;