import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateAsset } from '../store/actions/AssetActions'
import NavBar2 from './navbar/NavBar2';

function EditAsset() {

    const asset1 = useSelector(state => state.assetReducer.asset)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [assetId, setAssetId] = useState(asset1.assetId);
    const [assetName, setAssetName] = useState(asset1.assetName);
    const [assetPrice, setAssetPrice] = useState(asset1.assetPrice);
    const [manufacturer, setManufacturer] = useState(asset1.manufacturer);
    const [assetCategory, setAssetCategory] = useState(asset1.assetCategory);
    const [assetType, setAssetType] = useState(asset1.assetType);

    const handleSubmit = () => {

        const payload = {
            assetId: assetId,
            assetName: assetName,
            assetPrice: assetPrice,
            manufacturer: manufacturer,
            assetCategory: assetCategory,
            assetType: assetType
        }
        dispatch(updateAsset(payload));
        alert("Asset Updated.");
        navigate("/asset/all");
     }
    return (
        <div className="container">
            <h1 style={{ backgroundColor: "lightseagreen" }}>Asset Form</h1>
            <NavBar2/>
            <div className='form-group'>
                <label htmlFor='assetId'> AssetId </label>
                <input type="text" className="form-control" name="assetId" value={assetId} onChange={a => setAssetId(a.target.value)} disabled/>
            </div>
            <div className='form-group'>
                <label htmlFor='assetName'> AssetName </label>
                <input type="text" className="form-control" name="assetName" value={assetName} onChange={a => setAssetName(a.target.value)} />
            </div>
            <div className='form-group'>
                <label htmlFor='assetPrice'> AssetPrice </label>
                <input type="text" className="form-control" name="assetPrice" value={assetPrice} onChange={a => setAssetPrice(a.target.value)} />
            </div>
            <div className='form-group'>
                <label htmlFor='manufacturer'> Manufacturer </label>
                <input type="text" className="form-control" name="manufacturer" value={manufacturer} onChange={a => setManufacturer(a.target.value)} />
            </div>
            <div className='form-group'>
                <label htmlFor='assetCategory'> Category </label>
                <input type="text" className="form-control" name="assetCategory" value={assetCategory} onChange={a => setAssetCategory(a.target.value)} />
            </div>
            <div className='form-group'>
                <label htmlFor='assetType'> AssetType </label>
                <input type="text" className="form-control" name="assetType" value={assetType} onChange={a => setAssetType(a.target.value)} />
            </div >
            <div style={{ float: "center" }}>
                <button onClick={handleSubmit} className="btn btn-primary" >Submit</button>
            </div>

            

            {/* <`div style={{ float: "right" }}>
                <button onClick={() => navigate("/asset/all")} className="btn btn-secondary">Go Back Home</button>
            </div>` */}
        </div>

    )
}

export default EditAsset;