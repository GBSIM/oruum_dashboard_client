import { useSelector } from "react-redux";

import IconMenu from '../../unit/IconMenu/IconMenu';

import './BottomNavMenuBar.css';

export default function BottomNavMenuBar() {
    const {page} = useSelector(state => state.pager);

    return (
        <div className='bottom-nav-menu-bar-container'>
            <IconMenu
                activatedImage={require('./images/icon_home_on.png')}
                deactivatedImage={require('./images/icon_home_off.png')}
                menuName='대쉬보드 홈'
                currentPage = {page}></IconMenu>
            <IconMenu
                activatedImage={require('./images/icon_stock_on.png')}
                deactivatedImage={require('./images/icon_stock_off.png')}
                menuName='주식 데이터'
                currentPage = {page}></IconMenu>
            <IconMenu
                activatedImage={require('./images/icon_economy_on.png')}
                deactivatedImage={require('./images/icon_economy_off.png')}
                menuName='경제 데이터'
                currentPage = {page}></IconMenu>
            <IconMenu
                activatedImage={require('./images/icon_industry_on.png')}
                deactivatedImage={require('./images/icon_industry_off.png')}
                menuName='산업 데이터'
                currentPage = {page}></IconMenu>
            <IconMenu
                activatedImage={require('./images/icon_portfolio_on.png')}
                deactivatedImage={require('./images/icon_portfolio_off.png')}
                menuName='포트폴리오 관리'
                currentPage = {page}></IconMenu>
        </div>
    )
}