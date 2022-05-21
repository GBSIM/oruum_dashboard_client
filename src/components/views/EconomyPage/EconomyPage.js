import './EconomyPage.css';
import '../../../default.css';
import NavBar from "../../uilib/NavBar/NavBar";
import Header from "../../uilib/Header/Header";
import BottomNavBar from '../../uilib/NavBar/BottomNavBar';

function EconomyPage() {
    return (
        <div className='page'>
            <NavBar></NavBar>
            <div className="main">
                <Header></Header>
                <div className='main-contents'>
                    EconomyPage
                </div>
            </div>
            <BottomNavBar></BottomNavBar>
        </div>
    )
}

export default EconomyPage;