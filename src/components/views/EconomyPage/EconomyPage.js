import './EconomyPage.css';
import NavBar from "../../uilib/NavBar/NavBar";
import Header from "../../uilib/Header/Header";

function EconomyPage() {
    return (
        <div className='page'>
            <NavBar></NavBar>
            <div className="main">
                <Header></Header>
                <div className='stock-page'>
                    EconomyPage
                </div>
            </div>
        </div>
    )
}

export default EconomyPage;