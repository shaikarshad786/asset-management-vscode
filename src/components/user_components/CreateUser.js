import React, { useState } from 'react';
//import Axios from 'axios';
//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addUser} from '../../store/actions/UserActions'
function CreateUser() {

    const [uName, setUName] = useState("");
    const [uMobileNumber, setUMobileNumber] = useState("");
    const [uAddress, setUAddress] = useState("");
    const [uEmailId, setUEmailId] = useState("");
    const [uPassword, setUPassword] = useState("");
    const [uRole, setURole] = useState("");

    const [formErrors, setFormErrors] = useState({});

    const newUser = useSelector(state => state.userReducer.newUser)

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = () => {

        //validate form data
        let errors = {};

        if (!uName) {
            errors['userNameError'] = "User Name is required";
        }
        if (uMobileNumber.length != 10) {
            errors['MobileNumberError'] = "Please enter 10 digit MobileNumber";
        }

        if (!uAddress) {
            errors['AddressError'] = "Address is required";
        }

        if (!uEmailId) {
            errors['EmailIdError'] = "EmailId is required";
        }
        
        if (!uPassword) {
            errors['PasswordError'] = "Password is required";
        }

        if (!uAddress) {
            errors['AddressError'] = "Address is required";
        }
        if (!uRole) {
            errors['UserRoleError'] = "Please select UserRole";
        }

        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;

        //if data is valid dispatch the requset to middleware
        if (noErrors) {
            const payload = {
                userName: uName,
                mobileNumber: uMobileNumber,
                address: uAddress,
                emailId: uEmailId,
                password: uPassword,
                userRole: uRole
            }

            dispatch(addUser(payload));
            alert("User saved");
        }


    } 

    return (
        <div className="container" style={{ backgroundColor: "#ADD8E6", width: "400px", height: "690px" }}>
            <h2 style={{ backgroundColor: "#4682B4" }}>User Form</h2>
            <div className="form-group">
                <label htmlFor='uName'>UserName</label>
                <input type="text" className="form-control" name="uName" placeholder='Enter User Name'value={uName} onChange={e => setUName(e.target.value)} />
                {

                    formErrors.userNameError &&

                    <div style={{ color: "red" }}>{formErrors.userNameError}</div>

                }
            </div>

            <div className="form-group">
                <label htmlFor='uMobileNumber'>MobileNumber </label>
                <input type="text" className="form-control" name="uMobileNumber" placeholder='Enter Mobile Number'value={uMobileNumber} onChange={e => setUMobileNumber(e.target.value)} />
                {

                    formErrors.MobileNumberError &&

                    <div style={{ color: "red" }}>{formErrors.MobileNumberError}</div>

                }
            </div>

            <div className="form-group">
                <label htmlFor='uAdddres'>Address</label>
                <input type="text" className="form-control" name="uAddress" placeholder='Enter Address' value={uAddress} onChange={e => setUAddress(e.target.value)} />
                {

                    formErrors.AddressError &&

                    <div style={{ color: "red" }}>{formErrors.AddressError}</div>

                }
            </div>

            <div className="form-group">
                <label htmlFor='uEmailId'>EmailId</label>
                <input type="email" className="form-control" name="uEmailId" placeholder='Enter EmailId' value={uEmailId} onChange={e => setUEmailId(e.target.value)} />
                {

                    formErrors.EmailIdError &&

                    <div style={{ color: "red" }}>{formErrors.EmailIdError}</div>

                }

            </div>

            <div className="form-group">
                <label htmlFor='uPassword'>Password</label>
                <input type="password" className="form-control" name="uPassword" placeholder='Enter password' value={uPassword} onChange={e => setUPassword(e.target.value)} />
                {

                    formErrors.PasswordError &&

                    <div style={{ color: "red" }}>{formErrors.PasswordError}</div>

                }
            </div>

            <div className="form-group">
                <label htmlFor='uRole'>UserRole</label>
                {/* <input type="text" className="form-control" name="uRole" value={uRole} onChange={e => setURole(e.target.value)} /> */}

                <select className='form-control' name="uRole" value={uRole} onChange={e => setURole(e.target.value)}>
                    <option>----Select--------</option>
                    <option value={"GeneralUser"}>GeneralUser</option>
                    <option value={"Admin"}>Admin</option>
                    <option value={"WarehouseManager"}>Warehouse Manager</option>
                </select>






                {

                    formErrors.UserRoleError &&

                    <div style={{ color: "red" }}>{formErrors.UserRoleError}</div>

                }
            </div>

            <div>
                <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </div>
            <div style={{ float: "right" }}>
                <button onClick={() => navigate(-1)} className="btn btn-secondary">Go Back Home</button>
            </div>
        </div>

    )
}

export default CreateUser;