
import React from "react";
import {Routes, Route} from "react-router-dom";
import {DashBoardHome} from "../../Admin/DashBoardHome.jsx";
import {Property} from "../../Admin/Properties/Property.jsx";
import {Suppliers} from "../../Admin/Suppliers/Suppliers.jsx";
import {Tenants} from "../../Admin/Tenants/Tenants.jsx";
import {Units} from "../../Admin/Units/Units.jsx";
import {Type} from "../../Admin/Types/Type.jsx";
import {Category} from "../../Admin/Categories/Category.jsx";



const DashBoard = () => {


    return (
        <>
            <Routes>
                <Route path="/" element={<DashBoardHome />} />
                <Route path="/properties" element={<Property />} />
                <Route path="/suppliers" element={<Suppliers />} />
                <Route path="/categories" element={<Category />} />
                <Route path="/tenants" element={<Tenants />} />
                <Route path="/units" element={<Units />} />
                <Route path="/types" element={<Type />} />
            </Routes>
        </>
    )
}


export default DashBoard;
