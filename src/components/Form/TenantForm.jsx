import {InputText} from "primereact/inputtext";
import {Calendar} from "primereact/calendar";
import {Checkbox} from "primereact/checkbox";
import {InputTextarea} from "primereact/inputtextarea";
import {Button} from "primereact/button";
import React, {useState} from "react";

const TenantForm = () => {

    //const [startDate, setStartDate] = useState(null);

   // const [endDate, setEndDate] = useState(null);

    const [ingredients, setIngredients] = useState([]);

    const [tenant, setTenant] = useState({
        property: '',
        unit: '',
        startDate: '',
        endDate: '',
        tenant: '',
        ingredients: [],
        notes: '',

    });

    const onTenantChange = (e) => {
        let _tenant = {...tenant};
        _tenant[e.target.name] = e.target.value;
        setTenant(_tenant);

    }

    const handleTenantSubmit = (e) => {
        e.preventDefault();
        console.log(tenant);
    }
    const onIngredientsChange = (e) => {
        let _ingredients = [...ingredients];

        if (e.checked)
            _ingredients.push(e.value);
        else
            _ingredients.splice(_ingredients.indexOf(e.value), 1);

        setIngredients(_ingredients);
    }

    return (
        <>
            <form  className="flex flex-column gap-2" onSubmit={handleTenantSubmit}>
                <div className ="flex">
                    <div className="col">
                        <div className="flex flex-column gap-2">
                            <label className="label-above" htmlFor="property">Property</label>
                            <InputText id="property" name="property" onChange={onTenantChange} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="flex flex-column gap-2">
                            <label className="label-above" htmlFor="unit">Unit</label>
                            <InputText id="unit" name="unit" onChange={onTenantChange} />
                        </div>
                    </div>
                </div>
                <div className ="flex">
                    <div className="col">
                        <div className="flex flex-column gap-2">
                            <label htmlFor="starDate">Start Date</label>
                            <Calendar onChange={onTenantChange} showIcon name="startDate" />
                        </div>
                    </div>

                    <div className="col">
                        <div className="flex flex-column gap-2">
                            <label htmlFor="endDate">End Date</label>
                            <Calendar  onChange={onTenantChange} showIcon name="endDate" />
                        </div>
                    </div>
                </div>
                <div className ="flex">
                    <div className="col-12">
                        <div className="flex flex-column gap-2">
                            <label className="label-above" htmlFor="tenant">Tenant</label>
                            <InputText id="tenant" name="tenant" onChange={onTenantChange} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-content-center gap-3">
                    <div className="flex align-items-center">
                        <Checkbox inputId="ingredient1" name="pizza" value="Cheese" onChange={onIngredientsChange} checked={ingredients.includes('Cheese')} />
                        <label htmlFor="ingredient1" className="ml-2">Gas</label>
                    </div>
                    <div className="flex align-items-center">
                        <Checkbox inputId="ingredient2" name="pizza" value="Mushroom" onChange={onIngredientsChange} checked={ingredients.includes('Mushroom')} />
                        <label htmlFor="ingredient2" className="ml-2">Electric</label>
                    </div>
                    <div className="flex align-items-center">
                        <Checkbox inputId="ingredient3" name="pizza" value="Pepper" onChange={onIngredientsChange} checked={ingredients.includes('Pepper')} />
                        <label htmlFor="ingredient3" className="ml-2">Trash</label>
                    </div>
                    <div className="flex align-items-center">
                        <Checkbox inputId="ingredient4" name="pizza" value="Onion" onChange={onIngredientsChange} checked={ingredients.includes('Onion')} />
                        <label htmlFor="ingredient4" className="ml-2">Water</label>
                    </div>
                </div>
                <div className ="flex">
                    <div className="col">
                        <div className="flex flex-column gap-2">
                            <label htmlFor="notes">Notes</label>
                            <InputTextarea id="notes" name="notes" onChange={onTenantChange} autoResize/>
                        </div>
                    </div>
                </div>

                <div className="row p-fluid mt-5">
                    <div className="col-4"></div>
                    <div className="col-4 p-fluid">
                        <Button label="Add Tenant" className="p-button-success" size="small" />
                    </div>
                    <div className="col-4 "></div>
                </div>
            </form>
        </>
    )
}

export default TenantForm