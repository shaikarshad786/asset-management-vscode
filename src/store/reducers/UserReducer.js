import { LOGIN_SUCCESS } from "../actions/ActionConstants";

const initialState = {
    users: [],
    user: null,
    loggedInUser: null
}

export default function userReducer(state = initialState, action) {

    if (action.type === 'USER/FETCHALL') {
        console.log(action.payload);
        return ({
            ...state,
            users: action.payload
        })
    }
    if (action.type === 'USER/FETCHBYID') {
        console.log(action.payload);
        return ({
            ...state,
            user: action.payload
        })
    }

    if (action.type === 'LOGIN_SUCCESS') {
        console.log(action.payload);
        return ({
            ...state,
            loggedInUser: action.payload
        })
    }


    if (action.type === 'DELETE_USER_SUCCESS') {
        console.log(action.payload);
        return ({
            ...state,
            user: action.payload
        })
    }

    else {
        return state;
    }
}