import { deleteAssets, editAssets, fetchAllAssets, fetchAllAssetsByCategory, fetchAllAssetsByName, fetchAllAssetsByPrice, fetchAllAssetsByType, fetchAssetsById, saveAssets } from "../../components/services/AssetServices";
import { ADD_ASSET, ASSET_DELETE_BYID, ASSET_FETCHALL_BYCATEGORY, ASSET_FETCHALL_BYNAME, ASSET_FETCHALL_BYPRICE, ASSET_FETCHALL_BYTYPE, ASSET_FETCH_ALL, ASSET_FETCH_BYID, UPDATE_ASSET } from "./ActionConstants";

export function getAllAssets() {
    return (dispatch) => {
        fetchAllAssets().then(
            resp => {
                dispatch(getAllAssetSuccess(resp.data));
            }
        )
    }
}

export function getAllAssetSuccess(data) {
    return {
        type: ASSET_FETCH_ALL,
        payload: data
    }
}

export function getAssetDetails(id) {
    return (dispatch) => {
        fetchAssetsById(id).then(
            resp => {
                dispatch(getAssetSuccess(resp.data))
            }
        )
    }
}
export function getAssetSuccess(data) {
    return {
        type: ASSET_FETCH_BYID,
        payload: data
    }
}

export function addAsset(asset) {

    return (dispatch) => {
        saveAssets(asset).then(
            resp => {
                dispatch(addAssetSuccess(resp.data));
            }
        )
    }
}

export function addAssetSuccess(data) {
    return {
        type: ADD_ASSET,
        payload: data
    }
}

export function updateAsset(asset) {

    return (dispatch) => {
        editAssets(asset).then(
            resp => {
                dispatch(updateAssetSuccess(resp.data));
            }
        )
    }
}

export function updateAssetSuccess(data) {
    return {
        type: UPDATE_ASSET,
        payload: data
    }
}
export function deleteAsset(id) {
    return (dispatch) => {
        deleteAssets(id).then(
            resp => {
                dispatch(deleteAssetSuccess(resp.data));
            }
        )
    }
}
export function deleteAssetSuccess(data) {
    return {
        type: ASSET_DELETE_BYID,
        payload: data
    }
}
export function getAllAssetsByPrice(assetPrice) {
    return (dispatch) => {
        fetchAllAssetsByPrice(assetPrice).then(
            resp => {
                dispatch(getAllAssetsSuccess1(resp.data));
            }
        )
    }
}

export function getAllAssetsSuccess1(data) {
    return {
        type: ASSET_FETCHALL_BYPRICE,
        payload: data
    }
}
export function getAllAssetsByName(assetName) {
    return (dispatch) => {
        fetchAllAssetsByName(assetName).then(
            resp => {
                dispatch(getAllAssetsByNameSuccess(resp.data));
            }
        )
    }
}

export function getAllAssetsByNameSuccess(data) {
    return {
        type: ASSET_FETCHALL_BYNAME,
        payload: data
    }
}
export function getAllAssetsByCategory(assetCategory) {
    return (dispatch) => {
        fetchAllAssetsByCategory(assetCategory).then(
            resp => {
                dispatch(getAllAssetsByCategorySuccess(resp.data));
            }
        )
    }
}

export function getAllAssetsByCategorySuccess(data) {
    return {
        type: ASSET_FETCHALL_BYCATEGORY,
        payload: data
    }
}
export function getAllAssetsByType(assetType) {
    return (dispatch) => {
        fetchAllAssetsByType(assetType).then(
            resp => {
                dispatch(getAllAssetsByTypeSuccess(resp.data));
            }
        )
    }
}

export function getAllAssetsByTypeSuccess(data) {
    return {
        type: ASSET_FETCHALL_BYTYPE,
        payload: data
    }
}