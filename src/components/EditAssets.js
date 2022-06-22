import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateAsset } from '../store/actions/AssetActions'

function EditAsset() {

    const asset = useSelector(state => state.assetReducer.updateAsset);
    const asset1 = useSelector(state => state.assetReducer.asset)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [assetId, setAssetId] = useState(asset1.assetId);
    const [assetName, setAssetName] = useState("");
    const [assetPrice, setAssetPrice] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [assetCategory, setAssetCategory] = useState("");
    const [assetType, setAssetType] = useState("");

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
        navigate(-1);
     }
    return (
        <div className="container">
            <h1 style={{ backgroundColor: "lightseagreen" }}>Asset Form</h1>
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
            <div style={{ float: "right" }}>
                <button onClick={() => navigate(-1)} className="btn btn-secondary">Go Back Home</button>
            </div>
        </div>

    )
}

export default EditAsset;