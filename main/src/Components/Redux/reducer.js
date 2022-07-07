import { AUTHENTICATION_SUCCESS, GET_CURRENT_STATE, SET_CURRENT_USER_DETAILS_REQUEST, SET_CURRENT_USER_DETAILS_SUCCESS } from "./actionTypes"


const initState = {
    isAuth: false,
    currentUser: {}
}

export const reducer = (state = initState, {type, payload}) => {
    switch(type){
        case GET_CURRENT_STATE:
            return{
                state: payload
            }
        case AUTHENTICATION_SUCCESS:
            return{
                ...state,
                isAuth: payload
            }
        case SET_CURRENT_USER_DETAILS_SUCCESS:
            return{
                ...state,
                currentUser: payload
            }
        default:
            return state
    }
}