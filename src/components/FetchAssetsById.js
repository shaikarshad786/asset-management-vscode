import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import img1 from "../images/Dell-Laptop.png"
import { deleteAsset, getAssetDetails } from '../store/actions/AssetActions';
import { useNavigate } from 'react-router-dom';

function FetchAssetsById() {

    const asset1 = useSelector(state => state.assetReducer.asset)

    

    const { id } = useParams();

    const dispatch = useDispatch();

    const fetchAssetById = () => {
        dispatch(getAssetDetails(id));
    }

    const navigate = useNavigate();

    // const asset = useSelector(state => state.assetReducer.deleteAsset)

    const deleteAssetById = () => {
        dispatch(deleteAsset(id));
        alert("Asset deleted");
        navigate(-1);           
    }
    useEffect(fetchAssetById,deleteAssetById, [id]);
    return (
        <div className='container-fluid'>
            {
                asset1 !== null &&
                <div className="row">
                    <div className="col">
                        <img src={img1} alt="Card image" />
                    </div>
                    <div className="col">
                        <h2>Product Details</h2>
                        <p>AssetId : {asset1.assetId}</p>
                        <p>AssetName : {asset1.assetName}</p>
                        <p>AssetPrice : {asset1.assetPrice}</p>
                        <p>Manufacturer :{asset1.manufacturer}</p>
                        <p>AssetCategory : {asset1.assetCategory}</p>
                        <p>AssetType : {asset1.assetType}</p>
                        <Link to={`/asset/modify/${asset1.assetId}`} className="btn btn-secondary">Edit</Link> &nbsp;&nbsp;
                        <button onClick={deleteAssetById} className="btn btn-secondary">Delete</button><br></br><br></br>
                    </div>
                </div>
            }

            <div>
                <Link to="/asset/all" className="btn btn-secondary">Back</Link>
            </div>
        </div>
    )
}

export default FetchAssetsById;