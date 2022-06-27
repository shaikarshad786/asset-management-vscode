import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAssetsByCategory } from '../store/actions/AssetActions';
import { Link } from 'react-router-dom';
import img1 from '../images/Dell-Laptop.png'; 
import { useParams } from 'react-router-dom';

function FetchAllAssetsByCategory(){
     const assets=useSelector(state=>state.assetReducer.category)
     const { category } = useParams();
    const dispatch=useDispatch();
    const myFunction=()=>{
        dispatch(getAllAssetsByCategory(category));
    }
    useEffect(()=> {
        myFunction();
    },[]);  
    return (
        
        <div >
            <div className='row'>
                {
                    assets.map((a, index) =>

                        <div key={index} className='col-sm-4'>
                            <Link to={`/asset/find/byId/${a.assetId}`}>
                                <div className="card" style={{ width: "200px", height: "300px" }}>
                                    <img className="card-img-top" src={img1} alt="Card image" />
                                    <div className="card-body">
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
export default FetchAllAssetsByCategory;