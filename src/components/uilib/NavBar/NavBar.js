import './NavBar.css';
import Logo from '../Logo/Logo';
import NavMenu from './NavMenu';

function NavBar(props) {
    return (
        <div className="nav-bar">
            <div className="logo-container">
                <Logo containerHeight="60px" imageHeight="60px"></Logo>
            </div>
            <NavMenu marginTop="40px"></NavMenu>
        </div>
    )
}

export default NavBar;