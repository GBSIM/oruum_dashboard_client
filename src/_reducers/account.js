export const LOGIN = "ACCOUNT/LOGIN";
export const LOGOUT = "ACCOUNT/LOGOUT";

const initialState = {
    loginStatus: false,
    firstName: "이름",
    lastName: "성",
    isManager: false,
}

export function login() {
    return {
        type: LOGIN,
        success: true
    }
}

export function logout() {
    return {
        type: LOGOUT,
        success: true
    }
}


const account = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loginStatus: true
            }
    
        case LOGOUT:
            return {
                ...state,
                loginStatus: false
            }

      default:
        return state;
    }
  };

  export default account;