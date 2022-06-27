import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShipmentById } from '../../store/actions/ShipmentAction';
import { Link, useNavigate, useParams } from 'react-router-dom'; 
import i1 from '../../images/i1.jpg';
import i2 from '../../images/i2.jfif';
import i3 from '../../images/i3.jpg';
import i4 from '../../images/i4.png';
import i5 from '../../images/i5.jfif';
import i6 from '../../images/i6.jpg';
import bac from '../../images/bac.webp';
import NavBar2 from '../../components/navbar/NavBar2';

function FetchShipment2() {

    const shipment = useSelector(state => state.shipmentReducer.shipment);
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchShipment = () => {
        dispatch(getShipmentById(id));
    }


    // eslint-disable-next-line
    useEffect(fetchShipment, [id]);

    return (
        <div style={{ backgroundImage: `url(${bac})`, width: '100%', height: '1750px', color: "silver" }} >
            <NavBar2/>
            <div>
                {
                    shipment !== null &&
                    <div className="row">
                        <h2 style={{ fontFamily: "revert", fontSize: "50px", color: "whitesmoke" }} className="font-heading text-3xl font-bold"><u><i>Shipment Details</i></u></h2><br></br><br></br>
                        <div className="col"><br></br><br></br>
                            {/* eslint-disable-next-line */}
                            <img src={i1} alt="Card image" width="150px" height="150px" />&nbsp;&nbsp;&nbsp;&nbsp;
                            {/* eslint-disable-next-line */}
                            <img src={i2} alt="Card image" width="100px" height="150px" />&nbsp;&nbsp;&nbsp;&nbsp;
                            {/* eslint-disable-next-line */}
                            <img src={i3} alt="Card image" width="200px" height="150px" />&nbsp;&nbsp;<br></br><br></br>
                            {/* eslint-disable-next-line */}
                            <img src={i4} alt="Card image" width="170px" height="150px" />&nbsp;&nbsp;&nbsp;&nbsp;
                            {/* eslint-disable-next-line */}
                            <img src={i5} alt="Card image" width="180px" height="150px" />&nbsp;&nbsp;&nbsp;&nbsp;
                            {/* eslint-disable-next-line */}
                            <img src={i6} alt="Card image" width="100px" height="150px" />&nbsp;&nbsp;
                        </div>
                        <div className="col">
                            <div className="container" style={{ fontFamily: "cursive", fontSize: "25px", color: "silver" }}>
                                <p>Shipment Id : {shipment.shipId}</p>
                                <p>Shipment Assets : {shipment.shipAssets}</p>
                                <p>Shipment status : {shipment.shipStatus}</p>
                                <p> Sub-Location : {shipment.subLocation}</p>
                                <p>Date-Of-Shipment : {shipment.dateOfShipment}</p>
                                <p>Location : {shipment.location}</p>
                                <p>State : {shipment.state}</p>
                                <p>Country : {shipment.country}</p>
                                <p>From WarehouseId : {shipment.fromWarehouseId}</p>
                                <p>To WarehouseId : {shipment.toWarehouseId}</p>
                                <Link to={`/shipment/edit/${shipment.shipId}`}><button className="btn btn-primary">Edit</button></Link>

                            </div>
                        </div>
                    </div>
                }
                <div><br></br>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8S3ooDHtWbc" title="YouTube video player"
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe><br></br><br></br>
                    <h3 style={{ fontFamily: "initial", fontSize: "50px" }} >Description</h3>
                    <div style={{ textAlign: "left", fontFamily: "revert", fontSize: "18px" }} className="container">
                        <p>- Apple's iPhone 13 features a ceramic shield front, Super Retina XDR display with True
                            Tone and an A15 Bionic chip. The first design change users will notice is the smaller notch.</p>
                        <p>- After years of using the same-sized notch to house the Face ID components, Apple has
                            finally reduced its size by 20%.</p>
                        <p>- Apple doesn't change its device designs but once every few years, so the iPhone 13 retains the iPhone 12
                            redesign. Each model features flat sides made from aluminum sandwiched between glass plates.</p>
                        <p>- The colors available for this generation are midnight, blue, starlight, pink, and PRODUCT (RED). Apple
                            introduced a new green option during its March 2022</p>
                        <p>- The Super Retina XDR display is 28% brighter up to 800 nits for regular content 1200 nits for HDR. In
                            addition, the P3 color gamut and high pixel density mean text will pop, and photos and videos will
                            appear sharper.</p>
                        <p>- Cinematic Mode is an algorithmic video function similar to Portrait Mode for photos. It creates an
                            artificial bokeh around the subject while intelligently tracking them. It also detects when the
                            subject changes or a person looks away from the camera.</p>
                        <p>- The Face ID system is unchanged from previous generations. It consists of six different sensors used to
                            scan a user's face for biometric security. It includes the infrared camera, flood illuminator, proximity
                            sensor, ambient light sensor, dot projector, and selfie camera.</p>
                        <p>- The A15 is a custom Apple Silicon processor built on the 5nm process with a faster Neural Engine, an advanced
                            ISP, and a faster CPU. This translates to better photos, faster algorithmic computational skills, and
                            improved app processing speeds.</p>
                    </div>
                </div>
                <div><br></br><br></br>
                    <button onClick={() => navigate(-1)} className="btn btn-secondary">Back</button>
                </div>
            </div>
        </div>
    )

}

export default FetchShipment2;