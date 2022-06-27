import userLogin from '../../components/user_components/Login'
import { LOGIN_SUCCESS } from './ActionConstants';

import axios from "axios";

export function getAllUsers() {
    return (dispatch) => {
        return axios.get("http://localhost:8080/user/all").then(
            resp => {
                dispatch(getAllUserSuccess(resp.data));
            }
        )
    }
}

export function getAllUserSuccess(data) {
    return {
        type: "USER/FETCHALL",
        payload: data
    }
}

export function getUserDetails(id) {
    return (dispatch) => {
        return axios.get("http://localhost:8080/user/find/" + id).then(resp => {
            console.log(resp.status);
            dispatch(getUserByIdSuccess(resp.data))
        })
    }
}

export function getUserByIdSuccess(data) {
    return {
        type: "USER/FETCHBYID",
        payload: data
    }
}

export function addUser(user) {

    return (dispatch) => {
        return axios.post("http://localhost:8080/user/save", user).then(
            resp => {
                dispatch(addUserSuccess(resp.data));
            }
        )
    }
}

export function addUserSuccess(data) {
    return {
        type: 'USER/ADDSUCCESS',
        payload: data
    }
}

export function updateUser(user) {

    return (dispatch) => {
        return axios.put("http://localhost:8080/user/update", user).then(
            resp => {
                dispatch(updateUserSuccess(resp.data));
            }
        )
    }
}

export function updateUserSuccess(data) {
    return {
        type: 'USER/UPDATESUCCESS',
        payload: data
    }
}

export function doUserLogin(user) {
    return (dispatch) => {
        return axios.post("http://localhost:8080/user/login",user).then(
            resp => {
                console.log(resp);
                localStorage.setItem("myUser",JSON.stringify(resp.data));
                dispatch(doLoginSuccess(resp.data));
            }
        )  
        // .catch(error=> {
        //    // console.log(error);
        // })     
    }
}

export function doLoginSuccess(data) {

    return {
        type : "LOGIN_SUCCESS",
        payload: data
    }
}


export function deleteUser(id) {
    return (dispatch) => {
        return axios.delete("http://localhost:8080/user/delete/"+id).then(
            resp => {
                
            } 
        )  
          
    }
}

export function deleteUserSuccess(data) {

    return {
        type : "DELETE_USER_SUCCESS",
        payload: data
    }
}