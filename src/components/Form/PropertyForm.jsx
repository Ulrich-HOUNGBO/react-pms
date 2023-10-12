import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import React from "react";

const PropertyForm = () => {

    const [property, setProperty] = React.useState({
        property: ""
    })

    const handlePropertyChange = (e) => {
        const {name, value} = e.target
        setProperty({...property, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(property)
    }

    return (
        <>
            <form  className="flex flex-column gap-2" onSubmit={handleSubmit}>
                <div className ="flex">
                    <div className="col-12">
                        <div className="flex flex-column gap-2">
                            <label className="label-above" htmlFor="property">Property</label>
                            <InputText id="property" name="property" onChange={handlePropertyChange} />
                        </div>
                    </div>
                </div>
                <div className="row p-fluid mt-5">
                    <div className="col-4"></div>
                    <div className="col-4 p-fluid">
                        <Button label="Add Property" className="p-button-success" type="submit" size="small" />
                    </div>
                    <div className="col-4"></div>
                </div>

            </form>
        </>
    )
}

export default PropertyForm