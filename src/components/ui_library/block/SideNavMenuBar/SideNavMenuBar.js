import { useSelector } from "react-redux";

import IconMenu from '../../unit/IconMenu/IconMenu';
import HorizontalBar from "../../unit/HorizontalBar/HorizontalBar";

import './SideNavMenuBar.css';

export default function SideNavMenuBar() {
    const {page} = useSelector(state => state.pager);

    return (
        <div className='side-nav-menu-bar-container'>
            <div style={{display:'flex',flexDirection:'row',
                         alignItems:'center',justifyContent:'center',marginTop:'10px'}}>
                <img style={{height:'50px'}} src={require('./images/image_oruum_investment_manager.png')} alt={'oruum'}></img>
            </div>
            <div style={{paddingLeft:'40px',marginTop:'60px'}}>
                <IconMenu
                    activatedImage={require('./images/icon_home_on.png')}
                    deactivatedImage={require('./images/icon_home_off.png')}
                    menuName='대쉬보드 홈'
                    currentPage = {page}></IconMenu>
            </div>
            <HorizontalBar height='1px' verticalMargin='20px' horizontalMargin='20px'></HorizontalBar>
            <div style={{paddingLeft:'40px',marginTop:'20px'}}>
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
            </div>
            <HorizontalBar height='1px' verticalMargin='20px' horizontalMargin='20px'></HorizontalBar>
            <div style={{paddingLeft:'40px',marginTop:'20px'}}>
                <IconMenu
                    activatedImage={require('./images/icon_portfolio_on.png')}
                    deactivatedImage={require('./images/icon_portfolio_off.png')}
                    menuName='포트폴리오 관리'
                    currentPage = {page}></IconMenu>
                <IconMenu
                    activatedImage={require('./images/icon_simulation_on.png')}
                    deactivatedImage={require('./images/icon_simulation_off.png')}
                    menuName='시뮬레이션'
                    currentPage = {page}></IconMenu>
            </div>
        </div>
    )
}