import './PortfolioPage.css';
import '../../../default.css';
import NavBar from "../../uilib/NavBar/NavBar";
import Header from "../../uilib/Header/Header";
import BottomNavBar from '../../uilib/NavBar/BottomNavBar';

export default function PortfolioPage() {
    return (
        <div className='page'>
            <NavBar></NavBar>
            <div className="main">
                <Header></Header>
                <div className='main-contents'>
                    Portfolio page
                </div>
            </div>
            <BottomNavBar></BottomNavBar>
        </div>
    )
}
