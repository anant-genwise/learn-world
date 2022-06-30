import React, {useState, useEffect} from 'react'
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import {useSelector, useDispatch} from 'react-redux'
import {Navigate} from 'react-router-dom'
import { authenticateUser, setUserDetails } from '../Redux/actions';

export const LoginModal = ({open}) => {
    const [isModalVisible, setIsModalVisible] = useState(open);

    const isAuth = useSelector(state => state.isAuth)
    const dispatch = useDispatch()

    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => false
        }
    }

    useEffect(() => {

        firebase.auth().onAuthStateChanged(user => {
            dispatch(authenticateUser(!!user))
        })
        // dispatch(setUserDetails(firebase.auth().currentUser))

        return () => {
            dispatch(setUserDetails(firebase.auth().currentUser))
        }

    }, [])

  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    console.log(isAuth)
    return (
        <div>
            <Modal footer = {null} visible={isModalVisible} onCancel={handleCancel} >
                <div >
                    {
                        isAuth? <Navigate to = "/" /> : 
                        <div>
                            <StyledFirebaseAuth 
                                uiConfig = {uiConfig}
                                firebaseAuth = {firebase.auth()}
                            />
                        </div>
                    }
                    </div>
            </Modal>
            
        </div>
    )
}