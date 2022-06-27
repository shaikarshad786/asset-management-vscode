import React from "react";
import u1 from '../../images/u1.jpg';
import u4 from '../../images/u4.jpeg';
import u2 from '../../images/u2.jpg';
import u3 from '../../images/u5.webp';
import ba from '../../images/ba.jpg';
import NavBar3 from "../navbar/NavBar3";



function UserDashboard() {

    const myUser = localStorage.getItem("myUser");
    console.log(myUser);

    return (
        <div>
            {myUser !== null ?
                <div style={{ backgroundImage: `url(${ba})`, width: "100%", height: "2300px" }}>
                    <NavBar3 />
                    <div>
                        <div>
                            <div style={{ fontFamily: "inherit", fontSize: "30px", color: "black" }}>
                                <h3><u><i>Hello {JSON.parse(myUser).userName}</i></u></h3>
                                <h1><u><i>User Dashboard</i></u></h1><br></br>
                            </div>
                        </div><br></br><br></br>
                        <img style={{ float: "left" }} src={u1} alt="ship-warehouse" width="150px" height="150px" />
                        <p style={{ fontFamilt: "inherit", fontSize: "20px", color: "black" }}>User (computing), a person (or software) using an information system.User (telecommunications), an entity using a
                            telecommunications system.
                        </p><br></br>
                        <p style={{ fontFamilt: "inherit", fontSize: "20px", color: "black" }}>The user access level of editors affects their abilities to perform specific actions on Wikipedia. A user's access
                            level depends on which rights (also called permissions, user groups, bits, or flags) are assigned to accounts.
                            There are two types of access leveling: automatic, and requested. User access levels are determined by whether the
                            Wikipedian is logged in, the account's age and edits, and what manually assigned rights the account has accesed.
                        </p><br></br>
                        <img style={{ float: "right" }} src={u4} alt="user" width="290px" height="350px" />
                        <div style={{ fontFamily: "inherit", fontSize: "20px", color: "black" }}>
                            <h3>Users abilities</h3>
                            <p>1.  Account Creator</p>
                            <p>2.  Autopatrolled</p>
                            <p>3.  Event coordinator</p>
                            <p>4.  Extended confirmed</p>
                            <p>5.  File mover</p>
                            <p>6.  Template eitor</p>
                            <p>7.  Pending changes reviewer</p>
                        </div><br></br><br></br><br></br>
                        <div>
                            <img src={u2} alt="shipment-port" width="90%" height="400px" />
                        </div><br></br><br></br>
                        <div>
                            <h3 style={{ fontFamily: "inherit", fontSize: "30px", color: "black" }}><u>Users Maintenance</u></h3>
                            <p style={{ fontFamily: "inherit", fontSize: "20px", color: "black" }}>The technical meaning of maintenance involves functional checks, servicing, repairing or replacing of necessary
                                devices, equipment, machinery, building infrastructure, and supporting utilities in industrial, business, and
                                residential installations.Over time, this has come to include multiple wordings that describe various
                                cost-effective practices to keep equipment operational; these activities occur either before or after a
                                failure.
                            </p>
                            <img src={u3} alt="shipment" width="90%" height="600px" />
                            <div><br></br><br></br>
                                <h3 style={{ fontFamily: "inherit", fontSize: "30px", color: "black" }}><u>Shipment </u></h3><br></br>
                                <p style={{ fontFamily: "inherit", fontSize: "20px", color: "black" }}>Shipment is a method of delivering goods from the supplier or the product owner to the customer
                                    directly. In most cases, the customer orders the goods from the product owner. This delivery scheme reduces
                                    transportation and storage costs, but requires additional planning and administration.
                                </p>
                                <p style={{ fontFamily: "inherit", fontSize: "20px", color: "black" }}>Direct shipment is a common practice in industries that rely on outsourced manufacturing to a big extent,
                                    like high-tech, apparel and footwear as well as durables industries.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                : <h2> Please Login</h2>
            }
        </div>
    )

}

export default UserDashboard;