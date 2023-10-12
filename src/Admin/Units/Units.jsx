import React, {useState} from "react";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import {Toolbar} from "primereact/toolbar";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import UnitForm from "../../components/Form/UnitForm.jsx";
import {AdminSideBar} from "../SideBar/AdminSideBar.jsx";
import './Unit.scss'
import {NavBar} from "../../components/NavBar/NavBar.jsx";


export const Units = () => {

    const [visible, setVisible] = useState(false);

    const startContent = (
        <>
            <p style={{color: 'white', fontSize: '17px', marginTop: '12px'}}> Edit Units</p>
        </>

    );

    const endContent = (
        <>
            <Button label="New" icon="pi pi-plus" onClick={() => setVisible(true)} severity="success" size="small" />
            <Dialog header="New Unit" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <UnitForm />
            </Dialog>

        </>
    );
    return (
        <>
            <NavBar />
            <div className="unit mt-5">
                <AdminSideBar />
                <div  className="unitContainer">
                    <Toolbar className='ml-3 mr-3' start={startContent} end={endContent} style={{backgroundColor: '#7996c4'}} />

                    <div className="container">
                        <div className="card mt-5">
                            <DataTable tableStyle={{ minWidth: '50rem' }}>
                                <Column field="name" header="Unit"></Column>
                                <Column field="property" header="Property"></Column>
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}