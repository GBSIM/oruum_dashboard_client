import './Logo.css';

function Logo(props) {
    return (
        <div className='logo-container' style={{height: props.containerHeight}}>
            {/* <img className='logo-image icon' src={require('./images//icon_oruum.png')} alt='logo icon'></img> */}
            {/* <img className='logo-image name' src={require('./images/logo_oruum.png')} alt='logo name'></img> */}
            <img className='logo-image manager' src={require('./images/logo_oruum_manager.png')} alt='logo name'></img>
        </div>
    )
}

export default Logo;