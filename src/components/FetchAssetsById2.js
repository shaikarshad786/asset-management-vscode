import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import img1 from "../images/Dell-Laptop.png"
import { deleteAsset, getAssetDetails } from '../store/actions/AssetActions';
import { useNavigate } from 'react-router-dom';
import img2 from '../images/img.jpg'
import NavBar3 from './navbar/NavBar3';

function FetchAssetsById2() {

    const asset1 = useSelector(state => state.assetReducer.asset)

    const { id } = useParams();

    const dispatch = useDispatch();

    const fetchAssetById = () => {
        dispatch(getAssetDetails(id));
    }
    useEffect(()=>{fetchAssetById();} ,[id]);

    const navigate = useNavigate();

    // const asset = useSelector(state => state.assetReducer.deleteAsset)

    const deleteAssetById = () => {
        dispatch(deleteAsset(id));
        alert("Asset deleted");
        navigate(-1);           
    }
    
    return (
        <div  style={{backgroundImage:`url(${img2})`, width : '100%', height : '100%'}}>
            <NavBar3/>
            <div>
            {
                asset1 !== null &&
                <div className="row" >
                    <div className="col" style={{margin:"85px"}}>
                        <img src={img1} alt="Card image" />
                    </div>
                    <div className="col" style={{color:"whitesmoke",margin:"85px"}}>
                        <h2>Asset Details</h2>
                        <p>AssetId : {asset1.assetId}</p>
                        <p>AssetName : {asset1.assetName}</p>
                        <p>AssetPrice : {asset1.assetPrice}</p>
                        <p>Manufacturer :{asset1.manufacturer}</p>
                        <p>AssetCategory : {asset1.assetCategory}</p>
                        <p>AssetType : {asset1.assetType}</p>
                    </div>
                </div>
            }

            <div>
                <Link to="/asset/all" className="btn btn-secondary">Back</Link>
            </div>
        </div>
        </div>
    )
}

export default FetchAssetsById2; 