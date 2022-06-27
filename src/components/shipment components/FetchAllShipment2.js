import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getAllShipments } from "../../store/actions/ShipmentAction";   
import a1 from '../../images/sb3.webp'; 
import i1 from '../../images/i1.jpg' ;
import NavBar2 from "../../components/navbar/NavBar2";

 
function FetchAllShipment2() {

    const shipments = useSelector(state => state.shipmentReducer.shipments);
    const dispatch = useDispatch();

    const fetchAllShipments = async () => {
        dispatch(getAllShipments())
    };

    useEffect(() => {
        fetchAllShipments();
        // eslint-disable-next-line 
    }, [])

    return (
        <div style={{ backgroundImage: `url(${a1})`, width: "100%", height: "940px" }}>
            <NavBar2/>
            <div className="container">
                <div className="row">
                    <h2 style={{fontFamily:"initial", fontSize:"43px"}}><b>All Shipments</b></h2>
                    {
                        shipments.map((shipment, index) =>
                            <div key={index} className="col-sm-3"><br></br>
                                <Link to={`${shipment.shipId}`}>
                                    <div className="card" style={{ width: "200px", height: "350px"}}>
                                        {/* eslint-disable-next-line */}
                                        <img className="card-image-top" src={i1} alt="Card image"/>
                                        <h4>{shipment.shipAssets}</h4>
                                        <p>{shipment.shipStatus}</p>
                                    </div><br></br><br></br>
                                </Link>
                            </div>
                        )
                    }
                </div>
                <div>
                    <Link to="/manager/dashboard" className="btn btn-secondary">Back to dashboard</Link>
                </div>
            </div>
        </div>
    )
}

export default FetchAllShipment2;