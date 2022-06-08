import { useDispatch } from "react-redux";
import { moveToDashboard, moveToStockPage, moveToEconomyPage, moveToIndustryPage, moveToPortfolioPage, moveToSimulationPage} from '../../../../_reducers/pager';
import { useNavigate } from 'react-router-dom';

import './IconMenu.css';

export default function IconMenu(props) {
    const activatedImage = props.activatedImage;
    const deactivatedImage = props.deactivatedImage;

    const menuName = props.menuName;

    const currentPage = props.currentPage;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const navtigatePage = () => {
    if (menuName === "주식 데이터") {
        dispatch(moveToStockPage());
        navigate('/Stock');
    } else if (menuName === "경제 데이터") {
        dispatch(moveToEconomyPage());
        navigate('/Economy');
    } else if (menuName === "산업 데이터") {
        dispatch(moveToIndustryPage());
        navigate('/Industry');
    } else if (menuName==="포트폴리오 관리") {
        dispatch(moveToPortfolioPage());
        navigate('/Portfolio');
    } else if (menuName==="시뮬레이션") {
        dispatch(moveToSimulationPage());
        navigate('/Simulation');
    }
    else {
        dispatch(moveToDashboard());
        navigate('/');
    }
    window.scrollTo(0,0);
    };

    if (menuName === currentPage) {
        return (
            <button className='icon-menu-container'>
                <img src={activatedImage} style={{width:'24px',height:'24px'}} alt={menuName}></img>
                <span className="icon-menu on">{menuName}</span>
            </button>
        )
    } else {
        return (
            <button className='icon-menu-container' onClick={navtigatePage}>
                <img src={deactivatedImage} style={{width:'24px',height:'24px'}} alt={menuName}></img>
                <span className="icon-menu off">{menuName}</span>
            </button>
        )
    }
}