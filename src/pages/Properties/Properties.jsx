import SideBar from "../../components/SideBar/SideBar.jsx";
import React, {useState} from "react";
import {Toolbar} from "primereact/toolbar";
import {InputText} from "primereact/inputtext";
import PropertyTable from "../../components/Tables/PropertyTable";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import {TabPanel, TabView} from "primereact/tabview";
import ExpenseForm from "../../components/TabView/ExpenseForm.jsx";
import IncomeForm from "../../components/TabView/IncomeForm.jsx";
import { SplitButton } from 'primereact/splitbutton';
import {NavBar} from "../../components/NavBar/NavBar.jsx";
import './Style.scss'


const Properties = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [visible, setVisible] = useState(false);
    const handleClickExpense = () => {
        setVisible(true);
        setActiveIndex(0)
    }

    const handleClickIncome = () => {
        setVisible(true);
        setActiveIndex(1)
    }

    const items = [
        {
            label: 'Export to XLS',
            icon: 'pi pi-file-excel',
            command: () => {

            }
        },

        {
            label: 'Export to PDF',
            icon: 'pi pi-file-pdf',
            command: () => {
            }
        }
    ]

    return (
        <>

                <NavBar/>
                <div style={{ display: "flex", height: "100vh" }}>
                    <SideBar/>
                    <div style={{flex: '6'}}>
                        <div className="p-3 border-round-sm  font-bold">
                            <div className=" mt-3">

                                <h1 className="text-2xl text-center font-bold">Property Name</h1>

                                <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#7996c4', borderRadius: '5px'}}>
                                    <div className="container-fluid">
                                       <ul className="mx-auto">
                                             <li className="nav-item">
                                                 <Button label={"Add Expense"} className="mr-3" severity="warning" size="small" onClick={ handleClickExpense}/>
                                                 <Button label={"Add Income"} severity="warning" size="small" onClick={handleClickIncome} />
                                             </li>
                                       </ul>
                                        <ul>
                                            <SplitButton label="Export" model={items} className="p-button-info"/>
                                        </ul>
                                    </div>
                                </nav>
                                <div className="container mt-5">
                                    <div className ="row">
                                        <div className="col-md-3">
                                            <div className="p-inputgroup flex-1">
                                                <Button label={"Filter"} severity="info" size="small" />
                                                <InputText id="year" placeholder="Year" />
                                            </div>

                                        </div>

                                        <div className="col-md-3">
                                            <div className="p-inputgroup flex-1">
                                                <Button label={"Filter"} severity="info" size="small" />
                                            <InputText id="categories" placeholder="Categories" />
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="p-inputgroup flex-1">
                                                <Button label={"Filter"} severity="info" size="small" />
                                                <InputText id="tenants" placeholder="Tenants" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="p-inputgroup flex-1">
                                                <Button label={""} severity="info" size="small" icon="pi pi-search" />
                                                <InputText placeholder="Search" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <PropertyTable/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            <div>
                <Dialog header="Add Expense/Income" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                    <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                        <TabPanel header="Expense" leftIcon="pi pi-money-bill mr-2">
                            <ExpenseForm/>
                        </TabPanel>

                        <TabPanel header="Income" leftIcon="pi pi-wallet mr-2">
                            <IncomeForm/>
                        </TabPanel>
                    </TabView>
                </Dialog>
            </div>
        </>
    )
}

export default Properties