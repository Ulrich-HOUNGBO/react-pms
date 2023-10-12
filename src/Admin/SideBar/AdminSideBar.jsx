import './SideBar.css'
import {
    BsBuildingFillGear,
    BsFillTagsFill,
} from 'react-icons/bs';
import {BiSolidDashboard } from 'react-icons/bi';
import {FaUserCog, FaUserFriends} from 'react-icons/fa';
import { PiUniteSquareFill } from "react-icons/pi";
import { NavLink, Link } from 'react-router-dom';
import {MdCategory} from "react-icons/md";

export const AdminSideBar = () => {

    const MenuItems = [
        {
            path: "/dashboard",
            icon: <BiSolidDashboard className="icon" />,
            title: "DashBoard"
        },

        {
            path: "/dashboard/properties",
            icon: <BsBuildingFillGear className="icon" />,
            title: "Properties"
        },

        {
            path: "/dashboard/suppliers",
            icon: <FaUserCog className="icon" />,
            title: "Suppliers"
        },

        {
            path: "/dashboard/categories",
            icon: <MdCategory className="icon" />,
            title: "Categories"
        },

        {
            path: "/dashboard/tenants",
            icon: <FaUserFriends className="icon" />,
            title: "Tenants"
        },

        {
            path: "/dashboard/units",
            icon: <PiUniteSquareFill className="icon" />,
            title: "Units"
        },

        {
            path: "/dashboard/types",
            icon: <BsFillTagsFill className="icon" />,
            title: "Types"
        }
    ]


    return (
        <>
            <div className="sidebar">
                <div className="top" style={{marginTop: '10px'}}>
                    <Link to={"/"} style={{textDecoration: 'none'}}>
                        <span className="logo">JAM PROPERTY</span>
                    </Link>
                </div>

                <hr />

                <div className="center">
                    <ul>
                        {MenuItems.map((item, index) => {
                            return (
                                <NavLink to={item.path} style={{textDecoration: 'none'}} key={index}>
                                    <li className={ window.location.pathname === item.path ? 'active-link' : ''}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </li>
                                </NavLink>
                            )
                        })}

                    </ul>
                </div>

                <div className="bottom">


                </div>
            </div>
        </>
    )
}
