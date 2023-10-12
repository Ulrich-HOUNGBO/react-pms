import {AdminSideBar} from "./SideBar/AdminSideBar.jsx";
import "./Style.scss";
import {Link} from "react-router-dom";
import {BiSolidBuildingHouse} from "react-icons/bi";
import {NavBar} from "../components/NavBar/NavBar.jsx";

export const DashBoardHome = () => {
    return (
        <>
            <NavBar />
            <div className="home mt-5" style={{display: 'flex'}}>
                <AdminSideBar />
                <div className="homeContainer">
                   <div className="container">
                       <div className="row ml-3">
                           <div className="col-md-4">
                               <div className="shadow-3 border-bluegray-200 surface-overlay border-3 font-bold p-4 border-round">
                                   <div className="relative">
                                       <div className="absolute bottom-100 left-0">
                                             <span style={{fontSize: '10px'}}>Properties</span>
                                       </div>
                                       <div className="right text-center inline">
                                             <BiSolidBuildingHouse size={30} color={'var(--primary-color)'} />
                                             <p>100</p>
                                       </div>
                                       <div className="absolute top-100 ">
                                           <Link to={"/dashboard/properties"} style={{fontSize: '10px', textDecoration: 'underline', color:'var(--primary-color)'}}>See All Properties</Link>
                                       </div>
                                       <div className="absolute top-100 right-0">

                                       </div>
                                   </div>
                               </div>
                           </div>
                           <div className="col-md-4">
                               <div className="shadow-3 border-bluegray-200 surface-overlay border-3 font-bold text-center p-4 border-round">
                                   <div className="widget">

                                   </div>
                               </div>
                           </div>
                           <div className="col-md-4">
                               <div className="shadow-3 border-bluegray-200 surface-overlay border-3 font-bold text-center p-4 border-round">
                                   <div className="widget">

                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                </div>
            </div>
        </>
    )
}
