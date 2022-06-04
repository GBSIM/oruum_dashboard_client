import './CompanyLogo.css';
import LogoSvg from './images/logo_aapl.svg';

export default function CompanyLogo() {
    return (
        <div className="company-logo-container">
            <img src={LogoSvg}></img>
        </div>
    )
}