import { deleteShipment, fetchShipments, fetchShipmentById, modifyShipment, saveShipment } from '../../components/services/ShipmentService';
import { SHIPMENT_ADD, SHIPMENT_DELETE, SHIPMENT_EDIT, SHIPMENT_FETCH_ALL, SHIPMENT_FETCH_BYID } from './ActionConstants';

export function getAllShipments() {

    return (dispatch) => {
        return fetchShipments().then(resp => { 
            dispatch(getAllShipmentsSuccess(resp.data));
        });
    }
}

export function getAllShipmentsSuccess(data) {
    return (
        {
            type: SHIPMENT_FETCH_ALL,
            payload: data
        }
    )
}

export function getShipmentById(id) {
    return (dispatch) => {
        return fetchShipmentById(id).then(resp => {
            dispatch(getAllShipmentByIdSuccess(resp.data));
        })
    }
}

export function getAllShipmentByIdSuccess(data) {
    return (
        {
            type: SHIPMENT_FETCH_BYID,
            payload: data
        }
    )
}
export function createNewShipment(shipment) {

    return (dispatch) => {
        return saveShipment(shipment).then(resp => {
            dispatch(createNewShipmentSuccess(resp.data));
        });
    }
}

export function createNewShipmentSuccess(data) {

    return (
        {
            type: SHIPMENT_ADD,
            payload: data
        }
    )
}

export function updateShipment(shipment) {

    return (dispatch) => {
        return modifyShipment(shipment).then(resp => {
            dispatch(updateShipmentSuccess(resp.date));
        })
    }
}

export function updateShipmentSuccess(data) {

    return {
        type: SHIPMENT_EDIT,
        payload: data
    }
}

export function deleteShipmentDetails(id) {
    return (dispatch) => {
        return deleteShipment(id).then(resp => {
            dispatch(deleteShipmentDetailsSuccess(resp.data));
        })
    }
}

export function deleteShipmentDetailsSuccess(data) {
    return {
        type: SHIPMENT_DELETE,
        payload: data
    }
}