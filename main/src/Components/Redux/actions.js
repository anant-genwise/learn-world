import { AUTHENTICATION_REQUEST, AUTHENTICATION_SUCCESS, GET_CURRENT_STATE, SET_CURRENT_USER_DETAILS_REQUEST, SET_CURRENT_USER_DETAILS_SUCCESS } from "./actionTypes"

export const getState = (payload) => {
    return {
        type: GET_CURRENT_STATE,
        payload
    }
}

export const getCurrState = payload => dispatch => {

    dispatch(getState(payload))

}

export const authenticationRequest = () => {
    return{
        type: AUTHENTICATION_REQUEST
    }
}

export const authenticationSuccess = (payload) => {
    return{
        type: AUTHENTICATION_SUCCESS,
        payload
    }
}

export const authenticateUser = (payload) => dispatch => {
    dispatch(authenticationRequest())

    dispatch(authenticationSuccess(payload))
}

export const setUserDetailsRequest = () => {
    return{
        type: SET_CURRENT_USER_DETAILS_REQUEST
    }
}

export const setUserDetailsSuccess = (payload) => {
    return{
        type: SET_CURRENT_USER_DETAILS_SUCCESS,
        payload
    }
}


export const setUserDetails = (payload) => dispatch => {
    dispatch(setUserDetailsRequest())

    dispatch(setUserDetailsSuccess(payload))
    
}