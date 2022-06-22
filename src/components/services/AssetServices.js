import axios  from "axios";
import { BASE_URL } from "../../store/actions/ActionConstants";

export function fetchAllAssets(){
    return axios.get(BASE_URL+"asset/all");
}
export function fetchAssetsById(assetId){
    return axios.get(BASE_URL+"asset/find/byId/"+assetId);
}
export function saveAssets(asset){
    return axios.post(BASE_URL+"asset/add",asset);
}
export function editAssets(asset){
    return axios.put(BASE_URL+"asset/modify",asset);
}
export function deleteAssets(assetId){
    return axios.delete(BASE_URL+"asset/delete/"+assetId);
}
export function fetchAllAssetsByPrice(assetPrice){
    return axios.get(BASE_URL+"asset/all/byPrice/"+assetPrice);
}
export function fetchAllAssetsByName(assetName){
    return axios.get(BASE_URL+"asset/all/byName/"+assetName);
}
export function fetchAllAssetsByCategory(assetCategory){
    return axios.get(BASE_URL+"asset/all/byCategory/"+assetCategory);
}
export function fetchAllAssetsByType(assetType){
    return axios.get(BASE_URL+"asset/all/byType/"+assetType);
}