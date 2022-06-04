import CompanyLogo from '../../unit/CompanyLogo/CompanyLogo';
import Name from '../../unit/Name/Name';
import Ticker from '../../unit/Ticker/Ticker';
import Price from '../../unit/Price/Price';
import PriceChange from '../../unit/PriceChange/PriceChange';

import './StockPriceBlock.css';

export default function StockPriceBlock() {
    return (
        <div className='stock-price-block-container'>
            <CompanyLogo></CompanyLogo>
            <div>
                <div className='stock-name-block'>
                    <Name></Name><Ticker></Ticker>
                </div>
                <div className='stock-price-block'>
                    <Price></Price><PriceChange></PriceChange>
                </div>
            </div>
        </div>
    )
}