import React from "react";
import m1 from '../../images/m1.webp';
import m2 from '../../images/m2.jpg';
import m3 from '../../images/m3.webp';
import m5 from '../../images/m5.png';
import b from '../../images/b.jpeg';
import NavBar2 from "../navbar/NavBar2";



function ManagerDasboard() {

    const myUser = localStorage.getItem("myUser");
    console.log(myUser);

    return (
        <div>
            {myUser !== null ?
                <div style={{ backgroundImage: `url(${b})`, width: "100%", height: "2120px" }}>

                    <NavBar2/>
                    <div>
                        <div>
                            <div style={{ fontFamily: "inherit", fontSize: "30px", color: "silver" }}>
                                <h3><u><i>Hello {JSON.parse(myUser).userName}</i></u></h3>
                                <h1><u><i>Manager Dashboard</i></u></h1><br></br><br></br>
                            </div>
                        </div>

                        <img style={{ float: "left" }} src={m1} alt="aship-graph" width="230px" height="150px" />
                        <div style={{ fontFamilt: "inherit", fontSize: "20px", color: "ivory" }}>
                            <p>A Manager is a person who manages or is in charge of something. Managers can control departments in companies, or
                                guide the people who work for them. Managers must often make decisions about things.
                            </p>
                            <p>The manager is responsible for overseeing and leading the work of a group of people in many instances. The
                                manager is also responsible for planning and maintaining work systems, procedures, and policies that enable
                                and encourage the optimum performance of its people and other resources within a business unit.
                            </p>
                        </div>
                        <img style={{ float: "right" }} src={m2} alt="shipment" width="400px" height="400px" /><br></br><br></br>
                        <div>
                            <h3 style={{ fontFamily: "initial", color: "ghostWhite", fontSize: "50px" }}><u>According to Henri Fayol,</u></h3>
                            <h6 style={{ fontFamily: "initial", color: "ghostWhite", fontSize: "50px" }}>The Managers should have</h6>
                            <ul style={{ color: "silver", fontSize: "20px" }}>
                                <p>1.  Planning</p>
                                <p>2.  Organising</p>
                                <p>3.  Leading</p>
                                <p>4.  Co-ordinating</p>
                                <p>5.  Controlling</p>
                            </ul><br></br>
                        </div>
                        <div>
                            <h3 style={{ fontFamily: "initial", color: "ghostWhite", fontSize: "50px" }}><u>General-Manager abilities</u></h3><br></br>
                            <p className="container" style={{ fontFamilt: "inherit", fontSize: "20px", color: "ivory" }}>A general manager (GM) is an executive who has overall responsibility for managing both the revenue and cost
                                elements of a company's income statement, known as profit & loss (P&L) responsibility. A general manager usually
                                oversees most or all of the firm's marketing and sales functions as well as the day-to-day operations of the
                                business. Frequently, the general manager is responsible for effective planning, delegating, coordinating,
                                staffing, organizing, and decision making to attain desirable profit making results for an organization.
                            </p><br></br>
                            <hr style={{ color: "white" }}></hr>
                            <p className="container" style={{ fontFamilt: "inherit", fontSize: "20px", color: "ivory" }}>In technology companies, general managers are often given the title of product manager. In consumer products
                                companies, general managers are often given the title brand manager or category manager. In professional
                                services firms, the general manager may hold titles such as managing partner, senior partner, or managing
                                director.
                            </p><br></br>

                        </div>
                        <img src={m3} alt="shipment" width="90%" height="400px" />
                    </div><br></br>
                    <div>
                        <h3 style={{ fontFamily: "initial", color: "ghostWhite", fontSize: "50px" }}><u>Management</u></h3><br></br>
                        <img style={{ float: "right" }} src={m5} alt="shipment" width="350px" height="350px" />
                        <p className="container" style={{ fontFamilt: "inherit", fontSize: "20px", color: "ivory" }}>A warehouse management system (WMS) is a set of policies and processes intended to organise the work of a warehouse
                            or distribution centre, and ensure that such a facility can operate efficiently and meet its objectives.
                        </p><br></br>
                        <p className="container" style={{ fontFamilt: "inherit", fontSize: "20px", color: "ivory" }}>
                            The core function of a warehouse management system is to record the arrival and departure of inventory.From that
                            starting point, features are added like recording the precise location of stock within the warehouse, optimising the
                            use of available space, or coordinating tasks for maximum efficiency.
                        </p>
                    </div>
                </div>

                : <h2> Please Login</h2>
            }
        </div>
    )

}

export default ManagerDasboard;