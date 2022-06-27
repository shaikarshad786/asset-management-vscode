import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addAsset} from '../store/actions/AssetActions';
import {getAllWarehouse} from '../store/actions/WarehouseActions';
import NavBar from './navbar/NavBar'

function SaveAssets(){
    const [assetName, setAssetName] = useState("");
    const [assetPrice, setAssetPrice] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [assetCategory, setAssetCategory] = useState("");
    const [assetType, setAssetType] = useState("");
    const [warehouseId, setWarehouseId]=useState("");

    const [formErrors, setFormErrors]=useState({});
    const newAsset1 = useSelector(state=>state.assetReducer.newAsset)
    const warehouse=useSelector(state=>state.warehouseReducer.warehouses)
    const dispatch = useDispatch();

    const navigate = useNavigate();


    const myFunction = () => {
        dispatch(getAllWarehouse()) 
    };
   
    useEffect(()=> {
        myFunction();
    },[]);

    const handleSubmit = () => {
        let errors={};

        if(!assetName){
            errors['assetNameError']= "Asset name is required"
        }
        if(!assetPrice){
            errors['assetPriceError']= "Asset price is required"
        }else if(assetPrice<=0){
            errors['assetPriceError']= "Asset price should be positive"
        }
        if(!manufacturer){
            errors['assetManufaturerError']= "Asset manfacturer is required" 
        }
        if(!assetCategory){
            errors['assetCategoryError']= "Asset category is required" 
        }
        if(!assetType){
            errors['assetTypeError']= "Asset type is required" 
        }
        setFormErrors(errors);

        const noErrors=Object.keys(errors).length===0
        if(noErrors){
        const payload = {
            assetName: assetName,
            assetPrice: assetPrice,
            manufacturer: manufacturer,
            assetCategory: assetCategory,
            assetType: assetType,
        }
        dispatch(addAsset(warehouseId,payload));
        alert("Asert saved")
        navigate(`/find/warehouse/${warehouseId}`)
    }
}


        return (
            <div className="container" style={{ backgroundColor: "#92a8d1", width: "400px", height: "690px" }}>      
                <h1 style={{backgroundColor:"lightseagreen"}}>Asset Form</h1>
                <NavBar/>
                <div className='form-group'>
                    <label htmlFor='assetName'> AssetName </label>
                    <input type="text" className="form-control" name="assetName" placeholder='Enter Asset Name' value={assetName} onChange={a => setAssetName(a.target.value)} />
                    {
                        formErrors.assetNameError &&
                        <div style={{color:"red"}}>{formErrors.assetNameError}</div>
                    }
                </div>
                <div className='form-group'>
                    <label htmlFor='assetPrice'> AssetPrice </label>
                    <input type="text" className="form-control" name="assetPrice" placeholder='Enter Asset Price' value={assetPrice} onChange={a => setAssetPrice(a.target.value)} />
                    {
                        formErrors.assetPriceError &&
                        <div style={{color:"red"}}>{formErrors.assetPriceError}</div>
                    }
                </div>
                <div className='form-group'>
                    <label htmlFor='manufacturer'> Manufacturer </label>
                    <input type="text" className="form-control" name="manufacturer" placeholder='Enter Manufacturer' value={manufacturer} onChange={a => setManufacturer(a.target.value)} />
                    {
                        formErrors.assetManufaturerError &&
                        <div style={{color:"red"}}>{formErrors.assetManufaturerError}</div>
                    }
                </div>
                <div className='form-group'>
                    <label htmlFor='assetCategory'> AssetCategory </label>
                    <input type="text" className="form-control" name="assetCategory" placeholder='Enter Asset Category' value={assetCategory} onChange={a => setAssetCategory(a.target.value)} />
                    {
                        formErrors.assetCategoryError &&
                        <div style={{color:"red"}}>{formErrors.assetCategoryError}</div>
                    }
                </div>
                <div className='form-group'>
                    <label htmlFor='assetType'> AssetType </label>
                    <input type="text" className="form-control" name="assetType" placeholder='Enter Asset Type' value={assetType} onChange={a => setAssetType(a.target.value)} />
                    {
                        formErrors.assetTypeError &&
                        <div style={{color:"red"}}>{formErrors.assetTypeError}</div>
                    }
                </div >

                    <div>

                    <label>WarehouseID</label>&nbsp;&nbsp;

                    <select onChange={e => setWarehouseId(e.target.value)} className="form-control">

                        <option>----Select----</option>

                        {

                            warehouse.map(w => (

                                <option name='warehouseId'>{w.warehouseId} </option>

                            ))}

                    </select>

                </div>

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
