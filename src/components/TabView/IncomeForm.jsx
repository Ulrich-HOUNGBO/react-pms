import {InputText} from "primereact/inputtext";
import {Calendar} from "primereact/calendar";
import {InputTextarea} from "primereact/inputtextarea";
import {Button} from "primereact/button";
import React,  {useState} from "react";
import {Dialog} from "primereact/dialog";
import Settings from "../Settings/Settings.jsx";


const IncomeForm = () => {

    const [dateReceive, setDateReceive] = useState(null);
    const [visible, setVisible] = useState(false);

    return (
        <>
            <form  className="row gap-3">
                <div className="row">
                    <div className="col ">
                        <div className="flex flex-column gap-2">
                            <label  htmlFor="property">Property</label>
                            <InputText id="property"   />
                        </div>
                    </div>

                    <div className="col ">
                        <div className="flex flex-column gap-2 ">
                            <label htmlFor="unit">Unit</label>
                            <InputText id="unit"  />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 ">
                        <div className="flex flex-column gap-2">
                            <label htmlFor="datepaid">Date Receive</label>
                            <Calendar value={dateReceive} onChange={(e) => setDateReceive(e.value)} showIcon />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="flex flex-column gap-2">
                            <label htmlFor="paidfrom">Paid From</label>
                            <InputText id="paidfrom" />
                        </div>
                    </div>
                </div>

                <div className ="row">
                    <div className="col-md-6">
                        <div className="flex flex-column gap-2">
                            <label htmlFor="amout">Amount</label>
                            <InputText id="amount"  />
                        </div>
                    </div>

                    <div className="col-md-6 ">
                        <div className="flex flex-column gap-2">
                            <label htmlFor="category">Category</label>
                            <InputText id="category"  />
                        </div>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-md-12">
                        <div className="flex flex-column gap-2">
                            <label htmlFor="memo">Memo</label>
                            <InputTextarea id="memo" autoResize />
                        </div>
                    </div>
                </div>

                <div className="row p-fluid mt-5">
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <Button label="Add New Income" className="p-fluid" type="submit" icon="pi pi-send" size="small" severity={"success"} />
                    </div>
                    <div className="col-md-5">
                        <Button label="Reset Form" className="p-fluid" type="reset" icon="pi pi-trash" size="small" severity={"danger"} />
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </form>

            <div className="mt-5 text-center">
                <Button label="Settings" icon="pi pi-cog" size="large" onClick={() => setVisible(true)} className="p-button-info setting-button" />
            </div>
            <Dialog onHide={() => setVisible(false)} visible={visible} style={{width: '50vw'}} header="Settings">
                <Settings />
            </Dialog>
        </>
    )
}

export default IncomeForm