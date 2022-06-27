import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addWarehouse} from '../../store/actions/WarehouseActions';
import purple from '../../images/purple.png';
import NavBar from '../navbar/NavBar';

function SaveWarehouse() {
  
    const [warehouseName, setWarehouseName] = useState("");
    const [warehouseLocation, setWarehouseLocation] = useState("");

    const [formErrors, setFormErrors] = useState({});

    const newWarehouse = useSelector(state=>state.warehouseReducer.newWarehouse)

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = () => {

        let errors = {};

        if (!warehouseName) {
            errors['warehouseNameError'] = "*Warehouse name is required!";
        }
        if (!warehouseLocation) {
            errors['warehouseLocationError'] = "*Warehouse location is required!";
        }
        

        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {

            const payload = {
                warehouseName:warehouseName,
                warehouseLocation:warehouseLocation
            }

            dispatch(addWarehouse(payload));
            navigate("/warehouse/all");
        }
    }

    return (
        <div>
            <div style={{ backgroundImage: `url(${purple})`, width: "100%", height: "1150px" }}>
                <NavBar/>
                <div className="container" style={{ color: "white" }}>
                    <h2 style={{ fontSize: "40px" }}><i>Adding Warehouse</i></h2><br></br>
                    <div style={{ fontSize: "20px" }}>
                        <div className='form-group'>
                            <label htmlFor='warehouseName'>WarehouseName </label>
                            <input type="text" className="form-control" name="warehouseName" value={warehouseName} onChange={w => setWarehouseName(w.target.value)} autoFocus />
                            {
                                formErrors.warehouseNameError &&
                                <div style={{ textAlign: "start", color: "red", fontSize: "17px" }}>{formErrors.warehouseNameError}</div>
                            }
                        </div>
                        <div className='form-group'>
                            <label htmlFor='warehouseLocation'>WarehouseLocation </label>
                            <input type="text" className="form-control" name="warehouseLocation" value={warehouseLocation} onChange={w => setWarehouseLocation(w.target.value)} />
                            {
                                formErrors.warehouseLocationError &&
                                <div style={{ textAlign: "start", color: "red", fontSize: "17px" }}>{formErrors.warehouseLocationError}</div>

                            }
                        </div>
                        
                    </div>

                    <div>
                        <button className="btn btn-success" style={{ float: "right" }} onClick={handleSubmit}>Submit</button>
                        <button className="btn btn-secondary" style={{ float: "left" }} onClick={() => (navigate("/warehouse/all"))}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaveWarehouse;