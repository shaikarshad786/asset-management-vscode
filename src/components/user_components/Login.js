import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { doUserLogin } from '../../store/actions/UserActions';
import l1 from '../../images/l3.webp';


function Login() {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [userRole, setUserRole] = useState("");

    const loggedInUser = useSelector(state => state.userReducer.loggedInUser)
 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formErrors, setFormErrors] = useState({});

    const doLogin = () => {

        let errors = {};

        if (!username) {
            errors['usernameError'] = "*User name is requird!";
        } 

        if (!password) {
            errors['passwordError'] = "*Password is requird!";
        }

        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {
            const payload = {
                userName: username,
                password: password,
                userRole: userRole
            }

            dispatch(doUserLogin(payload))
        }
    }

    return (
        <div style={{ backgroundImage: `url(${l1})`, width: "100%", height: "755px" }}>

            <div className='container' style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}>
                {
                    loggedInUser !== null ?

                        
                                loggedInUser.userRole === "Admin" ?
                                    navigate("/admin/dashboard")
                                    :
                                    loggedInUser.userRole === "WarehouseManager" ?
                                        navigate("/manager/dashboard")
                                        :
                                        loggedInUser.userRole === "GeneralUser" ?
                                            navigate("/user/dashboard")
                                            :
                                            navigate("/")

                          
                        :
                        <div className="card bg-light text-dark" style={{ width: "320px", height: "480px", borderRadius: "3em" }}>
                            <div className="card-body" style={{ backgroundColor: "#B0E0E6", width: "320px", height: "450px", borderRadius: "3em" }}>
                                <h4 className="card-title" style={{ fontFamily: "roboto", fontSize: "35px" }}><b>LOGIN</b></h4><br></br>
                                <div className='form-group' style={{ fontFamily: "serif", fontSize: "20px" }}>
                                    <label htmlFor='username'>UserName</label>
                                    <input type="text" className='form-control' name='username' value={username} onChange={login => setUserName(login.target.value)} autoFocus />
                                    {
                                        formErrors.usernameError &&
                                        <div style={{ textAlign: "start", color: "red", fontSize: "15px", fontFamily: "monospace" }}>{formErrors.usernameError}</div>
                                    }
                                
                                </div>
                                <div className="form-group" style={{ fontFamily: "serif", fontSize: "20px" }}>
                                    <label htmlFor='password'>Password</label>
                                    <input type="password" className="form-control" name="password" value={password} onChange={login => setPassword(login.target.value)} />
                                    {
                                        formErrors.passwordError &&
                                        <div style={{ textAlign: "start", color: "red", fontSize: "15px", fontFamily: "monospace" }}>{formErrors.passwordError}</div>
                                    }
                                </div>
                                <div style={{ fontFamily: "serif", fontSize: "20px" }}>
                                    <label htmlFor="userRole">User Role : </label>
                                    <select type="userRole" className="form-control" name="userRole" value={userRole} onChange={login => setUserRole(login.target.value)}>
                                        <option value="" >    -------Select role----- </option>
                                        <option value="Admin">Admin</option>
                                        <option value="WarehouseManager">Warehouse Manager</option>
                                        <option value="GeneralUser">General User</option>
                                    </select>
                                </div>

                                <div><br></br>
                                    <button style={{ float: "right" }} onClick={doLogin} className='btn btn-success'>Sigin</button>
                                    <button style={{ float: "left" }} onClick={() => (navigate("/"))} className='btn btn-secondary'>Back</button>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default Login;