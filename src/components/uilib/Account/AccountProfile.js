import { useSelector, useDispatch } from "react-redux";

import './AccountProfile.css';

export default function AccountProfile() {
    const { firstName } = useSelector(state => state.account);
    const { loginStatus } = useSelector(state => state.account);

    if ({loginStatus}.loginStatus) {
        return(
            <div className='account-profile'>
                <div className="profile-image-container">
                    <img className='profile-image' src={require('./images/profile.png')}></img>
                </div>
                <span className='profile-name'>{firstName}</span>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}