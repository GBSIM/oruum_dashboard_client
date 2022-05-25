import './StockLogo.css';

export default function StockLogo() {
    return (
        <div className='stock-logo'>
            <img className='stock-logo-image' src={require('./images/logo_apple.png')} alt='logo name'></img>
            <button className='stock-image-update-button'>수정하기</button>
        </div>
    )
}