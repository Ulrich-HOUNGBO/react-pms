import {Toolbar} from "primereact/toolbar";
import React, {useState} from "react";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import PropertyForm from "../../components/Form/PropertyForm.jsx";
import {AdminSideBar} from "../SideBar/AdminSideBar.jsx";
import "./Properties.scss";
import {NavBar} from "../../components/NavBar/NavBar.jsx";

export const Property = () => {

    const [visible, setVisible] = useState(false);

    const startContent = (
        <>
            <p className="text-center" style={{color: 'white', fontSize: '17px', marginTop: '12px'}}> Edit Properties</p>
        </>
    );

    const endContent = (
        <>
            <Button label="New" icon="pi pi-plus" onClick={() => setVisible(true)} severity="success" size="small" />
            <Dialog header="New Property" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
               <PropertyForm />
            </Dialog>

        </>
    );

    return (

        <>
            <NavBar />
            <div className="property mt-5">
                <AdminSideBar />
                <div className="propertyContainer">
                    <div className=" mr-3">
                        <Toolbar className='ml-3' start={startContent} end={endContent} style={{backgroundColor: '#7996c4'}}/>
                    </div>

                    <div className="container">
                        <div className="card mt-5">
                            <DataTable tableStyle={{ minWidth: '50rem' }}>
                                <Column field="name" header="Name"></Column>
                                <Column field="isActive" header="isActive"></Column>
                                <Column field="" header=""></Column>
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}