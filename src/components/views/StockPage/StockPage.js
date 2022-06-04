import './StockPage.css';
import '../../../default.css';
import NavBar from "../../uilib/NavBar/NavBar";
import Header from "../../uilib/Header/Header";
import BottomNavBar from "../../uilib/NavBar/BottomNavBar";

import StockPriceBlock from "../../ui_library/stock/StockPriceBlock/StockPriceBlock";
import StockPriceLineGraph from "../../ui_library/stock/PeriodicLineGraph/StockPriceLineGraph";
import AddButton from "../../ui_library/unit/AddButton/AddButton";
import TextWithVerticalBar from "../../ui_library/unit/TextWithVerticalBar/TextWithVerticalBar";
import RoundedSearchInput from '../../ui_library/unit/RoundedSearchInput/RoundedSearchInput';
import IconCircleButton from '../../ui_library/unit/IconCircleButton/IconCircleButton';
import Profile from '../../ui_library/unit/Profile/Profile';
import HorizontalBar from '../../ui_library/unit/HorizontalBar/HorizontalBar';
import FocusedValue from '../../ui_library/unit/FocusedValue/FocuesdValue';
import RoundedImage from '../../ui_library/unit/RoundedImage/RoundedImage';
import RoundedBar from '../../ui_library/unit/RoundedBar/RoundedBar';
import TableHeader from '../../ui_library/unit/TableHeader/TableHeader';
import TableContents from '../../ui_library/unit/TableContents/TableContents';
import News from '../../ui_library/unit/News/News';
import IconTitle from '../../ui_library/unit/IconTitle/IconTitle';
import IconMenu from '../../ui_library/unit/IconMenu/IconMenu';

export default function StockPage() {
    
    return (
        <div className='page'>
            <NavBar></NavBar>
            <div className='main-contents'>
                <Header>
                </Header>
                <div className='page-contents'>
                    <StockPriceBlock></StockPriceBlock>
                    <StockPriceLineGraph></StockPriceLineGraph>
                    <AddButton buttonText='추가하기'></AddButton>
                    <TextWithVerticalBar textType='h2' leftText='텍스트1' rightText='텍스트2'></TextWithVerticalBar>
                    <RoundedSearchInput placeholderText='종목을 입력하세요.'></RoundedSearchInput>
                    <IconCircleButton></IconCircleButton>
                    <Profile name='규빈'></Profile>
                    <HorizontalBar height='1px' verticalMargin='30px'></HorizontalBar>
                    <FocusedValue title='PER' value='30.0'></FocusedValue>
                    <RoundedImage width='100px' height='100px' image={require('./images/icon_down.png')}></RoundedImage>
                    <RoundedBar
                        maxValue = {200000000}
                        value = {-112023921}
                        unit = 'won'
                        period = '2022'
                        maxHeight = {200}></RoundedBar>
                    <TableHeader headerList={['제목1','제목2','제목3']}></TableHeader>
                    <TableContents contentsList={['내용1','내용2','내용3']}></TableContents>
                    <News link='https://www.hankyung.com/it/article/202206032798g'
                          imageUrl='https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iTi0mDs9cdB4/v1/1400x-1.jpg'
                          title='2위 삼성, 1위 애플과 격차 좁혔다…갤럭시워치 점유율 쑥'
                          summary='올해 1분기 글로벌 스마트워치 시장에서 삼성전자(66,800 +0.15%)가 처음으로 두자릿수 점유율을 기록하며...'
                          journal='한국경제일보'
                          date='2022.06.03'></News>
                    <IconTitle title='수익성' image={require('./images/icon_down.png')}></IconTitle>
                    <IconMenu activatedImage={require('./images/icon_up.png')}
                              deactivatedImage={require('./images/icon_down.png')}
                              menuName={'메뉴'}
                              currentState={'메뉴'}></IconMenu>
                              
                </div>
            </div>
            <BottomNavBar></BottomNavBar>
            
        </div>
    )
}