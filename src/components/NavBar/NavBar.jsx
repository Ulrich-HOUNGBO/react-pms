import {Button} from "primereact/button";
import "./NavBar.css"
import {Link} from "react-router-dom";
import React from "react";
export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-blue-700 mt-3 mr-2 ml-3 shadow-3 border-round">
                <div className="container-fluid">
                    <Button className="mr-3 bg-blue-900" text icon="pi pi-chart-line" size="large" style={{fontSize: '30px'}} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item " >
                                <Link to={"/dashboard"} style={{textDecoration: 'none'}}>
                                    {window.location.pathname.includes('/dashboard') ? (
                                        <Button label="Dashboard" className="mr-3 mt-2" size='large' />
                                    ) : (
                                        <Button label="Dashboard" className="mr-3 mt-2" size='large' text />
                                    )}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Button label="Reports" className="mr-3 mt-2" text />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}