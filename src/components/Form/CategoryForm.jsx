import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import React, {useState} from "react";

const CategoryForm = () => {
    const [category, setCategory] = useState({
        category: "",
        type: "",
    });

    const [subcategory, setSubCategory] = useState({
        categories: "",
        subcategory: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(category);
    }

    const handleSubmitSubCategory = (event) => {
        event.preventDefault();
        console.log(subcategory);
    }
    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setCategory({...category, [name]: value});
    }

    const handleChangeSubCategory = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setSubCategory({...subcategory, [name]: value});
    }

    return (
        <>
            <form  className="flex flex-column gap-2" onSubmit={handleSubmit}>
                <div className ="flex">
                    <div className="col">
                        <div className="flex flex-column gap-2">
                            <label className="label-above" htmlFor="category">Category</label>
                            <InputText id="category" onChange={handleChange} name="category"/>
                        </div>
                    </div>

                    <div className="col">
                        <div className="flex flex-column gap-2 ">
                            <label htmlFor="type">Type</label>
                            <InputText id="type" onChange={handleChange} name="type"/>
                        </div>
                    </div>
                </div>
                <div className="row p-fluid mt-5">
                    <div className="col-4"></div>
                    <div className="col-4 p-fluid">
                        <Button label="Add Category" className="p-button-success" type="submit" size="small" />
                    </div>
                    <div className="col-4 "></div>
                </div>

            </form>

            <form  className="flex flex-column gap-2" onSubmit={handleSubmitSubCategory}>
                <div className ="flex">
                    <div className="col">
                        <div className="flex flex-column gap-2">
                            <label className="label-above" htmlFor="categories">Category</label>
                            <InputText id="categories" name="categories" onChange={handleChangeSubCategory} />
                        </div>
                    </div>

                    <div className="col">
                        <div className="flex flex-column gap-2 ">
                            <label htmlFor="subcategory">SubCategory</label>
                            <InputText id="subcategory" name="subcategory" onChange={handleChangeSubCategory} />
                        </div>
                    </div>
                </div>
                <div className="row p-fluid mt-5">
                    <div className="col-4"></div>
                    <div className="col-4 p-fluid">
                        <Button label="Add New SubCategory" className="p-button-success" type="submit" size="small" />
                    </div>
                    <div className="col-4 "></div>
                </div>
            </form>
        </>
    )
}

export default CategoryForm