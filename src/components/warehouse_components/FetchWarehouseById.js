import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getWarehouseById } from '../../store/actions/WarehouseActions';
import img from '../../images/images.jpg'
import img4 from "../../images/Dell-Laptop.png"
import NavBar from '../navbar/NavBar';


function FetchWarehouseById() {

    const warehouse = useSelector(state => state.warehouseReducer.warehouse)
    const assets=useSelector(state=>state.assetReducer.assets)

    const { id } = useParams();

    const dispatch = useDispatch();

    const fetchWarehouseById = () => {
        dispatch(getWarehouseById(id));
    }

    useEffect(fetchWarehouseById, [id]);



    return (
        warehouse !==null &&
        <div style={{backgroundImage:`url(${img})`,width:"100%",height:"1500px"}}>
            <NavBar/>
            <div className='row'>
                {
                    
                    warehouse.assets.length > 0 &&
                    warehouse.assets.map((a,index) =>
                        <div key={index} className='col-sm-4'>
                            <div className="card" style={{ width: "250px", height: "600px", margin: "20px", backgroundColor: 'transparent' }}>
                                <img className="card-img-top" src={img4} alt="Card image" />
                                <div className="card-body" >
                                    <div style={{color:"whitesmoke"}}>
                                        <h2>Asset Details</h2>
                                        <p>WarehouseId: { warehouse.warehouseId }</p>
                                        <p>AssetId: {a.assetId}</p>
                                        <p>AssetName: {a.assetName}</p>
                                        <p>AssetPrice: {a.assetPrice}</p>
                                        <p>Asset Manufacturer:{a.manufacturer}</p>
                                        <p>AssetCategory: {a.assetCategory}</p>
                                        <p>AssetType: {a.assetType}</p>
                                         {/* <Link to={`/warehouse/update/${a.warehouseId}`} className="btn btn-secondary">Edit</Link> &nbsp;&nbsp; */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                
                {/* <div><br></br><br></br>
                    <button onClick={() => navigate(-1)} className="btn btn-secondary">Back</button>
                </div> */}
                
            </div>
        </div>
    )
}

export default FetchWarehouseById;