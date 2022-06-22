import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import FetchAllAssets from './components/FetchAllAssets';
import FetchAssetsById from './components/FetchAssetsById';
import SaveAssets from './components/SaveAssets';
import EditAssets from './components/EditAssets';
import FetchAllAssetsByPrice from './components/FetchAllAssetsByPrice';
import NavBar from './components/NavBar';
import FetchAllAssetsByName from './components/FetchAllAssetsByName';
import FetchAllAssetsByCategory from './components/FetchAllAssetsByCategory';
import FetchAllAssetsByType from './components/FetchAllAssetsByType';


function App() {
  return (
    <div className="App">
       <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<FetchAllAssets/>}/>
          <Route path="/asset/find/byId/:id" element={<FetchAssetsById/>}/>
          <Route path="/asset/add" element={<SaveAssets/>}/>
          <Route path='/asset/modify/:id' element={<EditAssets/>}/>
          <Route path='/asset/all/byPrice/:price' element={<FetchAllAssetsByPrice/>}/>
          <Route path='/asset/all/byName/:name' element={<FetchAllAssetsByName/>}/>
          <Route path='/asset/all/byCategory/:category' element={<FetchAllAssetsByCategory/>}/>
          <Route path='/asset/all/byType/:type' element={<FetchAllAssetsByType/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
