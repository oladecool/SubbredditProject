import { LOGIN, LOGOUT, SWIPE_LEFT, SWIPE_RIGHT, CLEAR_ERRORS } from './actionTypes';


const INIT_STATE = {
    username: localStorage.getItem('username'),
    error: null
};

export default function (state = INIT_STATE, action)  {
    switch (action.type) {
        case LOGIN:
            const { userData, history} = action.payload;
            if (userData.username === "" || null || undefined) {
                return { ...state, username: null, error: "username is invalid " }
            } else {
                if (userData.password !== "password") {
                    return { ...state, username: null, error: "password is incorrect " }
                }
                localStorage.setItem("username", userData.username)
                history.push('/home');
                return { ...state, username: userData.username, error: null }
            }
        case LOGOUT: 
            action.payload.push('/');
            localStorage.clear();
            return { ...state }
        case CLEAR_ERRORS: 
            return { ...state, error: null }
        default:
            return { ...state };
    }
};
