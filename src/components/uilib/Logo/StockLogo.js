import './StockLogo.css';

export default function StockLogo() {
    return (
        <div className='stock-logo'>
            <img className='stock-logo-image' src={require('./images/logo_apple.png')} alt='logo name'></img>
        </div>
    )
}