import './IndustryPage.css';
import NavBar from "../../uilib/NavBar/NavBar";
import Header from "../../uilib/Header/Header";

function IndustryPage() {
    return (
        <div className='page'>
            <NavBar></NavBar>
            <div className="main">
                <Header></Header>
                <div className='stock-page'>
                    IndustryPage
                </div>
            </div>
        </div>
    )
}

export default IndustryPage;