import './IndustryPage.css';
import '../../../default.css';
import SideNavMenuBar from '../../ui_library/block/SideNavMenuBar/SideNavMenuBar';
import BottomNavMenuBar from '../../ui_library/block/BottomNavMenuBar/BottomNavMenuBar';
import Header from '../../ui_library/block/Header/Header';

function IndustryPage() {
    return (
        <div className='page'>
            <SideNavMenuBar></SideNavMenuBar>
            <div className="main-contents">
                <Header>
                </Header>
                <div className='page-contents'>
                    
                </div>
            </div>
            <BottomNavMenuBar></BottomNavMenuBar>
        </div>
    )
}

export default IndustryPage;