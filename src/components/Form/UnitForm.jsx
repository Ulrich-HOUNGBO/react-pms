import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import React, {useState} from "react";

const UnitForm = () => {
    const [unit, setUnit] = useState({
        property: "",
        unit: "",
    });

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setUnit({...unit, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(unit);
    }

    return (
        <>
            <form  className="flex flex-column gap-2" onSubmit={handleSubmit}>
                <div className ="flex">
                    <div className="col">
                        <div className="flex flex-column gap-2">
                            <label className="label-above" htmlFor="property">Property</label>
                            <InputText id="property" name="property" onChange={handleChange} />
                        </div>
                    </div>

                    <div className="col">
                        <div className="flex flex-column gap-2">
                            <label htmlFor="unit">Unit</label>
                            <InputText id="unit" name="unit" onChange={handleChange} />
                        </div>
                    </div>
                </div>

                <div className="row p-fluid mt-5">
                    <div className="col-4"></div>
                    <div className="col-4 p-fluid">
                        <Button label="Add Unit" className="p-button-success" type="submit" size="small" />
                    </div>
                    <div className="col-4"></div>
                </div>
            </form>
        </>
    )
}

export default UnitForm