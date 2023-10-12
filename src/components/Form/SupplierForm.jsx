import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import React, {useState} from "react";

const SupplierForm = () => {

    const [supplier, setSupplier] = useState({
        supplier: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(supplier);
    }

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setSupplier({...supplier, [name]: value});
    }
    return (
        <>
            <form  className="flex flex-column gap-2" onSubmit={handleSubmit}>
                <div className ="flex">
                    <div className="col-12">
                        <div className="flex flex-column gap-2">
                            <label className="label-above" htmlFor="supplier">Supplier</label>
                            <InputText id="Supplier" name="supplier" onChange={handleChange}/>
                        </div>
                    </div>

                </div>
                <div className="row p-fluid mt-5">
                    <div className="col-4"></div>
                    <div className="col-4 p-fluid">
                        <Button label="Add Supplier" className="p-button-success" type="submit" size="small"/>
                    </div>
                    <div className="col-4 "></div>
                </div>
            </form>
        </>
    )
}

export default SupplierForm