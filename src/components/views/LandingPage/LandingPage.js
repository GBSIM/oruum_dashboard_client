import './LandingPage.css';
import '../../../default.css';
import SideNavMenuBar from '../../ui_library/block/SideNavMenuBar/SideNavMenuBar';
import Header from '../../ui_library/block/Header/Header';
import BottomNavBar from '../../uilib/NavBar/BottomNavBar';

function LandingPage() {
    return (
        <div className='page'>
            <SideNavMenuBar></SideNavMenuBar>
            <div className="main-contents">
                <Header>
                </Header>
                <div className='page-contents'>
                    
                </div>
            </div>
            <BottomNavBar></BottomNavBar>
        </div>
    )
}

export default LandingPage;