import Axios from 'axios';
import { BASE_URL } from '../../store/actions/ActionConstants';

export function fetchShipments() {
    return Axios.get(BASE_URL + "shipment/all");
}

export function fetchShipmentById(id) {
    return Axios.get( BASE_URL + "shipment/find/" + id);
}

export function saveShipment(shipment) {
    return Axios.post(BASE_URL + "shipment/save",shipment);
}

export function modifyShipment(shipment) {
    return Axios.put(BASE_URL + "shipment/modify", shipment);
}

export function deleteShipment(id) {
    return Axios.delete(BASE_URL + "shipment/delete/" + id);
}

// export function userLogin(payload) {
//     return Axios.post(BASE_URL + "user/login",payload);
// }