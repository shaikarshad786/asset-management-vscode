import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addAsset} from '../store/actions/AssetActions';

function SaveAssets(){
    const [assetName, setAssetName] = useState("");
    const [assetPrice, setAssetPrice] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [assetCategory, setAssetCategory] = useState("");
    const [assetType, setAssetType] = useState("");

    const newAsset1 = useSelector(state=>state.assetReducer.newAsset)

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = () => {
        const payload = {
            assetName: assetName,
            assetPrice: assetPrice,
            manufacturer: manufacturer,
            assetCategory: assetCategory,
            assetType: assetType
        }
        dispatch(addAsset(payload));
        alert("Asert saved")
        navigate(-1);
    }

        return (
            <div className="container">      
                <h1 style={{backgroundColor:"lightseagreen"}}>Asset Form</h1>
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
export default SaveAssets;
