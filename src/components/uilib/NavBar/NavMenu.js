import '../../../default.css';
import './NavMenu.css';
import { useSelector, useDispatch } from "react-redux";
import { moveToDashboard } from '../../../_reducers/pager';
import { moveToStockPage } from "../../../_reducers/pager";
import { moveToEconomyPage } from "../../../_reducers/pager";
import { moveToIndustryPage } from "../../../_reducers/pager";
import { useNavigate } from 'react-router-dom';

function NavMenu(props) {
    const { page } = useSelector(state => state.pager);

    return (
        <div className='nav-menu' style={{marginTop:props.marginTop}}>
            <NavMenuTitle titleName='데이터 둘러보기' ></NavMenuTitle>
            <Menu menuText="대쉬보드 홈"
                  menuName="Dashboard"
                  currentPage = { page }
                  onImage={require('./images/icon_home_on.png')} 
                  offImage={require('./images/icon_home_off.png')}
                  ></Menu>
            <Menu menuText="주식 데이터"
                  menuName="Stock"
                  currentPage = { page }
                  onImage={require('./images/icon_stock_on.png')} 
                  offImage={require('./images/icon_stock_off.png')}
                  ></Menu>
            <Menu menuText="경제 데이터"
                  menuName="Economy"
                  currentPage = { page }
                  onImage={require('./images/icon_economy_on.png')} 
                  offImage={require('./images/icon_economy_off.png')}
                  ></Menu>
            <Menu menuText="산업 데이터"
                  menuName="Industry"
                  currentPage = { page }
                  onImage={require('./images/icon_industry_on.png')} 
                  offImage={require('./images/icon_industry_off.png')}
                  ></Menu>
        </div>
    )
}

function NavMenuTitle(props) {
    return (
        <div className='nav-menu-title-container'>
            { props.titleName }
        </div>
    )
}

function Menu(props) {
    // dispatch를 사용하기 위한 준비
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const navtigateStock = () => {
    // store에 있는 state 바꾸는 함수 실행
    if (props.menuName === "Stock") {
        dispatch(moveToStockPage());
        navigate('/StockPage');
    } else if (props.menuName === "Economy") {
        dispatch(moveToEconomyPage());
        navigate('/EconomyPage');
    } else if (props.menuName === "Industry") {
        dispatch(moveToIndustryPage());
        navigate('/IndustryPage');
    } else {
        dispatch(moveToDashboard());
        navigate('/');
    }};

    const onImage = <img src={props.onImage} alt='on' className='menu-image-container'></img>
    const offImage = <img src={props.offImage} alt='off' className='menu-image-container'></img>

    if (props.currentPage === props.menuName) {
        return (
            <button className ='menu on' onClick={navtigateStock}>
                { onImage }
                <span className='menu-text'>
                    { props.menuText}
                </span>
            </button>
        )
    } else {
        return (
            <button className ='menu off' onClick={navtigateStock}>
                { offImage }
                <span className='menu-text'>
                    { props.menuText}
                </span>
            </button>
        )
    }
}

export default NavMenu;