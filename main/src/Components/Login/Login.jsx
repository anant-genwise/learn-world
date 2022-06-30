import React, {useEffect} from 'react'
import {Navigate} from 'react-router-dom'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {useSelector, useDispatch} from 'react-redux'
import { authenticateUser } from '../Redux/actions'
import { LoginModal } from './LoginModal'

firebase.initializeApp({
    apiKey: "AIzaSyCA7S3cQHoicxQg8EIuy6jZlYWy0_h5nv0",
    authDomain: "learn-world-df635.firebaseapp.com",
})


export const Login = () => {

    const isAuth = useSelector(state => state.isAuth)
    const dispatch = useDispatch()

    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    useEffect(() => {

        firebase.auth().onAuthStateChanged(user => {
            dispatch(authenticateUser(!!user))
        })
    }, [])

    return (
        <div>
            {
                isAuth? <Navigate to = "/dashboard" /> : 
                <div>
                    <LoginModal open = {true} />
                </div>
            }
        </div>
    )
}
