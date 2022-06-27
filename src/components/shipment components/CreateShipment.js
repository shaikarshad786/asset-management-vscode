import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import l2 from '../../images/l1.webp';
import NavBar from '../../components/navbar/NavBar';
import {createNewShipment} from '../../store/actions/ShipmentAction';

function CreateShipment() {
  
    const [shipAssets, setShipAssets] = useState("");
    const [shipStatus, setShipStatus] = useState("");
    const [subLocation, setSubLocation] = useState("");
    const [dateOfShipment, setDateOfShipment] = useState("");
    const [location, setLocation] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [fromWarehouseId, setFromWarehouseId] = useState("");
    const [toWarehouseId, setToWarehouseId] = useState("");

    const [formErrors, setFormErrors] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const disablePast = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    }


    // eslint-disable-next-line
    const shipment = useSelector(state => state.shipmentReducer.newshipment);

    const handleSubmit = () => {

        let errors = {};

        if (!shipAssets) {
            errors['shipAssetNameError'] = "*Ship Asset name is requird!";
        }
        if (!shipStatus) {
            errors['shipStatusNameError'] = "*Shipment status is requird!";
        }
        if (!location) {
            errors['shipLocationNameError'] = "*Shipment location is requird!";
        }
        if (!dateOfShipment) {
            errors['dateOfShipmentError'] = "*Shipment Date is Required!";
        }

        if (!state) {
            errors['shipStateNameError'] = "*Shipment state is requird!";
        }

        if (!country) {
            errors['shipCountryNameError'] = "*Shipment country is requird!";
        }

        if (!fromWarehouseId) {
            errors['shipFromWarehouseIdNameError'] = "*from warehouseId is requird!";
        }

        if (!toWarehouseId) {
            errors['shipToWarehouseIdNameError'] = "*to warehouseId is requird!";
        }

        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {

            const payload = {
                shipmentAssets: shipAssets,
                shipmentStatus: shipStatus,
                shipmentSubLocation: subLocation,
                shipmentDate: dateOfShipment,
                shipmentLocation: location,
                state: state,
                country: country,
                fromWarehouseId: fromWarehouseId,
                toWarehouseId: toWarehouseId
            }

            dispatch(createNewShipment(payload));
            // alert("Shipment is saved with id : " + newShipment.shipId)
            navigate(-1);
        }
    }

    return (
        <div>
            <div style={{ backgroundImage: `url(${l2})`, width: "100%", height: "1150px" }}>
                <NavBar />
                <div className="container" style={{ color: "white" }}>
                    <h2 style={{ fontSize: "40px" }}><i>Adding Shipment</i></h2><br></br>
                    <div style={{ fontSize: "20px" }}>
                        <div className='form-group'>
                            <label htmlFor='shipAssets'>Shipment Asset </label>
                            <input type="text" className="form-control" name="shipAssets" value={shipAssets} onChange={ship => setShipAssets(ship.target.value)} autoFocus />
                            {
                                formErrors.shipAssetNameError &&
                                <div style={{ textAlign: "start", color: "red", fontSize: "17px" }}>{formErrors.shipAssetNameError}</div>
                            }
                        </div>
                        <div className='form-group'>
                            <label htmlFor='shipStaus'>Shipment Status </label>
                            <input type="text" className="form-control" name="shipStatus" value={shipStatus} onChange={ship => setShipStatus(ship.target.value)} />
                            {
                                formErrors.shipStatusNameError &&
                                <div style={{ textAlign: "start", color: "red", fontSize: "17px" }}>{formErrors.shipStatusNameError}</div>

                            }
                        </div>
                        <div className='form-group'>
                            <label htmlFor='subLocation'>Shipment Sub-location </label>
                            <input type="text" className="form-control" name="subLocation" value={subLocation} onChange={ship => setSubLocation(ship.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='dateOfShipment'>Shipment Date </label>
                            <input type="date" className="form-control" name="dateOfShipment" value={dateOfShipment} onChange={ship => setDateOfShipment(ship.target.value)} min={disablePast()} />
                            {
                                formErrors.dateOfShipmentError &&
                                <div style={{ textAlign: "start", color: "red", fontSize: "17px" }}>{formErrors.dateOfShipmentError}</div>
                            }
                        </div>
                        <div className='form-group'>
                            <label htmlFor='location'>Location </label>
                            <input type="text" className="form-control" name="location" value={location} onChange={ship => setLocation(ship.target.value)} />
                            {
                                formErrors.shipLocationNameError &&
                                <div style={{ textAlign: "start", color: "red", fontSize: "17px" }}>{formErrors.shipLocationNameError}</div>

                            }
                        </div>
                        <div className='form-group'>
                            <label htmlFor='state'>State </label>
                            <input type="text" className="form-control" name="state" value={state} onChange={ship => setState(ship.target.value)} />
                            {
                                formErrors.shipStateNameError &&
                                <div style={{ textAlign: "start", color: "red", fontSize: "17px" }}>{formErrors.shipStateNameError}</div>
                            }
                        </div>
                        <div className='form-group'>
                            <label htmlFor='country'>Country </label>
                            <input type="text" className="form-control" name="country" value={country} onChange={ship => setCountry(ship.target.value)} />
                            {
                                formErrors.shipCountryNameError &&
                                <div style={{ textAlign: "start", color: "red", fontSize: "17px" }}>{formErrors.shipCountryNameError}</div>
                            }
                        </div>
                        <div className='form-group'>
                            <label htmlFor='fromWarehouseId'>From warehouseId </label>
                            <input type="text" className="form-control" name="fromWarehouseId" value={fromWarehouseId} onChange={ship => setFromWarehouseId(ship.target.value)} />
                            {
                                formErrors.shipFromWarehouseIdNameError &&
                                <div style={{ textAlign: "start", color: "red", fontSize: "17px" }}>{formErrors.shipFromWarehouseIdNameError}</div>
                            }
                        </div>
                        <div className='form-group'>
                            <label htmlFor='toWarehouseId'>To warehouse Id</label>
                            <input type="text" className="form-control" name="toWarehouseId" value={toWarehouseId} onChange={ship => setToWarehouseId(ship.target.value)} />
                            {
                                formErrors.shipToWarehouseIdNameError &&
                                <div style={{ textAlign: "start", color: "red", fontSize: "17px" }}>{formErrors.shipToWarehouseIdNameError}</div>
                            }
                        </div>
                    </div>

                    <div>
                        <button className="btn btn-success" style={{ float: "right" }} onClick={handleSubmit}>Submit</button>
                        <button className="btn btn-secondary" style={{ float: "left" }} onClick={() => (navigate("/shipment/all"))}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateShipment;