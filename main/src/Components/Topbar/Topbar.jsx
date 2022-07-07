import React from 'react'
import 'antd/dist/antd.css';
import {Button, Popover } from 'antd';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useNavigate } from 'react-router'
import {useSelector, useDispatch} from 'react-redux'
import { openLoginModal, setUserDetails } from '../Redux/actions';

const content = (
    <div style = {{cursor: "pointer"}} >
        Sign Out
    </div>
)

export default function Topbar() {
    const isAuth = useSelector(state => state.isAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSignOut = () => {
        firebase.auth().signOut()
        dispatch(setUserDetails(""))
        navigate("/")
        dispatch(openLoginModal(false))
        localStorage.removeItem("user")
    }

    return (
        <div style = {{padding: "20px", boxShadow: "0 2px 13px -1px rgba(0, 0, 0, 0.2)"}} >
            <div style = {{display: "flex", justifyContent: "right"}} >
                <div style = {{display: "flex"}} >
                    <img 
                        style = {{width: "30px", marginRight: "10px", marginTop: "-10px"}}
                        src = "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-hand-dating-app-flaticons-lineal-color-flat-icons.png" 
                    />
                    <div style = {{marginTop: 5}} > My Referrals </div>
                </div>
                <div style = {{display: "flex", marginLeft: "25px"}}>
                    <Popover placement="bottomRight"  content={content} trigger="click">
                        <Button onClick = {handleSignOut} >Logout</Button>
                    </Popover>
                </div> 
            </div>
        </div>
    )
}
