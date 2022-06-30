import React, {useState} from 'react'
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import {Route} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import { initializeApp } from "firebase/app";
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

initializeApp({
    apiKey: "AIzaSyCA7S3cQwHoicxQg8EIuy6jZlYWy0_h5nv0",
    authDomain: "learn-world-df635.firebaseapp.com",
});

export default function PrivateRoute({path, component, exact}) {
    const [isAuth, setIsAuth] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(!isAuth);

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


    const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
    return (
        <div>
            {
                isAuth? <Route path = {path} component = {component} exact = {exact} /> : 
                <Modal footer = {null} visible={isModalVisible} onCancel={handleCancel} >
                <div>
                    {
                        isAuth? <Redirect to = "/" /> : 
                        <div>
                            <StyledFirebaseAuth 
                                uiConfig = {uiConfig}
                                firebaseAuth = {firebase.auth()}
                            />
                        </div>
                    }
                    </div>
            </Modal>
            }
        </div>
    )
}
