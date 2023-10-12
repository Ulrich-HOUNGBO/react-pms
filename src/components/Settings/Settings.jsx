import React from "react";
import {TabPanel, TabView} from "primereact/tabview";
import CategoryForm from "../Form/CategoryForm.jsx";
import SupplierForm from "../Form/SupplierForm.jsx";
import UnitForm from "../Form/UnitForm.jsx";
import PropertyForm from "../Form/PropertyForm.jsx";
import TenantForm from "../Form/TenantForm.jsx";



const Settings = () => {


    return (
        <>
            <div >
                <TabView>
                    <TabPanel header="Property">
                        <PropertyForm />
                    </TabPanel>

                    <TabPanel header="Unit">
                        <UnitForm />
                    </TabPanel>

                    <TabPanel header="Tenant">
                        <TenantForm />
                    </TabPanel>

                    <TabPanel header="Suppliers">
                        <SupplierForm />
                    </TabPanel>

                    <TabPanel header="Category">
                        <CategoryForm />
                    </TabPanel>
                </TabView>
            </div>
        </>
    )
}

export default Settings