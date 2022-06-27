import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../../store/actions/UserActions';

function EditUser() {

    const user = useSelector(state => state.userReducer.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [uId, setUId] = useState(user.userId);
    const [uName, setUName] = useState(user.userName);
    const [uMobileNumber, setUMobileNumber] = useState(user.mobileNumber);
    const [uAddress, setUAddress] = useState(user.address);
    const [uEmailId, setUEmailId] = useState(user.emailId);
    const [uPassword, setUPassword] = useState(user.password);
    const [uRole, setURole] = useState(user.userRole);


    const handleSubmit = () => {
 
        const payload = {
            userId: uId,
            userName: uName,
            mobileNumber: uMobileNumber,
            address: uAddress,
            emailId: uEmailId,
            password: uPassword,
            userRole: uRole
        }

        dispatch(updateUser(payload));
        alert("User Updated.");
        navigate(-1);
    }

    return (
        <div>
            <div className="container" style={{ backgroundColor: "#87CEFA", width: "400px", height: "690px" }}>
                <div className="form-group">
                    <label htmlFor='uName'>UserId</label>
                    <input type="text" className="form-control" name="uId" value={uId} disabled />
                </div>

                <div className="form-group">
                    <label htmlFor='uName'>UserName</label>
                    <input type="text" className="form-control" name="uName" value={uName} onChange={e => setUName(e.target.value)} />     
                </div>

                <div className="form-group">
                    <label htmlFor='uMobileNumber'>MobileNumber </label>
                    <input type="text" className="form-control" name="uMobileNumber" value={uMobileNumber} onChange={e => setUMobileNumber(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor='uAdddres'>Address</label>
                    <input type="text" className="form-control" name="uAddress" value={uAddress} onChange={e => setUAddress(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor='uEmailId'>EmailId</label>
                    <input type="text" className="form-control" name="uEmailId" value={uEmailId} onChange={e => setUEmailId(e.target.value)} />

                </div>
                
                <div className="form-group">
                    <label htmlFor='uPassword'>Password</label>
                    <input type="text" className="form-control" name="uPassword" value={uPassword} onChange={e => setUPassword(e.target.value)} />
                </div>
                            
                <div className="form-group">
                    <label htmlFor='uPosition'>UserRole</label>
                    <input type="text" className="form-control" name="uRole" value={uRole} onChange={e => setURole(e.target.value)} />
                </div>


                <div>
                    <button onClick={handleSubmit} className="btn btn-primary">Update</button>
                </div>
                <div style={{ float: "right" }}>
                    <button onClick={() => navigate(-1)} className="btn btn-secondary">Go Back Home</button>
                </div>
            </div >
        </div >
    )
}

export default EditUser;