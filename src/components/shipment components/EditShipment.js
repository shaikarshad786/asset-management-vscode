import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; 
import e1 from '../../images/e1.jpg'; 
import { updateShipment } from '../../store/actions/ShipmentAction';
import NavBar2 from '../../components/navbar/NavBar2';

function EditShipment() {

    const shipment = useSelector(state => state.shipmentReducer.shipment);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [shipId] = useState(shipment.shipId)
    const [shipAssets, setShipAssets] = useState(shipment.shipAssets);
    const [shipStatus, setShipStatus] = useState(shipment.shipStatus);
    const [subLocation, setSubLocation] = useState(shipment.subLocation);
    const [dateOfShipment, setDateOfShipment] = useState(shipment.dateOfShipment);
    const [location, setLocation] = useState(shipment.location);
    const [state, setState] = useState(shipment.state);
    const [country, setCountry] = useState(shipment.country);
    const [fromWarehouseId, setFromWarehouseId] = useState(shipment.fromWarehouseId);
    const [toWarehouseId, setToWarehouseId] = useState(shipment.toWarehouseId);

    const disablePast = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    }

    const handleSubmit = () => {

        const payload = {

            shipmentId: shipId,
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

        dispatch(updateShipment(payload));
        alert("Shipmenet updated succesfullt with id " + shipment.shipId);
        navigate(-1);
    }

    return (
            <div style={{ backgroundImage: `url(${e1})`, width: "100%", height: "1109px" }}>
                <NavBar2/>
                <h2 style={{fontSize:"40px"}}><i><b>Adding Shipment</b></i></h2><br></br>
                <div className="container" style={{fontSize:"18px"}}>
                <div className='form-group'>
                    <label htmlFor='shipId'>ShipmentId </label>
                    <input type="text" className="form-control" name="shipId" value={shipId} disabled />
                </div>
                <div className='form-group'>
                    <label htmlFor='shipAssets'>Shipment Asset </label>
                    <input type="text" className="form-control" name="shipAssets" value={shipAssets} onChange={ship => setShipAssets(ship.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='shipStaus'>Shipment Status </label>
                    <input type="text" className="form-control" name="shipStatus" value={shipStatus} onChange={ship => setShipStatus(ship.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='subLocation'>Shipment Sub-location </label>
                    <input type="text" className="form-control" name="subLocation" value={subLocation} onChange={ship => setSubLocation(ship.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='dateOfShipment'>Shipment Date </label>
                    <input type="date" className="form-control" name="dateOfShipment" value={dateOfShipment} onChange={ship => setDateOfShipment(ship.target.value)} min={disablePast()}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='location'>Location </label>
                    <input type="text" className="form-control" name="location" value={location} onChange={ship => setLocation(ship.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='state'>State </label>
                    <input type="text" className="form-control" name="state" value={state} onChange={ship => setState(ship.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='country'>Country </label>
                    <input type="text" className="form-control" name="country" value={country} onChange={ship => setCountry(ship.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='fromWarehouseId'>From warehouseId </label>
                    <input type="text" className="form-control" name="fromWarehouseId" value={fromWarehouseId} onChange={ship => setFromWarehouseId(ship.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='toWarehouseId'>To warehouse Id</label>
                    <input type="text" className="form-control" name="toWarehouseId" value={toWarehouseId} onChange={ship => setToWarehouseId(ship.target.value)} />
                </div><br></br>
                <div >
                    <button style={{ float: "right" }} onClick={handleSubmit} className="btn btn-success">Submit</button>
                    <button style={{ float: "left" }} onClick={() => navigate(-1)} className="btn btn-dark">Back</button>
                </div>
            </div>
        </div>
    )
}

export default EditShipment; 