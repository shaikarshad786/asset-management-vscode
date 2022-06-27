import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../store/actions/UserActions';
import img2 from '../../images/userimg.webp';
import img3 from '../../images/back2.jpg';

function FetchAllUsers() { 

    const users = useSelector(state => state.userReducer.users)
    const dispatch = useDispatch();

    const myUser = localStorage.getItem("myUser");

    const myFunction = async () => {
        dispatch(getAllUsers())
    };

    useEffect(() => {
        myFunction();
    }, []);

    return (
        <div style={{backgroundImage:`url(${img3})`}}>
            {
                myUser !== null &&  <h3>Welcome {JSON.parse(myUser).userName}</h3>
            }
            <div class="row">
                {
                    users.map((u, index) =>
                        <div key={index} className="col-sm-3">
                            <Link to={`/user/get/${u.userId}`}>
                                <div className="card" style={{ width: "200px", height: "300px" }}>
                                    <img className="card-img-top" src={img2} alt="Card image" />
                                    <div className="card-body">
                                        <h4 className="card-title">{u.userName}</h4>
                                        <p className="card-text">{u.userRole}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default FetchAllUsers;