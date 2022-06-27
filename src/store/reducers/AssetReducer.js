import { ADD_ASSET, ASSET_DELETE_BYID, ASSET_FETCHALL_BYCATEGORY, ASSET_FETCHALL_BYNAME, ASSET_FETCHALL_BYPRICE, ASSET_FETCHALL_BYTYPE, ASSET_FETCH_ALL, ASSET_FETCH_BYID, UPDATE_ASSET } from "../actions/ActionConstants";

const intialState={
    assets:[],
    asset : null,
    newAsset : null,
    updatedAsset:null,
    deleteAsset:null,
    price:[],
    name:[],
    category:[],
    type:[]
}
export default function assetReducer(state=intialState,action){
    if (action.type === ASSET_FETCH_ALL) {
        console.log(action.payload);
        return ({
            ...state,
            assets: action.payload
        })
    }
    if (action.type === ASSET_FETCH_BYID) {
        console.log(action.payload);
        return ({
            ...state,
            asset: action.payload
        })
    }
    if (action.type === ADD_ASSET) {
        console.log(action.payload);
        return ({
            ...state,
            newAsset: action.payload
        })
    }
    if (action.type === UPDATE_ASSET) {
        console.log(action.payload);
        return ({
            ...state,
            updatedAsset: action.payload
        })
    }
    if (action.type === ASSET_DELETE_BYID) {
        console.log(action.payload);
        return ({
            ...state,
            deleteAsset: action.payload
        })
    }
    if (action.type === ASSET_FETCHALL_BYPRICE) {
        console.log(action.payload);
        return ({
            ...state,
            price: action.payload
        })
    }
    if (action.type === ASSET_FETCHALL_BYNAME) {
        console.log(action.payload);
        return ({
            ...state,
            name: action.payload
        })
    }
    if (action.type === ASSET_FETCHALL_BYCATEGORY) {
        console.log(action.payload);
        return ({
            ...state,
            category: action.payload
        })
    }
    if (action.type === ASSET_FETCHALL_BYTYPE) {
        console.log(action.payload);
        return ({
            ...state,
            type: action.payload
        })
    }
    else{
        return state
    }
}