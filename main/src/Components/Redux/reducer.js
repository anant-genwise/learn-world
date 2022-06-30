import { AUTHENTICATION_SUCCESS, GET_CURRENT_STATE } from "./actionTypes"


const initState = {
    isAuth: [],
    userDetails: {}
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
        default:
            return state
    }
}