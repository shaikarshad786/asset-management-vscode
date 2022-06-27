import React from 'react';
import { Link } from 'react-router-dom';
import assets from '../images/assets.jpg'
import shipment from '../images/shipment.jpg'
import warehouse from '../images/warehouse.jpg'
import h1 from '../images/h1.jpg';
import AMS from '../images/AMS.jpeg';

function HomePage() {

    return (
        <div>
        <div
            id='intro-example'
            className='p-5 text-center bg-image '
            style={{ backgroundImage: `url(${h1})`, width: "100%", height: "1340px" }}>
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', width: "100%", height: "270px" }}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <div className='text-white'>
                        <img src={AMS} className="rounded" alt="Logo" width="80px" height="80px" color='whitesmoke' />
                        <h1 className='mb-2' ><b><em>WELCOME! </em></b></h1>
                        <h4 className='mb-3'><b>ASSET-MANAGEMENT-SYSTEM</b></h4>
                        <Link
                            className='btn btn-outline-light btn-lg m-2'
                            to='/user/login'
                            role='button'
                            rel='nofollow'>SignIn</Link>
                        <Link
                            className='btn btn-outline-light btn-lg m-3'
                            to='/user/save'
                            role='button'>SignUp</Link>
                    </div>


                </div>
            </div><br></br>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <img src={assets} className="rounded-circle" alt="Asset" width="350px" height="250px" />
                <img src={shipment} className="rounded-circle" alt="Shipment" width="350px" height="250px" />
                <img src={warehouse} className="rounded-circle" alt="Warehouse" width="350px" height="250px" />
            </div><br></br>
            <h3 style={{ fontFamily: "inherit", fontSize: "35px", color: "whitesmoke" }}><u>Assets : </u></h3>
            <div style={{ fontFamily: "inherit", fontSize: "19px", color: "whitesmoke" }}>
                <p>In financial accounting, an asset is any resource owned or controlled by a business or an economic entity. It is
                    anything (tangible or intangible) that can be used to produce positive economic value. Assets represent value of
                    ownership that can be converted into cash (although cash itself is also considered an asset). The balance sheet of
                    a firm records the monetary value of the assets owned by that firm. It covers money and other valuables belonging
                    to an individual or to a business.</p>
                <hr></hr>
                <p>Assets can be grouped into two major classes: tangible assets and intangible assets. Tangible assets contain
                    various subclasses, including current assets and fixed assets.Current assets include cash, inventory, accounts
                    receivable, while fixed assets include land, buildings and equipment.Intangible assets are non-physical resources
                    and rights that have a value to the firm because they give the firm an advantage in the marketplace. Intangible
                    assets include goodwill, copyrights, trademarks, patents, computer programs,and financial assets, including
                    financial investments, bonds, and stocks.</p>
            </div><br></br>
            <h3 style={{ fontFamily: "inherit", fontSize: "35px", color: "whitesmoke" }}><u>Shipment : </u></h3>
            <div style={{ fontFamily: "inherit", fontSize: "19px", color: "whitesmoke" }}>
                <p>Shipping is the transportation of cargo.Cargo consists of bulk goods conveyed by water, air, or land. In economics,
                    freight is cargo that is transported at a freight rate for commercial gain. Cargo was originally a shipload but now
                    covers all types of freight, including transport by rail, van, truck, or intermodal container.The term cargo is
                    also used in case of goods in the cold-chain, because the perishable inventory is always in transit towards a final
                    end-use, even when it is held in cold storage or other similar climate-controlled facility. The term freight is
                    commonly used to describe the movements of flows of goods being transported by any mode of transportation.</p>
                <hr></hr>
                <p>Multi-modal container units, designed as reusable carriers to facilitate unit load handling of the goods contained,
                    are also referred to as cargo, specially by shipping lines and logistics operators. Similarly, aircraft ULD boxes are
                    also documented as cargo, with associated packing list of the items contained within. When empty containers are shipped
                    each unit is documented as a cargo and when goods are stored within, the contents are termed as containerised cargo.</p>
            </div>
            
        </div>
        </div>
    )
}

export default HomePage;