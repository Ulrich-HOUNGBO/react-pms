import {Toolbar} from "primereact/toolbar";
import React, {useState} from "react";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import TenantForm from "../../components/Form/TenantForm.jsx";
import {AdminSideBar} from "../SideBar/AdminSideBar.jsx";
import './Tenant.scss'
import {NavBar} from "../../components/NavBar/NavBar.jsx";

export const Tenants = () => {

    const [visible, setVisible] = useState(false);

    const startContent = (
        <>
            <p style={{color: 'white', fontSize: '17px', marginTop: '12px'}}>Edit Tenants</p>
        </>
    );

    const endContent = (
        <>
            <Button label="New" icon="pi pi-plus" onClick={() => setVisible(true)} severity="success" size="small" />
            <Dialog header="New Tenant" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <TenantForm />
            </Dialog>
        </>
    );

    return (

        <>
            <NavBar />
            <div className="tenant mt-5">
                <AdminSideBar />
                <div className="tenantContainer">
                    <Toolbar className='ml-3 mr-3' start={startContent} end={endContent} style={{backgroundColor: '#7996c4'}} />
                    <div className="container">
                        <div className="card mt-5">
                            <DataTable tableStyle={{ minWidth: '50rem' }}>
                                <Column field="name" header="Name"></Column>
                                <Column field="isActive" header="isActive"></Column>
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
