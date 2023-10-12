import SideBar from "../../components/SideBar/SideBar.jsx";
import {Toolbar} from "primereact/toolbar";
import FormTab from "../../components/TabView/FormTab.jsx";
import {RecapTable} from "../../components/Tables/RecapTable.jsx";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import Settings from "../../components/Settings/Settings.jsx";
import './Style.scss'
import {NavBar} from "../../components/NavBar/NavBar.jsx";
export const Home = () => {



    const endContent = (
        <>
            <Link to={"/dashboard"} >
                <Button label="" icon="pi pi-cog" size={"small"} rounded className="p-button-info" />
            </Link>
        </>
    )


    return (
        <>
            <NavBar />
            <div className="home" style={{display: 'flex'}}>
                <SideBar />
                <div className="homeContainer" style={{flex: '6'}}>

                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-md-5 mt-3">
                                <FormTab />

                            </div>
                            <div className="col-md-7 mt-3">
                                <RecapTable />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
