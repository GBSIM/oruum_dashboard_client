import './AccountButton.css';
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from '../../../_reducers/account';

export default function AccountButton() {
    const dispatch = useDispatch();
    const { loginStatus } = useSelector(state => state.account);

    const accountAccess = (event) => {
        if ({loginStatus}.loginStatus) {
            dispatch(logout());
        } else {
            dispatch(login());
        }
    };  

    let buttonText = '로그인';
    if ({ loginStatus }.loginStatus) {
        buttonText = '로그아웃';
    } else {
        buttonText = '로그인';
    }
    return (
        <button type='button' className="account-button" onClick={accountAccess}>
            { buttonText }
        </button>
    )
}