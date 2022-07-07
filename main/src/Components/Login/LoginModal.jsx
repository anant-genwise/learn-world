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
import axios from 'axios';

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

            console.log(firebase.auth().currentUser.multiFactor.user.displayName)
            const payload = {
                name: firebase.auth().currentUser.multiFactor.user.displayName,
                email: firebase.auth().currentUser.multiFactor.user.email
            }

            var existingUser = false
            
            axios.get("http://127.0.0.1:8000/users")
                .then((res) => {
                    console.log(res)
                    res.data.forEach(el => {
                        if(el.email === firebase.auth().currentUser.multiFactor.user.email ){
                            existingUser = true
                            return
                        }
                    });
                })
                .then(() => {
                    console.log("exisitng user", existingUser)
                    if(!existingUser){
                        axios.post("http://127.0.0.1:8000/users", payload)
                    }
                })

            localStorage.setItem("user", JSON.stringify(firebase.auth().currentUser.multiFactor.user))
        }

    }, [])

  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };


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