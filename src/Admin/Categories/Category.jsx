import {Toolbar} from "primereact/toolbar";
import React, {useState} from "react";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import CategoryForm from "../../components/Form/CategoryForm.jsx";
import {AdminSideBar} from "../SideBar/AdminSideBar.jsx";
import './Categories.scss'
import {NavBar} from "../../components/NavBar/NavBar.jsx";

export const Category = () => {

    const [visible, setVisible] = useState(false);

    const startContent = (
        <>
            <p style={{color: 'white', fontSize: '17px', marginTop: '12px'}}> Edit Categories</p>
        </>

    );

    const endContent = (
        <>
            <Button label="New" icon="pi pi-plus" onClick={() => setVisible(true)} severity="success" size="small" />
            <Dialog header="New Category" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <CategoryForm />
            </Dialog>

        </>
    );

    return (

        <>
            <NavBar />
            <div className="category mt-5">
                <AdminSideBar />

                <div className="categoryContainer">
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