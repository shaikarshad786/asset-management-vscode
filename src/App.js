import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import FetchAllAssets from './components/FetchAllAssets';
import FetchAssetsById from './components/FetchAssetsById';
import SaveAssets from './components/SaveAssets';
import FetchAllAssetsByPrice from './components/FetchAllAssetsByPrice';
import FetchAllAssetsByName from './components/FetchAllAssetsByName';
import FetchAllAssetsByCategory from './components/FetchAllAssetsByCategory';
import FetchAllAssetsByType from './components/FetchAllAssetsByType';
import FetchAllWarehouse from './components/warehouse_components/FetchAllWarehouse';
import FetchWarehouseById from './components/warehouse_components/FetchWarehouseById';
import Home from './components/Home';
import Login from './components/user_components/Login';
import AdminDashBoard from './components/dashboard/AdminDashBoard';
import ManagerDasboard from './components/dashboard/ManagerDashboard';
import UserDashboard from './components/dashboard/UserDashboard';
import CreateUser from './components/user_components/CreateUser';
import FetchAllShipment from './components/shipment components/FetchAllShipment';
import FetchAllShipment2 from './components/shipment components/FetchAllShipment2';
import FetchAllShipment3 from './components/shipment components/FetchAllShipment3';
import FetchShipment from './components/shipment components/FetchShipment';
import FetchShipment2 from './components/shipment components/FetchShipment2';
import FetchShipment3 from './components/shipment components/FetchShipment3';
import CreateShipment from './components/shipment components/CreateShipment';
import EditShipment from './components/shipment components/EditShipment';
import EditAsset from './components/EditAssets';
import FetchAllUsers from './components/user_components/FetchAllUsers';
import FetchUser from './components/user_components/FetchUser';
import EditUser from './components/user_components/EditUser';
import FetchAllAssets1 from './components/FetchAllAssets1';
import FetchAllAssets2 from './components/FetchAllAssets2';
import FetchAssetsById2 from './components/FetchAssetsById2';
import FetchAssetsById1 from './components/FetchAssetsById1';
import SaveWarehouse from './components/warehouse_components/SaveWarehouse';
import PlaceOrder from './components/order/PlaceOrder';
import FetchAllOrder from './components/order/FetchAllOrder';
import OrderById from './components/order/OrderById';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/admin/dashboard" element={<AdminDashBoard />} />
          <Route path="/manager/dashboard" element={<ManagerDasboard/>} />
          <Route path="/user/dashboard" element={<UserDashboard/>} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/save" element={<CreateUser />} />
          <Route path="/asset/all" element={<FetchAllAssets />} />
          <Route path="/asset/find/byId/:id" element={<FetchAssetsById />} />
          <Route path="/asset/find/byId1/:id" element={<FetchAssetsById1/>} />
          <Route path="/asset/find/byId2/:id" element={<FetchAssetsById2 />} />
          <Route path="/asset1/all" element={<FetchAllAssets1/>} />
          <Route path="/asset2/all" element={<FetchAllAssets2/>} />
          <Route path="/asset/add" element={<SaveAssets />} />
          <Route path='/asset/modify/:id' element={<EditAsset />} />
          <Route path='/asset/all/byPrice/:price' element={<FetchAllAssetsByPrice />} />
          <Route path='/asset/all/byName/:name' element={<FetchAllAssetsByName />} />
          <Route path='/asset/all/byCategory/:category' element={<FetchAllAssetsByCategory />} />
          <Route path='/asset/all/byType/:type' element={<FetchAllAssetsByType />} />
          <Route path='/warehouse/all' element={<FetchAllWarehouse />} />
          <Route path='/find/warehouse/:id' element={<FetchWarehouseById />} />
          <Route path='/warehouse/save' element={<SaveWarehouse/>}/>
          <Route path="/shipment/all" element={<FetchAllShipment />} />
          <Route path="/shipment2/all" element={<FetchAllShipment2 />} />
          <Route path="/shipment3/all" element={<FetchAllShipment3 />} />
          <Route path="/shipment/all/:id" element={<FetchShipment />} />
          <Route path="/shipment2/all/:id" element={<FetchShipment2 />} />
          <Route path="/shipment3/all/:id" element={<FetchShipment3 />} />
          <Route path="/shipment/save" element={<CreateShipment />} />
          <Route path="/shipment/edit/:id" element={<EditShipment />} />
          <Route path="/user/all" element={<FetchAllUsers />} />
          <Route path="/user/get/:id" element={<FetchUser />} />
          <Route path="/user/edit/:id" element={<EditUser />} />
          <Route path="/order/save" element={<PlaceOrder/>}/>
          <Route path="/order/all" element={<FetchAllOrder/>}/>
          <Route path="/order/find/:id" element={<OrderById/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
