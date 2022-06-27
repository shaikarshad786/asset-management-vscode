import { SHIPMENT_ADD, SHIPMENT_DELETE, SHIPMENT_EDIT, SHIPMENT_FETCH_ALL, SHIPMENT_FETCH_BYID } from "../../store/actions/ActionConstants";

const initialState = {
    shipments : [],
    shipment : null,
    newshipment : null,
    updateAsset : null,
    deleteShipment : null
}

export default function shipmentReducer(state = initialState, action) {

    if(action.type === SHIPMENT_FETCH_ALL) {
        return ({
            ...state,
            shipments : action.payload
        });
    }

    if(action.type === SHIPMENT_FETCH_BYID) {
        return ({
            ...state,
            shipment : action.payload
        });
    }

        if(action.type === SHIPMENT_ADD) {
            return ({
                ...state,
                newshipment : action.payload 
            });
        }

        if(action.type === SHIPMENT_EDIT) {
            return ({
                ...state,
                updateAsset : action.payload
            });
        }

        if(action.type === SHIPMENT_DELETE) {
            return ({
                ...state,
                deleteShipment : action.payload
            })
        }
  
    else {
        return state;
    }
}