import { LOGIN, LOGOUT, GET_REDDIT, SWIPE_LEFT, SWIPE_RIGHT, CLEAR_ERRORS } from './actionTypes';
import axios from 'axios'


//Login user
export const loginUser = (userData, history) => ({
    type: LOGIN,
    payload: { userData, history }
});

export const logOut = (history) => ({
    type: LOGOUT,
    payload: history
});


export const clearErrors = () => ({
    type: CLEAR_ERRORS
});



