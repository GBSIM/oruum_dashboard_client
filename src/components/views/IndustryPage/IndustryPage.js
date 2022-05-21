import './IndustryPage.css';
import '../../../default.css';
import NavBar from "../../uilib/NavBar/NavBar";
import Header from "../../uilib/Header/Header";
import BottomNavBar from '../../uilib/NavBar/BottomNavBar';

function IndustryPage() {
    return (
        <div className='page'>
            <NavBar></NavBar>
            <div className="main">
                <Header></Header>
                <div className='main-contents'>
                    IndustryPage
                </div>
            </div>
            <BottomNavBar></BottomNavBar>
        </div>
    )
}

export default IndustryPage;