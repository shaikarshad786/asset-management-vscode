import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAssets } from '../store/actions/AssetActions';
import { Link } from 'react-router-dom';
import img1 from '../images/Dell-Laptop.png'; 
import img from '../images/images.jpg'
import NavBar from "./navbar/NavBar";


function FetchAllAssets(){
     const assets=useSelector(state=>state.assetReducer.assets)

    const dispatch=useDispatch();
    const myFunction=()=>{
        dispatch(getAllAssets());
    };
    useEffect(()=> {
        myFunction();
    },[]);

    return (
        <div style={{backgroundImage:`url(${img})`,width:"100%",height:"1500px"}}>
            <NavBar/>
            <div className='row'>
                {
                    assets.map((a, index) =>

                        <div key={index} className='col-sm-4'>
                            <Link to={`/asset/find/byId/${a.assetId}`}>
                                <div className="card" style={{ width: "250px", height: "250px",margin:"20px" ,backgroundColor:'transparent' }}>
                                    <img className="card-img-top" src={img1} alt="Card image" />
                                    <div className="card-body" >
                                        <h4 className="card-title">{a.assetName}</h4>
                                        <p className="card-text">{a.assetPrice}</p>
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
export default FetchAllAssets;