import './BottomNavBar.css';
import { Menu } from './NavMenu';
import { useSelector, useDispatch } from "react-redux";

export default function BottomNavBar() {
    const { page } = useSelector(state => state.pager);

    return (
        <div className='bottom-nav-container'>
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
            <Menu menuText="포트폴리오 관리"
                  menuName="Portfolio"
                  currentPage = { page }
                  onImage={require('./images/icon_portfolio_on.png')} 
                  offImage={require('./images/icon_portfolio_off.png')}
                  ></Menu>
        </div>
    )
}