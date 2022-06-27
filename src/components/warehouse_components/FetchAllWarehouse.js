import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import img3 from '../../images/background.jpg';
import img4 from '../../images/warehouse.jpg';
import { getAllWarehouse } from '../../store/actions/WarehouseActions';
import NavBar from '../navbar/NavBar';





export default function FetchAllWarehouse() {

    const warehouses = useSelector(state => state.warehouseReducer.warehouses);
    const dispatch = useDispatch();
    const myFunction = () => {
        dispatch(getAllWarehouse());
    };
    useEffect(() => {
        myFunction()
    }, []);
    return (
        <div style={{ backgroundImage: `url(${img3})`, width: "100%", height: "1500px" }}>
            <NavBar/>
            <div className='row'>
                {
                    warehouses.map((w, index) =>
                        <div key={index} className='col-sm-4'>
                            <Link to={`/find/warehouse/${w.warehouseId}`}>
                                <div className="card" style={{ width: "250px", height: "250px", margin: "20px", backgroundColor: 'transparent' }}>
                                    <img className="card-img-top" src={img4} alt="Card image" />
                                    <div className="card-body" >
                                        <h4 className="card-title">{w.warehouseName}</h4>
                                        <h4 className="card-title">{w.warehouseLocation}</h4>
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