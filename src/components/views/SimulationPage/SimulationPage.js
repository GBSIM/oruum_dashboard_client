import './SimulationPage.css';
import '../../../default.css';
import NavBar from "../../uilib/NavBar/NavBar";
import Header from "../../uilib/Header/Header";
import BottomNavBar from '../../uilib/NavBar/BottomNavBar';

export default function SimulationPage() {
    return (
        <div className='page'>
            <NavBar></NavBar>
            <div className="main">
                <Header>
                </Header>
                <div className='main-contents'>
                    Simulation page
                </div>
            </div>
            <BottomNavBar></BottomNavBar>
        </div>
    )
}
