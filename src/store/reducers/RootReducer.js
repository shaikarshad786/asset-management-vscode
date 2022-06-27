import { combineReducers } from "redux";
import assetReducer from "./AssetReducer";
import warehouseReducer from "./WarehouseReducer";
import userReducer from './UserReducer';
import shipmentReducer from './ShipmentReducer';
import orderReducer from './OrderReducer';

const rootReducer = combineReducers({
    assetReducer,
    warehouseReducer,
    userReducer,
    shipmentReducer,
    orderReducer
})
export default rootReducer; 