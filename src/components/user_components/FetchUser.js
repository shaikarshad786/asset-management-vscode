import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../store/actions/UserActions';
import { getUserDetails } from '../../store/actions/UserActions';
import img1 from '../../images/user1.png';

function FetchUser() { 
    const user = useSelector(state=>state.userReducer.user)

    const { id } = useParams();

    const dispatch = useDispatch();

    const fetchUserById = () => {
       dispatch(getUserDetails(id));
    }

    useEffect(fetchUserById, [id]);
    const deleteUserid = () => {
        dispatch(deleteUser(id));
        //useEffect(deleteUserid, [id]);

        alert("the User has deleted")
    }
    

    return (
        <div className='contrainer-fluid' style={{backgroundColor:"#0000ff80"}}>

            {
                user !== null &&
                <div className="row">
                    <div className="col">
                        <img src={img1} width='300px' alt="Card image" />
                    </div>
                    <div className="col">
                        <h2>User Details</h2>
                        <p>UserId : {user.userId}</p>
                        <p>Name : {user.userName}</p>
                        <p>MobileNumber : {user.mobileNumber}</p>
                        <p>Address : {user.address}</p>
                        <p>EmailId : {user.emailId}</p>
                        <p>Password : {user.password}</p>
                        <p>Role : {user.userRole}</p>
                        <Link to={`/user/edit/${user.userId}`} className="btn btn-secondary">Edit</Link> &nbsp;&nbsp;
                        <button onClick={deleteUserid} className="btn btn-secondary">Delete</button><br></br><br></br>
                    </div>

                </div>
            }
            <div>
                <Link to="/user/all" className="btn btn-secondary">Back</Link><br></br><br></br><br></br><br></br><br></br><br></br>
            </div>
        </div>
    )
}

export default FetchUser;